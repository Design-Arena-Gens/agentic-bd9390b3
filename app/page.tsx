import { CapabilityExplorer } from "@/components/CapabilityExplorer";
import { Header } from "@/components/Header";
import { QuickActions } from "@/components/QuickActions";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-16">
      <Header />
      <Suspense fallback={<div className="text-slate-500">Đang tải...</div>}>
        <CapabilityExplorer />
      </Suspense>
      <QuickActions />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="my-12 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-sm text-slate-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span>
          Luôn sẵn sàng trở thành cộng sự tin cậy của bạn trong mọi dự án – từ ý tưởng đầu tiên đến triển khai sản phẩm.
        </span>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground"
        >
          Kết nối ngay
        </a>
      </div>
    </footer>
  );
}
