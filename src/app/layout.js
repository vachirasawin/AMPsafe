import "./globals.css";
import AOSProvider from "./AOSProvider/page";

export const metadata = {
  title: "AMPsafe",
};

export default function RootLayout({ children }) {
  return (
    <html lang = "en">
      <head>
        <link rel = "icon" href = "/logo.png"/>
        <link rel = "preconnect" href = "https://fonts.gstatic.com" crossOrigin = "true"/>
        <link href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap" rel = "stylesheet"/>
        <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity = "sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossOrigin = "anonymous" referrerPolicy = "no-referrer"/>
      </head>
      <body className = "antialiased">
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
