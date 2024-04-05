import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const zenmaru = Zen_Maru_Gothic({ 
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Yamamoto1o12のポートフォリオ",
  description: "Next.jsで作られたYamamoto1o12のポートフォリオです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={zenmaru.className}>{children}</body>
    </html>
  );
}
