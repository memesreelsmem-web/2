import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_NAME_LATIN } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — ${SITE_NAME_LATIN}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background:
            "linear-gradient(135deg, #0f1117 0%, #171921 55%, #1e2030 100%)",
          color: "#e8eaf0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#00e6a0",
              color: "#0f1117",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 30,
            }}
          >
            P
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: -0.5,
            }}
          >
            {SITE_NAME_LATIN}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#e8eaf0",
            }}
          >
            AI Subscriptions for Iran
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#00e6a0",
              lineHeight: 1.05,
            }}
          >
            Pay with USDT &middot; 15-min delivery
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 24,
            fontWeight: 500,
            flexWrap: "wrap",
          }}
        >
          {["ChatGPT Plus", "Claude Pro", "Midjourney", "Cursor", "Spotify"].map(
            (s) => (
              <div
                key={s}
                style={{
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(0,230,160,0.3)",
                  background: "rgba(0,230,160,0.08)",
                }}
              >
                {s}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
