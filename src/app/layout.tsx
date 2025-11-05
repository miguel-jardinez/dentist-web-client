import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-quill/dist/quill.snow.css";
import { siteConfig } from "@dentist/utils/site-configuration";
import { ModalProvier } from "@dentist/components/providers/modal/modal-provier";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.descrition,
  icons: {
    icon: '/logo.png'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ModalProvier>
            {children}
        </ModalProvier>
      </body>
    </html>
  );
}
