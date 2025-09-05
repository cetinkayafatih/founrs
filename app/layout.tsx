import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOUNRS | Expert n8n Automation Agency | Zapier Alternative",
  description: "Stop overpaying for automation. FOUNRS builds powerful, scalable n8n workflows that offer more flexibility and control than Zapier or Make. Book your free strategy call today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link 
          rel="preload" 
          href="/hero/prismr-poster@2x.webp" 
          as="image" 
          type="image/webp"
        />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
