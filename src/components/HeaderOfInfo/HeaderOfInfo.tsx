import HeaderButtonOfInfo from './HeaderButtonOfInfo';
import './HeaderOfInfo.css'

interface IProps{
  description:string
  title:string;
}




const HeaderOfInfo = ({description,title}:IProps) => {
  return (
    <div className="card-HeaderOfInfo">
  <div className="card-content-HeaderOfInfo">
    <p className="card-title-HeaderOfInfo">{title}</p>
    <p className="card-para-HeaderOfInfo">{description}</p>
    <HeaderButtonOfInfo/>
  </div>
</div>

  )
}

export default HeaderOfInfo