import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(url, { signal: controller.signal })
      .then((res) => {
        setError(false);
        setIsPending(false);
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        if (err.name !== `AbortError`) {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => controller.abort();
  }, [url]);
  return { data, setData, isPending, error };
};
export default useFetch;
