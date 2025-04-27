import './CardCourse.css'
const CardCourse = () => {
  return (
    <div className="card-cardcourse ">
      <div className="cardcorner"></div>
      <div className="cardimg-cardcourse">
        <span className="cardspan-cardcpourse">Category</span>
      </div>
      <div className="card-int-cardcourse">
        <p className="card-inttitle-cardcourse">This is the article title</p>
        <p className="excerpt">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, donec
          suspendisse vulputate dictumst enim per mus imperdiet, platea non
          massa dictum tempus sapien.
        </p>
        <button className="card-int__button">Show</button>
      </div>
    </div>
  );
};

export default CardCourse;