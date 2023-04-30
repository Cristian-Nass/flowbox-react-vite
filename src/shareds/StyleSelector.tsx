import {useStore} from '../store';

const StyleSelector = () => {
  const {setStyle} = useStore();

  const buttons = [
    {title: 'List', value: 'list', id: '1'},
    {title: 'Grid', value: 'grid', id: '2'},
    {title: 'Slide', value: 'slide', id: '3'},
    {title: 'Card', value: 'card', id: '4'},
  ];

  const setStyleHandler = (styleSetter: string) => {
    setStyle(styleSetter);
  };

  return (
    <div className="btn-group">
      {buttons.map((button) => (
        <button
          key={button.id}
          type="button"
          className="btn btn-primary"
          style={{width: '60px'}}
          onClick={() => setStyleHandler(button.value)}>
          {button.title}
        </button>
      ))}
    </div>
  );
};

export default StyleSelector;
