
import './CountDown.css'

const CountDown = () => {
  return (
    <div className="black-friday-component">


      <div className="timer">
        <div className="item">
          <div className="minutes">
            <div className="min">
              {[...Array(61).keys()].map((num) => (
                <span key={num}>{String(num).padStart(2, "0")}</span>
              ))}
            </div>
          </div>
          <p>min</p>
        </div>
        <span className="colon">:</span>
        <div className="item">
          <div className="seconds">
            <div className="sec">
              {[...Array(61).keys()].map((num) => (
                <span key={num}>{String(num).padStart(2, "0")}</span>
              ))}
            </div>
          </div>
          <p>sec</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
