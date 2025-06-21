import { Link } from "react-router-dom";
import Image from "./Image";
import { Clock8, Heart, Users } from "lucide-react";
import { clickedIdAction } from "@/app/features/clickedIdSlice";
import { useDispatch } from "react-redux";

interface Iprops {
  url: string;
  alt: string;
  title: string;
  path: string;
  _id: string;
}

const Trackcard = ({ url, alt, title, path, _id }: Iprops) => {
  const Dispatch = useDispatch();

  const navigate_to_roadmap = () => {
    Dispatch(clickedIdAction(_id));
  };

  return (
    <>
      <Link to={path}>
        <div
          className="w-220 h-[330px] md:h-[300px] md:w-[240px] lg:w-[260px] lg:h-[330px] rounded-3xl space-y-3 overflow-hidden shadow-[0px_0px_10px_rgba(0,0,0,1)] transition-transform duration-300 hover:scale-105"
          onClick={navigate_to_roadmap}
        >
          <Image imageurl={url} alt={alt} className="h-44 w-full" />
          {/* icons */}
          <div className="flex justify-between items-center px-2">
            <div className="flex justify-center items-center">
              <div className="pr-2">
                <Users size={15} />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] lg:text-[12px] ">
                  700 Students
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="pr-2">
                <Clock8 size={15} />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] lg:text-[12px]">
                  2h 20m
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-bold ml-3 text-[#515151] lg:text-[18px]">
            {title}
          </h3>
          {/* last dev */}
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center">
              <div>
                <Image
                  imageurl="src/assets/Tracks img/Gemini_Generated_Image_8x5cps8x5cps8x5c.jpeg"
                  alt=""
                  className="w-10 h-10 rounded-full mr-2"
                />
              </div>
              <div>
                <p className="text-slate-400 font-bold">Alexander</p>
              </div>
            </div>
            <div className="flex ">
              <p className="text-slate-400">
                <Heart color="black" />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Trackcard;