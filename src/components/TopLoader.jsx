import React from "react";

export default function TopLoader() {
  // handle filenames with spaces safely:
  const src = encodeURI("/images/loading logo.jpg"); // if your file name has spaces
  // if you renamed to loading-logo use: "/images/loading-logo.jpg"
  return (
    <div className="top-loader" aria-hidden>
      <img src={src} alt="loading" />
    </div>
  );
}
