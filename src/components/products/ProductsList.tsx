import useGetProducts from '../../hooks/useGetProducts';
import {useStore} from '../../store';
import Product from './Product';
import {ContainerCards} from '../styles/ContainerCards';
const ProductsList = () => {
  const [isLoading, error] = useGetProducts();
  const {products} = useStore();
  console.log(products);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      <ContainerCards color="list">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            descriptions={product.descriptions}
            id={product.id}
            price={product.price}
          />
        ))}
      </ContainerCards>
    </>
  );
};

export default ProductsList;
