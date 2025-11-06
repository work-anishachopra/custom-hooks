import React, { useEffect } from "react";

interface propsType {
  query: string;
  delay?: number;
}

interface returnType {
  debouncedQuery: string;
}

const useDebounce = ({ query, delay }: propsType): returnType => {
  const [debouncedQuery, setDebouncedQuery] = React.useState<string>("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, query]);

  return { debouncedQuery };
};

export default useDebounce;
