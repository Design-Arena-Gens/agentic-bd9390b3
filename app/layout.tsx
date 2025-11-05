import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic Capabilities",
  description:
    "Khám phá những việc trợ lý AI có thể làm để hỗ trợ công việc sáng tạo, lập trình và phân tích.",
  metadataBase: new URL("https://agentic-bd9390b3.vercel.app")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
