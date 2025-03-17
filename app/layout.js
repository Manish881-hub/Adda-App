import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adda-Clone",
  description: "Transform your community living experience with the Adda App Clone today",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* Header */}
          <Header />

          <main className="min-h-screen">{children}</main>

          {/* Footer */}
          <footer className="bg-blue-200 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>"Adda - Connecting Communities, Simplifying Living." 🚀🏡 </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
