import useGetProducts from '../../hooks/useGetProducts';

const ProductsList = () => {
  const url =
    'https://gist.githubusercontent.com/Cristian-Nass/f5e2dedf7f090591fca4ba9d9873a2f9/raw/0053964fc901421c6f6fa62deb035a220764c958/products.json';
  const [data, isLoading, error] = useGetProducts(url);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return <ul>{JSON.stringify(data)}</ul>;
};

export default ProductsList;
