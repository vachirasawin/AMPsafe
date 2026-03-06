import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcrypt";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials, request) {
                const { email, password } = credentials;

                try {
                    await connectMongoDB();

                    const user = await User.findOne({ email });
                    if (!user) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/sign%20in"
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account?.providers === "credentials") {
                token.id = user._id;
                token.firstName = user.firstName || null;
                token.lastName = user.lastName || null;
                token.email = user.email;
            } else if (account?.provider === "google" || account?.provider === "github" || account?.provider === "facebook") {
                token.id = user.id;
                token.email = user.email;
                
                if (user?.name) {
                    const [firstName, ...lastNameParts] = user.name.split(" ");
                    token.firstName = firstName || null;
                    token.lastName = lastNameParts.join(" ") || null;
                }
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.firstName = token.firstName || null;
            session.user.lastName = token.lastName || null;
            session.user.email = token.email || null;

            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };