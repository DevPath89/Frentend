import React from "react";

export default function DevpathLoader({
  size = 120,
  stroke = 8,
  company = "Devpath",
  subtitle = "loading company name",
  className = "",
  fullscreen = true, // control fullscreen overlay
}) {
  const half = size / 2;
  const radius = half - stroke / 2;
  const circumference = 2 * Math.PI * radius;

  const wrapperStyle = {
    width: size,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  };

  // Fullscreen overlay styles
  const overlayStyle = fullscreen
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255,255,255,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }
    : {};

  return (
    <div style={overlayStyle}>
      <div className={`devpath-loader ${className}`} style={wrapperStyle}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          role="img"
          aria-label="Loading"
        >
          <defs>
            <linearGradient id="devpathGradient" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="40%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>

          <g transform={`translate(${half}, ${half})`}>
            {/* Background track */}
            <circle
              r={radius}
              cx={0}
              cy={0}
              fill="none"
              stroke="#e6e6e6"
              strokeWidth={stroke}
              strokeLinecap="round"
            />
            {/* Animated arc */}
            <circle
              r={radius}
              cx={0}
              cy={0}
              fill="none"
              stroke="url(#devpathGradient)"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={`${circumference * 0.25} ${circumference}`}
              style={{
                transformOrigin: "center",
                animation: "devpath-rotate 2.5s linear infinite", // slower rotation
              }}
            />
          </g>
        </svg>

        <div style={{ textAlign: "center", lineHeight: 1 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: Math.max(14, size * 0.12),
            }}
          >
            {company}
          </div>
          <div
            style={{
              fontSize: Math.max(10, size * 0.08),
              opacity: 0.9,
              marginTop: 4,
              animation: "devpath-color 5s linear infinite", // slower color cycle
              userSelect: "none",
            }}
          >
            {subtitle}
          </div>
        </div>

        <style>{`
          @keyframes devpath-rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes devpath-color {
            0% { color: #4f46e5; }
            20% { color: #06b6d4; }
            40% { color: #10b981; }
            60% { color: #f59e0b; }
            80% { color: #ef4444; }
            100% { color: #4f46e5; }
          }

          .devpath-loader:focus { outline: none; }
        `}</style>
      </div>
    </div>
  );
}
