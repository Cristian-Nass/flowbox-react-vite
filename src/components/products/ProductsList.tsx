import useGetProducts from '../../hooks/useGetProducts';

const ProductsList = () => {
  const [data, isLoading, error] = useGetProducts();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return <ul>{JSON.stringify(data)}</ul>;
};

export default ProductsList;
