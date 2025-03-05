import Image from "./Image";
interface Iprops {
  url: string;
  alt: string;
  name: string;
  field: string;
  className?: string;
}
const CardPersonal = ({ alt, field, name, url }: Iprops) => {
  return (
    <>
      <div className="min-w-[250px] md:min-w-[300px] h-72 shadow-2xl rounded-xl bg-white space-y-4 p-4 flex flex-col items-center text-center ">
        <div className="overflow-hidden ">
          <Image alt={alt} imageurl={url} className="" />
        </div>
        <h3 className="text-[#2F174E] text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{field}</p>
      </div>
    </>
  );
};
export default CardPersonal;
