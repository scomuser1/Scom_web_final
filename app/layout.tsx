import { descriptionProject, projectName } from "@/components/utils/constants";
import "./css/style.css";

import { Gloria_Hallelujah } from "next/font/google";
import Image from "next/image";

import Background from "@/public/images/background.svg";
import FooterDefault from "@/components/layout/footer(default)/footer";
import HeaderDefault from "@/components/layout/header(default)";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gloria-hallelujah",
  display: "swap",
});

export const metadata = {
  title: `${projectName}`,
  description: `${descriptionProject}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${gloriaHallelujah.variable} font-inter antialiased text-text tracking-tight`}
      >
        <div className="flex flex-col justify-between min-h-screen max-w-[100vw] overflow-hidden bg-top bg-repeat-y bg-cover bg-body">
          <HeaderDefault />
          <div className="flex flex-col items-center justify-center px-4 mx-auto text-sm leading-relaxed md:text-lg sm:px-6">{children}</div>
          <FooterDefault />
        </div>
      </body>
    </html>
  );
}
