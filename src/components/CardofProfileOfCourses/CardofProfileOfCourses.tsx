import Image from '../Image'
import './CardofProfileOfCourses.css'

interface Iprops{
  ImageUrl:string
  TitleOfCard:string
}


const CardofProfileOfCourses = ({ImageUrl,TitleOfCard}:Iprops) => {
  return (
    <div className='cardOfProfile'>
      <Image imageurl={ImageUrl} alt={TitleOfCard} className='w-full image'/>
  <div className="cardOfProfile__content">
    <p className="cardOfProfile__title">{TitleOfCard}</p>
    <p className="cardOfProfile__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
  )
}

export default CardofProfileOfCourses