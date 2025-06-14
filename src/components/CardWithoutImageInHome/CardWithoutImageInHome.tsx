import "./CardWithoutImageInHome.css";

interface Iprops {
  title: string;
  description: string;
}
const CardWithoutImageInHome = ({ title, description }: Iprops) => {
  return (
    <div className="card-Home">
      <p className="card-title-Home">{title}</p>
      <p className="small-desc-Home">{description}</p>
      <div className="go-corner-Home">
        <div className="go-arrow-Home">→</div>
      </div>
    </div>
  );
};

export default CardWithoutImageInHome;
