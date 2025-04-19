import './CardOfInfo.css'
import Image from '../Image';

interface Iprops{
    title: string;
    content: {
        imagurl: string;
        imagetitle: string;
    }[];
    
}
const CardOfInfo = ({title,content}:Iprops) => {
    return (
    <div className="e-card playing">
    <div className="image"></div>

    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>

    <div className="infotop flex flex-col gap-10 ">
  <h3 className="text-[30px] font-serif">
    {title}
  </h3>

  <div className="flex flex-wrap gap-x-2 gap-y-6   justify-around items-center">
    {content.map((item, idx) => (
      <div key={idx} className="flex gap-2 items-center">
        <Image className="w-[45px]" imageurl={item.imagurl} alt="error" />
        <p className="text-[20px] font-serif">{item.imagetitle}</p>
      </div>
    ))}
  </div>
</div>

    </div>
    );
};

export default CardOfInfo;
