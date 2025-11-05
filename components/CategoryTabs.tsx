'use client';

import { useState } from "react";
import { capabilityCategories } from "@/data/capabilities";

type CategoryTabsProps = {
  onSelect: (ids: string[]) => void;
};

const allOption = {
  id: "all",
  label: "Tất cả",
  summary: "Tổng hợp năng lực nổi bật"
};

export function CategoryTabs({ onSelect }: CategoryTabsProps) {
  const [active, setActive] = useState(allOption.id);

  const handleSelect = (id: string) => {
    setActive(id);
    if (id === allOption.id) {
      onSelect(capabilityCategories.map((c) => c.id));
      return;
    }
    onSelect([id]);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {[allOption, ...capabilityCategories].map((category) => {
        const isActive = active === category.id;
        return (
          <button
            key={category.id}
            onClick={() => handleSelect(category.id)}
            className={`flex flex-col gap-2 rounded-2xl border px-5 py-4 text-left transition ${
              isActive
                ? "border-primary bg-primary/10 text-primary"
                : "border-slate-800 bg-slate-900/40 text-slate-300 hover:border-slate-700"
            }`}
            type="button"
          >
            <span className="text-sm font-semibold uppercase tracking-wide">
              {category.label}
            </span>
            <span className="text-xs text-slate-400">{category.summary}</span>
          </button>
        );
      })}
    </div>
  );
}
