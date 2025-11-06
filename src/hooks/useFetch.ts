import React, { useEffect } from "react";

interface propsType {
  URL: string;
}

type returnType = {
  data: object | null;
  loading: boolean;
  error: Error | null;
};

const useFetch = ({ URL }: propsType): returnType => {
  const [data, setData] = React.useState<object | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);

  useEffect(() => {
    const AbortCont = new AbortController();
    fetchData();
    return () => AbortCont.abort();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const resdata = await response.json();
      setData(resdata);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useFetch;
