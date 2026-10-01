"use client";

// Hotel cancellation bar chart — orange palette

const BARS = [
  { label: "Jan", value: 62, risk: false },
  { label: "Feb", value: 48, risk: false },
  { label: "Mar", value: 71, risk: false },
  { label: "Apr", value: 83, risk: true  },
  { label: "May", value: 55, risk: false },
  { label: "Jun", value: 39, risk: false },
];

const H = 80;

export function HotelAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-8 py-6">
      <div className="relative w-full max-w-[280px]">
        {/* Bars */}
        <div className="flex items-end gap-1.5" style={{ height: `${H}px` }}>
          {BARS.map((bar, i) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center">
              <div
                className="w-full rounded-sm relative overflow-hidden"
                style={{
                  height: `${(bar.value / 100) * H}px`,
                  background: bar.risk
                    ? "rgba(232,168,124,0.35)"
                    : "rgba(232,168,124,0.12)",
                  border: bar.risk
                    ? "1px solid rgba(255,210,160,0.7)"
                    : "1px solid rgba(232,168,124,0.2)",
                  animation: `hb-grow 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s both`,
                  transformOrigin: "bottom",
                }}
              >
                {bar.risk && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(255,210,160,0.5) 0%, rgba(232,168,124,0.1) 100%)",
                      animation: "hb-risk 2.2s ease-in-out infinite",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* X labels */}
        <div className="flex gap-1.5 mt-1.5">
          {BARS.map((bar) => (
            <div key={bar.label} className="flex-1 text-center">
              <span
                className="text-[8px] font-mono"
                style={{
                  color: bar.risk
                    ? "rgba(255,210,160,0.8)"
                    : "rgba(232,168,124,0.35)",
                }}
              >
                {bar.label}
              </span>
            </div>
          ))}
        </div>

        {/* Risk label */}
        <div
          className="mt-3 rounded border px-2.5 py-2 flex items-center gap-2"
          style={{
            borderColor: "rgba(232,168,124,0.25)",
            background: "rgba(232,168,124,0.06)",
            animation: "hb-in 0.6s ease 0.7s both",
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: "rgba(255,210,160,0.9)", animation: "hb-blink 1.8s ease-in-out infinite" }}
          />
          <span className="text-[9px] font-mono" style={{ color: "rgba(232,168,124,0.55)" }}>
            April — elevated cancellation risk
          </span>
        </div>
      </div>

      <style>{`
        @keyframes hb-grow  { from { transform:scaleY(0); opacity:0; } to { transform:scaleY(1); opacity:1; } }
        @keyframes hb-risk  { 0%,100%{opacity:0.6;} 50%{opacity:1;} }
        @keyframes hb-in    { from{opacity:0;transform:translateY(6px);} to{opacity:1;transform:translateY(0);} }
        @keyframes hb-blink { 0%,100%{opacity:0.8;} 50%{opacity:0.3;} }
      `}</style>
    </div>
  );
}
