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
            <html lang="en" className="size-full flex justify-center bg-slate-700">
                <body className="size-full  max-w-[550px] rounded-xl">{children}</body>
            </html>
        </StoreProvider>
    );
}
