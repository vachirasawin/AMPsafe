import mongoose, { Schema } from "mongoose";

const authentication = new Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        access: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Authentication = mongoose.models.Authentication || mongoose.model("Authentication", authentication);

export default Authentication;