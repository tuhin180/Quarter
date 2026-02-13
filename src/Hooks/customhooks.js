import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (signal) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`err:${response.status}`);
        }
        const data = await response.json();
        setData(data.data || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    },
    [url],
  );
  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => controller.abort();
  }, [fetchData]);

  return { data, loading, error };
};
export { useFetch };
