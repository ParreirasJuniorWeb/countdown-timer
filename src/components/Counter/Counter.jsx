import "./Counter.css"

const Counter = ( { title, number, colorTheme} ) => {
  return (
    <div className='counter'>
    <p className="counter-number" style={{backgroundColor: colorTheme ? colorTheme : "#000"}}>{number}</p>
    <h3 className="counter-text" style={{color: colorTheme ? colorTheme : "#ededed"}}>{title}</h3>
    </div>
  );
};

export default Counter;