import {useState, useEffect} from 'react';
import {ProductsType} from '../models/Types';
import axios from 'axios';

const useGetData = (url: string) => {
  const [data, setData] = useState<ProductsType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, isLoading, error];
};

export default useGetData;
