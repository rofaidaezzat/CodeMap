import Image from "../components/Image"
import QuestionDev from "../components/QuestionDev"
import { Questions } from "@/data"
import Button from "../Ui/Button"

// interface FaqItem {
//     question: string;
//     answer: string;
// }

const FAQFerMember = () => {

// Render

const renderQuestions= Questions.map(({Question,answer},idx)=>(
    <div key={idx}  >
            <QuestionDev questionName={Question} answer={answer}  />
    </div>
)
)
    return (
        <div className="bg-[#B3AECA] min-h-screen py-20 px-4 md:px-8">
            <h1 className="text-center text-4xl font-extrabold text-[#2F174E] mb-12">Frequently Asked Questions</h1>
            <div className="flex flex-col md:flex-row items-center justify-around gap-12 max-w-7xl mx-auto">
                <div className="w-full md:w-2/5">
                    <Image imageurl="/assets/FAQ-20250304T193906Z-001/FAQ/ImageFAQ.png"  alt="error" />
                </div>
                {/* <div className="w-full md:w-3/5">
                    {FAQFORMEMBER.map(({ question, answer }: FaqItem, index: number) => (
                        <div key={index} className="mb-6 bg-white/50 p-6 rounded-2xl shadow-lg border border-gray-200 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-[#2F174E] mb-4">{question}</h3>
                            <p className="text-gray-700">{answer}</p>
                        </div>
                    ))}
                </div> */}
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
    )
}

export default FAQFerMember