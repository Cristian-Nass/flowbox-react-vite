import {ContainerCard} from '../styles/ContainerCards';

const Product = (props: any) => {
  return (
    // <div>
    //   <div>{props.title}</div>
    // </div>
    <ContainerCard>
      <div className="card-details-image">
        <img src={props.image} width="100%" />
      </div>
      <div className="card-details-text">{props.title}</div>
    </ContainerCard>
  );
};

export default Product;
