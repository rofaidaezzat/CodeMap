import { LetterPullUp } from '@/components/eldoraui/letterpullup'
import Image from '../../components/Image'
import Trackcard from '../../components/Trackcard'
import Button from '../../Ui/Button'

const Tracks = () => {
  return (
    <>
      <div className="pt-20 mt-5  flex overflow-x-hidden">
        {/* left section */}
          <div className='flex flex-col  space-y-5 justify-start p-8 gap-8 w-full lg:w-4/6 '>
          
            <LetterPullUp
            className="text-black font-display text-start text-2xl font-bold tracking-wide md:text-4xl"
            text="Choose your learning track"
            />
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:justify-center  gap-10">
            <Trackcard
              url="src/assets/Tracks img/Front-End.jpeg"
              alt="image front end"
              title="Front-end "
              path="InfoOfFrontend"
            />
            <Trackcard
              url=" src/assets/Tracks img/JS.jpeg"
              alt="image backend"
              title="back-end Node js"
              path="InfoOfFrontend"
            />
            <Trackcard
              url="src/assets/Tracks img/Gemini_Generated_Image_8x5cps8x5cps8x5c.jpeg"
              alt="image UI&UX"
              title="UI&UX "
              path="InfoOfFrontend"
            />
            <Trackcard
              url="src\assets\Tracks img\Back-End.jpeg"
              alt="image Backend"
              title="Backend .net "
              path="InfoOfFrontend"
            />
            
            <Trackcard
              url="src/assets/Tracks img/MobileApp.jpeg"
              alt="image flutter"
              title="Flutter "
              path="InfoOfFrontend"
            />
            <Trackcard
              url="src/assets/Tracks img/Robotics.jpeg"
              alt="image Ai"
              title="Machine Learning"
              path="InfoOfFrontend"
            />
            <Trackcard
              url="src/assets/Tracks img/ReactJS.jpeg"
              alt="image Reactjs"
              title="ReactJS  "
              path="InfoOfFrontend"
            />
            <Trackcard
              url="src/assets/Tracks img/Gemini_Generated_Image_uhvkyguhvkyguhvk.jpeg"
              alt="image js"
              title="Mastering JS with Laravel"
              path="InfoOfFrontend"
            />
            </div>

          </div>
          {/* right section  */}


          <div className="hidden lg:flex lg:flex-col w-[380px] md:w-[400px]  lg:w-[440px] h-screen shadow-2xl mx-auto rounded-xl  p-3 mr-0 space-y-2">
            <h3 className="text-2xl pb-4 lg:text-3xl">Upcoming Courses</h3>
            <div className='flex flex-col  gap-12'>
              <div className='flex flex-col gap-4'>
              <div className="flex items-center  space-x-2">
              <Image
                imageurl="src/assets/Tracks img/Front-End.jpeg"
                alt='error'
                className="w-28 h-28 rounded-xl"
              />
              <div>
                <p className=" pb-4 text-xl text-[#565656] font-bold">Mastering Frontend HTML/CSS/JS</p>
                <p className="text-slate-400 text-xs lg:text-[15px]">2h 15m</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                imageurl="src/assets/Tracks img/Front-End.jpeg"
                alt='error'
                className="w-28 h-28 rounded-xl"
              />
              <div>
                <p className=" pb-4 text-xl text-[#565656] font-bold">Mastering Frontend HTML/CSS/JS</p>
                <p className="text-slate-400 text-xs lg:text-[15px]">2h 15m</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                imageurl="src/assets/Tracks img/Front-End.jpeg"
                alt='error'
                className="w-28 h-28 rounded-xl"
              />
              <div>
                <p className=" pb-4 text-xl text-[#565656] font-bold">Mastering Frontend HTML/CSS/JS</p>
                <p className="text-slate-400 text-xs lg:text-[15px]">2h 15m</p>
              </div>
              </div>
              </div>
              <div className="relative">
  <div className="absolute -right-7  bg-white border-4 border-[#2F174E] rounded-3xl p-6 flex flex-col items-start text-left shadow-lg w-[270px] md:w-[340px] lg:w-[400px]">
    <h3 className="font-bold text-lg text-gray-900">
      Not sure where to start?<br />Talk to our chatbot
    </h3>
    <Button className="mt-4 bg-[#2F174E] text-white py-2 px-4 rounded-full text-sm font-semibold shadow-md">
      Start Chatting
    </Button>
    <div className="absolute -right-12 bottom-2   hidden md:flex  md:w-[130px] md:h-[130]   lg:w-[150px]  lg:h-[150px]">
      <Image imageurl="src/assets/Home/chat.png"  alt="error" className="w-full h-full object-contain" />
    </div>
  </div>
</div>

          </div>
          </div>
        </div>
    </>
  )
}

export default Tracks
