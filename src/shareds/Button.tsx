import gris from '../assets/svg/grid.svg';

const Button = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-primary" style={{width: '60px'}}>
        List
      </button>
      <button type="button" className="btn btn-primary" style={{width: '60px'}}>
        Grid
      </button>
      <button type="button" className="btn btn-primary" style={{width: '60px'}}>
        Slide
      </button>
      <button type="button" className="btn btn-primary" style={{width: '60px'}}>
        Card
      </button>
    </div>
  );
};

export default Button;
