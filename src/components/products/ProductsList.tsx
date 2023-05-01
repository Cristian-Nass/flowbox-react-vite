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
  const [productsDataCard, setProductsDataCard] = useState<ProductsType[]>(products);
  const [currentSlide, setCurrentSlide] = useState(0);

  const setDataForCard = (p: ProductsType[], index: number) => {
    if (index <= 0) return [p[0], p[1], p[2]];
    if (index >= 10) return [p[10], p[11], p[12]];
    return [p[index], p[index + 1], p[index + 2]];
  };

  useEffect(() => {
    setProductsData(products);
    setProductsDataCard(setDataForCard(products, currentSlide));
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
    setProductsDataCard(setDataForCard(products, currentSlide));
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

  const listData = style !== 'card' ? productsData : productsDataCard;
  return (
    <>
      <div style={{display: style === 'card' ? 'flex' : '', alignItems: 'center'}}>
        {style === 'card' && <button onClick={() => sliderCounter('down')}>&lt;</button>}
        <ContainerCards theme={style}>
          {listData.map((product) => (
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
        {style === 'card' && <button onClick={() => sliderCounter('up')}>&gt;</button>}
      </div>
    </>
  );
};

export default ProductsList;
