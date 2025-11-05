import type { Capability } from "@/data/capabilities";

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-transform hover:-translate-y-1 hover:border-slate-700">
      <div className="flex items-center gap-3">
        <span className="text-3xl" aria-hidden>{capability.icon}</span>
        <h3 className="text-xl font-semibold text-slate-100">{capability.title}</h3>
      </div>
      <p className="text-sm text-slate-400">{capability.description}</p>
      <ul className="flex flex-wrap gap-2 text-xs text-slate-300">
        {capability.examples.map((example) => (
          <li
            key={example}
            className="rounded-full bg-slate-800/90 px-3 py-1 text-slate-300"
          >
            {example}
          </li>
        ))}
      </ul>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 translate-y-1/2 rounded-t-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition group-hover:opacity-100" />
    </article>
  );
}
