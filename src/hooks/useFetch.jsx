import { useCallback, useState } from 'react';
import axios from 'axios';

function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (config) => {
    let data;
    let status;

    try {
      setError(null);
      setLoading(true);
      const response = await axios(config);

      data = response.data
      status = response.status
      setData(data);
      console.log(data)

    } catch (err) {
      if (err.message !== 'canceled') setError(err.message);

    } finally {
      setLoading(false);
      return { data, status };
    }
  }, []);

  return { request, data, loading, error };
}

export default useFetch;
