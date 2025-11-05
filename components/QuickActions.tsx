import { quickActions } from "@/data/capabilities";

export function QuickActions() {
  return (
    <section className="mt-16 grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-slate-100">Bắt đầu ngay</h2>
        <p className="text-sm text-slate-400">
          Chọn một kịch bản phổ biến để tôi dẫn bạn qua từng bước.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {quickActions.map((action) => (
          <div
            key={action.label}
            className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 px-5 py-6"
          >
            <span className="text-lg font-medium text-slate-200">{action.label}</span>
            <span className="text-sm text-slate-400">{action.description}</span>
            <button
              className="mt-auto w-fit rounded-full bg-primary/90 px-4 py-1.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary"
              type="button"
            >
              {action.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
