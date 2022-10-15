/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

const key = "title";
const defaultTitle = "Share my inspiration";
const maxTitleLength = 60;

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  const title = getTitleFromUrl(req.url);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "#0f172a",
        }}
      >
        <svg
          viewBox="0 0 440 600"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "132px",
            height: "180px",
            marginRight: "72px",
          }}
        >
          <polygon fill="#4BAFFF" points="0,100 200,100 100,150" />
          <polygon fill="#4BC8FD" points="120,50 320,50 220,100" />
          <polygon fill="#85FAFD" points="240,0 440,0 340,50" />
          <polygon fill="#3296FF" points="0,100 100,150 150,600" />
          <polygon fill="#32C8FF" points="120,50 220,100 270,550" />
          <polygon fill="#32FFFF" points="240,0 340,50 390,500" />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "720px",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              color: "#e2e8f0",
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#475569",
            }}
          >
            Yuwang Cai
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

function getTitleFromUrl(url: string) {
  const { searchParams } = new URL(url);

  const title = searchParams.get(key);
  if (!title) {
    return defaultTitle;
  }

  if (title.length <= maxTitleLength) {
    return title;
  }

  const truncateIndex = title.indexOf(" ", maxTitleLength);
  return title.slice(0, truncateIndex) + "...";
}
