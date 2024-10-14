import type { Metadata } from "next";
//import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import { Header } from "@/components/shared/header";
import "./globals.css";

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Los Pollos Hermanos",
    description: "Online service for food delivery",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={nunito.variable}>
            <body>
                <main className="min-h-screen">
                    <Header/>
                    {children}
                </main>
            </body>
        </html>
    );
}
