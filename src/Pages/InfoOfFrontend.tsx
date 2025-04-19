import { CalendarDays } from 'lucide-react';
import Button from '../Ui/Button';
import { DataOfCardInfo } from '../data';
import CardOfInfo from '../components/Course Overview Of info/CardOfInfo';
import ParticleRing from '../components/ParticleRing';

const InfoOfFrontend = () => {

  return (
    <div className='min-h-screen pt-20 m-10 flex flex-col gap-10 items-center'>
      {/* first section  */}
      <div  className="w-full ">
            <ParticleRing title='Front-End' description='Let Learning With Us'/>
      </div>

      {/*  second dev */}
      <div className='w-full mt-5  flex flex-col gap-3'>
        <h3 className='font-bold  text-[#371F5A] text-3xl'>
        Introduction to Front-End Development
        </h3>
        <p className='text-[22px]'>
        Front-end development is the practice of producing HTML, CSS, and JavaScript for a website or Web Application so
        that a user can see and interact with them directly. The challenge associated with front-end development is that the
        tools and techniques used to create the front end of a website change constantly and so the developer needs to
        constantly be aware of how the field is developing.
        </p>
      </div>
       {/* calander */} 
    <div className='flex  w-full  mt-10  gap-9 items-center justify-around bg-slate-200 h-[300px]'>
      <div className='flex flex-col gap-3 '>
      <h3 className='font-blod text-[40px]'>
    When would you like to start?
    </h3>
    <p className='text-[20px] text-[#888080]'>Start straight away and join a global classroom of learners.<br/> If the course
    hasn’t started yet you’ll see the future date listed below.</p>

      </div>
  
    
    <div className='border-2  border-l-4 border-[#888080] border-l-[#DE00A5] w-[600px]  h-[75px] p-2 flex justify-between'>
  
        <div className='flex gap-2 items-center justify-center cursor-pointer'>
        <CalendarDays color='black' size={40} />
        <p className='text-black text-[20px]'>Available now</p>
        </div>
        <Button className='bg-[#DE00A5] w-fit text-black  px-4 md:px-6 py-2 rounded-md flex items-center justify-center font-semibold text-sm md:text-base'>
        Join today
        </Button>
      </div>
    </div>

      {/* fourth section */}
    <div className='w-full flex justify-around   mt-5'>
    {
      DataOfCardInfo.map((data)=>(
          <CardOfInfo  title={data.title} content={data.content} />
      ))
    }

{/*      
      <CardOfInfo/>
      <CardOfInfo/>
   */}
  
    </div>
  

  <div className='w-full flex flex-col gap-5  mt-10'>
    <div className=' w-full bg-[#f6e9ff] h-[200px]  pt-10 gap-4 rounded-lg shadow-lg shadow-[#B0B5BC] flex flex-col transition-transform duration-300 hover:scale-105 p-6'>
      <span className='text-black  w-4/6 '>
      <h3 className='text-[25px] font-bold'>Career Opportunities</h3>
      <p className='text-[18px]  '>After completing this course, learners will be equipped with the necessary skills to explore opportunities in front-end development, AI
      applications, and software engineering roles.</p>
      </span>
    </div>
    <div className=' w-full bg-[#f6e9ff] h-[200px]  pt-8 gap-4 rounded-lg shadow-lg shadow-[#B0B5BC] flex flex-col transition-transform duration-300 hover:scale-105 p-6'>
      <span className='text-black  w-4/6 '>
      <h3 className='text-[25px] font-bold'>Advanced Topics</h3>
      <p className='text-[18px]  '> 
      State Management in Front-End Applications<br/>
      Performance Optimization & Lazy Loading<br/>
      Security Best Practices for Front-End<br/>
      AI-Powered Personalization in Web Development
      </p>
      </span>
    </div>
    <div className=' w-full bg-[#f6e9ff] h-[200px]  pt-10 gap-4 rounded-lg shadow-lg shadow-[#B0B5BC] flex flex-col transition-transform duration-300 hover:scale-105 p-6'>
      <span className='text-black  w-4/6 '>
      <h3 className='text-[25px] font-bold'>Project-Based Learning</h3>
      <p className='text-[18px]  '>Hands-on projects include building a responsive website, developing an AI-powered chatbot, and creating a real-time dashboard with live
      data.</p>
      </span>
    </div>
    <div className=' w-full bg-[#f6e9ff] h-[200px]  pt-10 gap-4 rounded-lg shadow-lg shadow-[#B0B5BC] flex flex-col transition-transform duration-300 hover:scale-105 p-6'>
      <span className='text-black  w-4/6 '>
      <h3 className='text-[25px] font-bold'>Testimonials</h3>
      <p className='text-[18px]  '>
        "This course provided me with the skills I needed to land my first job as a front-end developer!" - Alex J.
        "The AI integration lessons were game-changing for my career in real estate applications." - Sarah M.
      </p>
      </span>
    </div>

  </div>
    
    </div>
  )
}

export default InfoOfFrontend