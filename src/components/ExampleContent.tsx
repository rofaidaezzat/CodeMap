import CardCourse from "./SideBarOfCourses/CardCourse/CardCourse";

interface Iprops {
  videoUrl: string;
  title: string;
  duration: string;
}

const ExampleContent = ({ videoUrl, title, duration }: Iprops) => {
  return (
    <div className=" w-full ">
      <div className="space-y-2 p-4 bg-[#CFD8FF]">
        <h3 className="text-2xl font-semibold">
          Introduction and What I Need To Learn
        </h3>
        <p>Introduction about HTML</p>
      </div>

      <div className="bg-[#9DCCFF] p-4 space-y-4 ">
        <div className="w-[95%] aspect-video flex justify-center items-center m-auto">
          <iframe
            title="video"
            src={videoUrl}
            allowFullScreen
            className="w-full h-full rounded-md"
          />
        </div>
        <div>
          <h3 className="text-2xl p-7">{title}</h3>
          <div>{duration}</div>
        </div>
        <div>
          <h3>Tasks OF Lesson</h3>
          <div>
            <CardCourse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleContent;