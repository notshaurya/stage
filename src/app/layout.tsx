import StoreProvider from "@/store/store-provider";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Stage Stories",
    description: "Stage Stories",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <StoreProvider>
            <html lang="en" className="size-full">
                <body className="size-full">{children}</body>
            </html>
        </StoreProvider>
    );
}
