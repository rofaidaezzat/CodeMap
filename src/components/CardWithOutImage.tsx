import Image from "./Image";

interface Iprops {
    description: string;
    url: string;
    alt: string;
    name: string;
    field: string;
    }
    const CardWithOutImage = ({ description, url, alt, name, field }: Iprops) => {
    return (
        <>
        <div className="w-[350px] h-64 shadow-2xl space-y-5 p-5">
            <p className="text-slate-400">{description}</p>
            <div className="flex  items-center mt-2 space-x-6">
            <Image imageurl={url} alt={alt} className="w-10 h-10 rounded-full" />
            <div>
                <h3 className="font-bold">{name}</h3>
                <p className="text-slate-400">{field}</p>
            </div>
            </div>
        </div>
        </>
    );
    };
    export default CardWithOutImage;