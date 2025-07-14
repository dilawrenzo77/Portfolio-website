import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Home/navbar";

const JetBrains = JetBrains_Mono({
  variable: "--font-JetBrains_Mono",
  weight: ["100","200","300","400","500","600","700","800"],
  subsets:["latin"]
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Web and Ethereum BlockChain Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${JetBrains.variable}  antialiased 2xl:container 2xl:mx-auto text-primary`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
