import type { Metadata } from "next";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import {Dinfont} from  "../../public/theme/scripts/fonts";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import "../../public/theme/css/content.css";
import "../../public/theme/css/all.min.css";
import BootstrapClient from "../../public/theme/scripts/BootstrapClient";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 

export default function RootLayout({
children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Dinfont.className}>
        <Header />
        <main>
          {children}          
        </main>
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
