"use client";

// SERP reorder — orange palette
const ITEMS = [
  { id: "r1", label: "TechFlow Pro",   score: 94, rank: 1, demote: false },
  { id: "r2", label: "QuickBuy Store", score: 71, rank: 2, demote: true  },
  { id: "r3", label: "Verified Goods", score: 88, rank: 3, promote: true },
];

export function SearchRankerAnimation() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-7 py-6 gap-2.5">
      {/* Search bar */}
      <div className="flex items-center gap-2 rounded-md border px-3 py-2 mb-1"
        style={{ borderColor: "rgba(232,168,124,0.18)", background: "rgba(232,168,124,0.05)" }}>
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="5" cy="5" r="3.5" stroke="rgba(232,168,124,0.45)" strokeWidth="1.2" />
          <line x1="7.9" y1="7.9" x2="10.5" y2="10.5" stroke="rgba(232,168,124,0.45)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span className="text-[10px] font-mono" style={{ color: "rgba(232,168,124,0.5)" }}>wireless headphones</span>
        <span
          className="ml-auto text-[9px] font-mono"
          style={{ color: "rgba(255,210,160,0.6)", animation: "sr-blink 4s ease-in-out infinite" }}
        >
          re-ranking…
        </span>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-1.5">
        {ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-md px-3 py-2.5"
            style={{
              borderColor: "rgba(232,168,124,0.12)",
              border: "1px solid rgba(232,168,124,0.12)",
              background: "rgba(232,168,124,0.04)",
              animation: (item as any).promote
                ? "sr-up 4s ease-in-out infinite"
                : item.demote
                ? "sr-down 4s ease-in-out infinite"
                : undefined,
            }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono truncate" style={{ color: "rgba(232,168,124,0.7)" }}>
                  {item.label}
                </span>
                {item.demote && (
                  <span
                    className="text-[8px] font-mono border rounded px-1 shrink-0"
                    style={{
                      color: "rgba(232,168,124,0.4)",
                      borderColor: "rgba(232,168,124,0.2)",
                      animation: "sr-ad 4s ease-in-out infinite"
                    }}
                  >
                    AD
                  </span>
                )}
              </div>
            </div>

            {/* Trust bar */}
            <div className="shrink-0 flex items-center gap-1.5">
              <div className="w-10 h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(232,168,124,0.12)" }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${item.score}%`,
                    background: item.demote
                      ? "rgba(232,168,124,0.3)"
                      : "rgba(255,210,160,0.85)",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes sr-up {
          0%,30%   { transform:translateY(0);    border-color:rgba(232,168,124,0.12); background:rgba(232,168,124,0.04); }
          45%,72%  { transform:translateY(-38px); border-color:rgba(255,210,160,0.5);  background:rgba(232,168,124,0.12); }
          88%,100% { transform:translateY(0);    border-color:rgba(232,168,124,0.12); background:rgba(232,168,124,0.04); }
        }
        @keyframes sr-down {
          0%,30%   { transform:translateY(0);   border-color:rgba(232,168,124,0.12); background:rgba(232,168,124,0.04); }
          45%,72%  { transform:translateY(38px); border-color:rgba(232,168,124,0.05); background:rgba(232,168,124,0.02); opacity:0.4; }
          88%,100% { transform:translateY(0);   border-color:rgba(232,168,124,0.12); background:rgba(232,168,124,0.04); opacity:1; }
        }
        @keyframes sr-ad {
          0%,35%   { opacity:1; }
          50%,70%  { opacity:0.3; }
          88%,100% { opacity:1; }
        }
        @keyframes sr-blink {
          0%,25%   { opacity:0.3; }
          40%,65%  { opacity:0.9; }
          80%,100% { opacity:0.3; }
        }
      `}</style>
    </div>
  );
}
