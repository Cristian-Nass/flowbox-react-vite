import {ProductsType} from '../../models/Types';
// import {ContainerCard, ContainerImg} from '../styles/ContainerCards';

const Product = (props: ProductsType) => {
  return (
    <div color="list">
      <div className="card-details-image">
        <img color="list" src={props.image} />
      </div>
      {/* <div className="card-details-text">{props.title}</div> */}
    </div>
  );
};

export default Product;
