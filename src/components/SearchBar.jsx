import React from "react";

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search city..."
        value={value}
        onChange={onChange}
        aria-label="City name"
      />
      <button type="submit" aria-label="Search">Search</button>
    </form>
  );
}
