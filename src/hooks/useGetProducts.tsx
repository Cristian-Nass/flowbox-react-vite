import {useState, useEffect} from 'react';
import {getProducts} from '../services/product.service';
import {useStore} from '../store';

const useGetProducts = () => {
  const {setProducts} = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return [isLoading, error];
};

export default useGetProducts;
