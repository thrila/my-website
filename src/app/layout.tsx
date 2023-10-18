import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, Roboto, Open_Sans, Merriweather } from "next/font/google";


const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains_mono'
});
const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather'
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: "[Thrila@Wired ~]$",
  description: "A place for my Thoughts and writings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrains_mono.variable} ${roboto.variable} ${merriweather.variable} `}>

        {children}
      </body>
    </html>
  );
}
