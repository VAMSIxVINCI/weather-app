import React from "react";

export default function LoadingLogo() {
  const src = encodeURI("/images/loading logo.jpg");
  return (
    <div className="loading-center" role="status">
      <img src={src} alt="loading" className="loading-big" />
      <div className="loading-text">Loading weather…</div>
    </div>
  );
}
