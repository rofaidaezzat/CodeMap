import Image from "../components/Image"
import QuestionDev from "../components/QuestionDev"
import { Questions } from "../data"
import Button from "../Ui/Button"
import Input from "../Ui/Input"

const FAQFerMember = () => {



// Render

const renderQuestions= Questions.map(({Question,answer},idx)=>(
    <div key={idx}  >
            <QuestionDev questionName={Question} answer={answer}  />
    </div>

)
)
    
    return (
        <>
    <div className="min-h-screen  lg:pt-20 mt-10 flex flex-col items-center p-10 ">
        {/* first section */}
        <div className="flex lg:flex-row md:flex-col h-2/6 gap-10  ">
            <Image imageurl="src/assets/FAQ-20250304T193906Z-001/FAQ/ImageFAQ.png"  alt="error" />
            <div className="flex flex-col justify-around">
                <h3 className="font-bold text-[50px] text-center"> Frequently asked <br/> questions</h3>
                <div className="mt-6 flex items-center bg-[#EEEFF2] p-2 rounded-full shadow-md w-full max-w-md">
                <Input
                type="text"
                placeholder="Search for help"
                className="flex-1 border-none outline-none px-4 py-2 text-gray-700 text-lg bg-[#EEEFF2]"
                />
                <Button className="bg-[#607AFB] text-white px-6 py-2 rounded-full flex   items-center gap-2 w font-semibold">
                        <p>Submit</p>
                </Button>
            </div>
            </div>
        </div>
        {/* second section  */}
        <div className="h-1/6 flex mt-10 gap-10  ">
            <Button className=" bg-[#EEEFF2] rounded-full text-[#1C1D22] px-6 py-2  flex   items-center gap-2 w font-semibold  ">
                <p>ALL</p>
            </Button>
            <Button className=" bg-[#EEEFF2] rounded-full text-[#1C1D22] px-6 py-2 flex   items-center gap-2 w font-semibold  ">
                <p>Getting StartedL</p>
            </Button>
            <Button className=" bg-[#EEEFF2] rounded-full text-[#1C1D22] px-6 py-2  flex   items-center gap-2 w font-semibold  ">
                <p>Pricing</p>
            </Button>
        </div>
        {/* Questions section */}
        <div className="flex flex-col gap-3 w-full lg:items-center my-10 " >
                {renderQuestions}

        </div>
    

    </div>
    </>
    )
}

export default FAQFerMember