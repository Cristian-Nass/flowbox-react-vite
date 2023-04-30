import useGetProducts from '../../hooks/useGetProducts';
import {useStore} from '../../store';
import Product from './Product';

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
      <div className="cards-view">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            style={{with: '200px'}}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
