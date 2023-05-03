import { useState, useEffect } from "react";
import { getProducts } from "../services/product.service";
import { useStore } from "../store";
import { ProductsType } from "../models/Types";

const useGetProducts = () => {
  const { setProducts } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ProductsType[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
        setData(response);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setProducts]);

  return [isLoading, error, data];
};

export default useGetProducts;
