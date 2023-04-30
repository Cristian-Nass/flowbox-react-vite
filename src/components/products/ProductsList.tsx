import {useState, useEffect} from 'react';
import useGetProducts from '../../hooks/useGetProducts';
import {useStore} from '../../store';
import Product from './Product';
import {ProductsType} from '../../models/Types';
import {ContainerCards} from '../styles/ContainerCards';
const ProductsList = () => {
  const [isLoading, error] = useGetProducts();
  const {products, style} = useStore();
  const [productsData, setProductsData] = useState<ProductsType[]>(products);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setProductsData(products);
  }, [products]);

  const sliderCounter = (data: string) => {
    if (data === 'up') {
      if (currentSlide === productsData.length - 1) return;
      setCurrentSlide(currentSlide + 1);
    }
    if (data === 'down') {
      if (currentSlide === 0) return;
      setCurrentSlide(currentSlide - 1);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  if (style === 'slide')
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button
          type="button"
          className="btn btn-primary defult-blue-color"
          style={{width: '60px'}}
          onClick={() => sliderCounter('down')}>
          Prev
        </button>
        <Product
          title={productsData[currentSlide]?.title}
          image={productsData[currentSlide]?.image}
          descriptions={productsData[currentSlide]?.descriptions}
          id={productsData[currentSlide]?.id}
          price={productsData[currentSlide]?.price}
        />
        <button
          type="button"
          className="btn btn-primary defult-blue-color"
          style={{width: '60px'}}
          onClick={() => sliderCounter('up')}>
          Next
        </button>
      </div>
    );

  return (
    <>
      <ContainerCards color={style}>
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
