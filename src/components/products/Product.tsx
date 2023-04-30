import {ProductsType} from '../../models/Types';
import {ContainerCard, ContainerImg} from '../styles/ContainerCards';

const Product = (props: ProductsType) => {
  return (
    <ContainerCard>
      <div className="card-details-image">
        <ContainerImg src={props.image} />
      </div>
      <div className="card-details-text">{props.title}</div>
    </ContainerCard>
  );
};

export default Product;
