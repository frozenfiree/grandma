// A restrained, schematic representation of the Gaandiva OS UI for the proof
// exhibit. Decorative product *shell* only — it shows the kind of surface
// (CRM: pipeline, contacts) without asserting any data or numbers. The real
// interactive demo replaces this when M2 lands.
export function ProductShell() {
  const columns = ["New", "Qualified", "Won"];
  return (
    <div className="bg-surface-dark p-4 sm:p-6" aria-hidden>
      <div className="flex gap-4">
        {/* sidebar */}
        <div className="hidden w-28 shrink-0 flex-col gap-2 sm:flex">
          {["Pipeline", "Contacts", "Workflows", "Reports"].map((item, i) => (
            <div
              key={item}
              className={
                "rounded-md px-3 py-2 text-caption " +
                (i === 0
                  ? "bg-accent/90 text-white"
                  : "bg-white/[0.04] text-ink-on-dark-500")
              }
            >
              {item}
            </div>
          ))}
        </div>
        {/* board */}
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-caption font-mono text-ink-on-dark-500">
              Sales pipeline
            </span>
            <span className="ml-auto h-6 w-20 rounded-md bg-white/[0.05]" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {columns.map((col, c) => (
              <div key={col} className="rounded-md bg-white/[0.03] p-2">
                <div className="mb-2 text-caption text-ink-on-dark-500">{col}</div>
                <div className="flex flex-col gap-2">
                  {Array.from({ length: 3 - c % 2 }).map((_, r) => (
                    <div
                      key={r}
                      className="rounded-md border border-white/5 bg-white/[0.04] p-2"
                    >
                      <div className="mb-1.5 h-2 w-3/4 rounded bg-white/10" />
                      <div className="h-2 w-1/2 rounded bg-white/[0.06]" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
