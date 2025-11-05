'use client';

import { useState } from "react";

const pitches = [
  "Ý tưởng sáng tạo chỉ trong vài phút",
  "Code base chất lượng sẵn sàng deploy",
  "Báo cáo & insight rõ ràng, hành động được"
];

export function Header() {
  const [index, setIndex] = useState(0);

  const rotatePitch = () => {
    setIndex((current) => (current + 1) % pitches.length);
  };

  return (
    <header className="flex flex-col gap-8 rounded-3xl bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/60 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Trợ lý AI toàn diện</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-50 sm:text-5xl">
            Bạn hỏi &ldquo;<span className="text-primary">Tôi có thể làm gì?</span>&rdquo;<br />
            Đây là câu trả lời.
          </h1>
        </div>
        <button
          onClick={rotatePitch}
          className="gradient-ring relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.02]"
          aria-label="Xem lời giới thiệu khác"
        >
          <span className="relative rounded-full bg-primary/15 px-3 py-1 text-primary">Nhấn đổi</span>
          <span className="relative text-slate-200">{pitches[index]}</span>
        </button>
      </div>
      <p className="max-w-2xl text-lg text-slate-300">
        Tôi là cộng sự kỹ thuật lẫn chiến lược, kết hợp công cụ AI mới nhất với quy trình sản phẩm chuẩn để giúp bạn
        biến mọi ý tưởng thành trải nghiệm thực tế nhanh chóng, an toàn và có thể mở rộng.
      </p>
    </header>
  );
}
