import StyleSelector from '../../shareds/StyleSelector';
import ProductsList from './ProductsList';

const ProductsView = () => {
  return (
    <>
      <StyleSelector />
      <div style={{paddingBottom: '40px'}}></div>
      <ProductsList />
    </>
  );
};

export default ProductsView;
