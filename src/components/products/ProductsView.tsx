import StyleSelector from '../../shareds/StyleSelector';
import ProductsList from './ProductsList';

const ProductsView = () => {
  return (
    <>
      <div>
        <StyleSelector />
      </div>
      <div>
        <ProductsList />
      </div>
    </>
  );
};

export default ProductsView;
