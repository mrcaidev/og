import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function handler() {
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
        <h1
          style={{
            fontSize: 128,
            color: "#e2e8f0",
          }}
        >
          mrcai.dev
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
