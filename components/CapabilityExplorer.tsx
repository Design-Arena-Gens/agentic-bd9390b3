'use client';

import { useMemo, useState } from "react";
import { CapabilityCard } from "@/components/CapabilityCard";
import { CategoryTabs } from "@/components/CategoryTabs";
import { capabilities, capabilityCategories } from "@/data/capabilities";

export function CapabilityExplorer() {
  const [activeTags, setActiveTags] = useState<string[]>(
    capabilityCategories.map((category) => category.id)
  );

  const filtered = useMemo(
    () =>
      capabilities.filter((capability) =>
        capability.tags.some((tag) => activeTags.includes(tag))
      ),
    [activeTags]
  );

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-slate-100">Tôi hỗ trợ bạn như thế nào?</h2>
        <p className="max-w-2xl text-sm text-slate-400">
          Lựa chọn lĩnh vực quan tâm để xem các tình huống tôi thường giải quyết cho đội ngũ sản phẩm, marketing và kỹ thuật.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <CategoryTabs onSelect={setActiveTags} />
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
