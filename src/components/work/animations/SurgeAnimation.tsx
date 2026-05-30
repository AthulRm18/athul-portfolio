"use client";

// H3 hex demand wave — scales cleanly at any card size
const HEX_R = 20;
const HEX_W = HEX_R * Math.sqrt(3);
const HEX_H = HEX_R * 2;
const ROWS = 5;
const COLS = 8;
const PAD_X = 16;
const PAD_Y = 20;

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");
}

interface Cell { id: string; cx: number; cy: number; dist: number }

function buildGrid(): Cell[] {
  const cells: Cell[] = [];
  const cr = Math.floor(ROWS / 2);
  const cc = Math.floor(COLS / 2);
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const offset = r % 2 === 1 ? HEX_W / 2 : 0;
      const cx = PAD_X + c * HEX_W + offset;
      const cy = PAD_Y + r * (HEX_H * 0.75);
      const dist = Math.max(Math.abs(r - cr), Math.abs(c - cc));
      cells.push({ id: `${r}-${c}`, cx, cy, dist });
    }
  }
  return cells;
}

const CELLS = buildGrid();
const VW = PAD_X * 2 + COLS * HEX_W + HEX_W / 2;
const VH = PAD_Y * 2 + ROWS * HEX_H * 0.75;
const ORIGIN = CELLS.find((c) => c.dist === 0)!;

// Opacity values per distance ring
const RING_OPACITY: Record<number, string> = {
  0: "rgba(255,255,255,0.26)",
  1: "rgba(255,255,255,0.14)",
  2: "rgba(255,255,255,0.07)",
  3: "rgba(255,255,255,0.03)",
};
const RING_STROKE: Record<number, string> = {
  0: "rgba(255,255,255,0.60)",
  1: "rgba(255,255,255,0.35)",
  2: "rgba(255,255,255,0.18)",
  3: "rgba(255,255,255,0.08)",
};

export function SurgeAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden
      >
        {CELLS.map((cell) => {
          const dist = Math.min(cell.dist, 3);
          const delay = dist * 0.5;
          return (
            <polygon
              key={cell.id}
              points={hexPoints(cell.cx, cell.cy, HEX_R - 1.5)}
              fill="rgba(255,255,255,0.015)"
              stroke="rgba(255,255,255,0.055)"
              strokeWidth="0.7"
              style={{
                animation: `sg-hex-${dist} 5s ease-in-out ${delay}s infinite`,
              }}
            />
          );
        })}

        {/* Origin pulse */}
        <circle
          cx={ORIGIN.cx}
          cy={ORIGIN.cy}
          r="3.5"
          fill="rgba(255,255,255,0.9)"
          style={{ animation: "sg-dot 2.8s ease-in-out infinite" }}
        />
        <circle
          cx={ORIGIN.cx}
          cy={ORIGIN.cy}
          r="10"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.8"
          style={{ animation: "sg-ring 2.8s ease-in-out infinite" }}
        />
      </svg>

      <style>{`
        @keyframes sg-hex-0 {
          0%,100% { fill:rgba(255,255,255,0.015); stroke:rgba(255,255,255,0.055); }
          25%,60%  { fill:${RING_OPACITY[0]};     stroke:${RING_STROKE[0]};       }
          80%      { fill:rgba(255,255,255,0.06);  stroke:rgba(255,255,255,0.18);  }
        }
        @keyframes sg-hex-1 {
          0%,100% { fill:rgba(255,255,255,0.015); stroke:rgba(255,255,255,0.055); }
          30%,65%  { fill:${RING_OPACITY[1]};     stroke:${RING_STROKE[1]};       }
          85%      { fill:rgba(255,255,255,0.04);  stroke:rgba(255,255,255,0.12);  }
        }
        @keyframes sg-hex-2 {
          0%,100% { fill:rgba(255,255,255,0.015); stroke:rgba(255,255,255,0.055); }
          38%,70%  { fill:${RING_OPACITY[2]};     stroke:${RING_STROKE[2]};       }
        }
        @keyframes sg-hex-3 {
          0%,100% { fill:rgba(255,255,255,0.015); stroke:rgba(255,255,255,0.055); }
          46%,75%  { fill:${RING_OPACITY[3]};     stroke:${RING_STROKE[3]};       }
        }
        @keyframes sg-dot {
          0%,100% { r:3.5; opacity:0.9; }
          50%      { r:5;   opacity:0.4; }
        }
        @keyframes sg-ring {
          0%      { r:10;  opacity:0.25; }
          100%    { r:26;  opacity:0;    }
        }
      `}</style>
    </div>
  );
}
