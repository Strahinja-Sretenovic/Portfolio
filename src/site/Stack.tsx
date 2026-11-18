import { stackRows } from "../content";

export function Stack({ label }: { label: string }) {
  return (
    <section className="py-20 sm:py-28 overflow-hidden" aria-label={label}>
      <div className="container-x mb-10">
        <span className="label">{label}</span>
      </div>
      <div className="space-y-4 loop-wrap [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        {stackRows.map((row, r) => (
          <div key={r} className={`loop ${r % 2 ? "reverse" : ""}`} style={{ ["--dur" as any]: `${45 + r * 10}s` }}>
            {[...row, ...row].map((item, i) => (
              <span
                key={i}
                className="mx-2 shrink-0 rounded-full border px-6 py-3 sm:px-8 sm:py-4 font-display text-lg sm:text-2xl font-medium transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
                style={{ borderColor: "var(--line)" }}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
