import { ImgHTMLAttributes } from "react";

interface Iprops extends ImgHTMLAttributes<HTMLImageElement>{
    imageurl:string;
    alt:string;
    className?:string;
}

const Image = ({imageurl,alt,className,...rest}:Iprops) => {
    const prodUrl = "https://codemapuser.netlify.app";
    const isProduction = import.meta.env.PROD;
    const src = isProduction ? `${prodUrl}${imageurl}` : imageurl;
    return (
        <img src={src} alt={alt} className={className} {...rest}/>
)
}

export default Image