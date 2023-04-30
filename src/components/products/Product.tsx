const Product = (props: any) => {
  return (
    // <div>
    //   <div>{props.title}</div>
    // </div>
    <div className="card">
      <div className="card-details-image">
        <img src={props.image} width="100%" />
      </div>
      <div className="card-details-text">{props.title}</div>
    </div>
  );
};

export default Product;
