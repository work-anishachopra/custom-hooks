import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const DemoUseDebounce = () => {
  const [query, setQuery] = useState("");
  const { debouncedQuery } = useDebounce({ query, delay: 500 });

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API call for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Debounced value: {debouncedQuery}</p>
    </>
  );
};

export default DemoUseDebounce;
