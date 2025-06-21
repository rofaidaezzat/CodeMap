import Image from "../Image";
import "./CardofProfileOfCourses.css";

interface Iprops {
  ImageUrl: string;
  TitleOfCard: string;
  DescriptionCard: string;
}
const CardofProfileOfCourses = ({
  ImageUrl,
  TitleOfCard,
  DescriptionCard,
}: Iprops) => {
  return (
    <div className="cardOfProfile">
      <Image imageurl={ImageUrl} alt={TitleOfCard} className="w-full image" />
      <div className="cardOfProfile__content">
        <p className="cardOfProfile__title">{TitleOfCard}</p>
        <p className="cardOfProfile__description">{DescriptionCard}</p>
      </div>
    </div>
  );
};

export default CardofProfileOfCourses;

