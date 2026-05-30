"use client";

// SERP reorder — pure monochrome, no rank numbers
const ITEMS = [
  { id: "r1", label: "TechFlow Pro",   score: 94, rank: 1, demote: false },
  { id: "r2", label: "QuickBuy Store", score: 71, rank: 2, demote: true  },
  { id: "r3", label: "Verified Goods", score: 88, rank: 3, promote: true },
];

export function SearchRankerAnimation() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-7 py-6 gap-2.5">
      {/* Search bar */}
      <div
        className="flex items-center gap-2 rounded-md border border-white/[0.07] bg-white/[0.03] px-3 py-2 mb-1"
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="5" cy="5" r="3.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
          <line x1="7.9" y1="7.9" x2="10.5" y2="10.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span className="text-[10px] font-mono text-white/25">wireless headphones</span>
        <span
          className="ml-auto text-[9px] font-mono text-white/30"
          style={{ animation: "sr-blink 4s ease-in-out infinite" }}
        >
          re-ranking…
        </span>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-1.5">
        {ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-md border px-3 py-2.5"
            style={{
              borderColor: "rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)",
              animation: item.promote
                ? "sr-up 4s ease-in-out infinite"
                : item.demote
                ? "sr-down 4s ease-in-out infinite"
                : undefined,
            }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono truncate text-white/55">
                  {item.label}
                </span>
                {item.demote && (
                  <span
                    className="text-[8px] font-mono border rounded px-1 shrink-0 text-white/20 border-white/[0.08]"
                    style={{ animation: "sr-ad 4s ease-in-out infinite" }}
                  >
                    AD
                  </span>
                )}
              </div>
            </div>

            {/* Trust bar — monochrome */}
            <div className="shrink-0 flex items-center gap-1.5">
              <div className="w-10 h-[3px] rounded-full overflow-hidden bg-white/[0.07]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${item.score}%`,
                    background: item.demote
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(255,255,255,0.55)",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes sr-up {
          0%,30%   { transform:translateY(0);    border-color:rgba(255,255,255,0.06); background:rgba(255,255,255,0.02); }
          45%,72%  { transform:translateY(-38px); border-color:rgba(255,255,255,0.25); background:rgba(255,255,255,0.06); }
          88%,100% { transform:translateY(0);    border-color:rgba(255,255,255,0.06); background:rgba(255,255,255,0.02); }
        }
        @keyframes sr-down {
          0%,30%   { transform:translateY(0);   border-color:rgba(255,255,255,0.06); background:rgba(255,255,255,0.02); }
          45%,72%  { transform:translateY(38px); border-color:rgba(255,255,255,0.04); background:rgba(255,255,255,0.01); opacity:0.5; }
          88%,100% { transform:translateY(0);   border-color:rgba(255,255,255,0.06); background:rgba(255,255,255,0.02); opacity:1; }
        }
        @keyframes sr-ad {
          0%,35%   { opacity:1; }
          50%,70%  { opacity:0.3; }
          88%,100% { opacity:1; }
        }
        @keyframes sr-blink {
          0%,25%   { opacity:0.3; }
          40%,65%  { opacity:0.8; }
          80%,100% { opacity:0.3; }
        }
      `}</style>
    </div>
  );
}
