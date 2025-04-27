import { useNavigate } from "react-router-dom"

const HeaderButtonOfInfo = () => {
    const navigate =useNavigate()
    const goToRoadMap=()=>{
        navigate('SecondPageOfRoadMap')
    }
  return (
    <button onClick={goToRoadMap}
    className="cursor-pointer bg-gradient-to-b from-[#db62cf] to-[#af40ff] shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
>
    <div className="relative overflow-hidden">
    <p 
        className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
        Start Learning
    </p>
    <p
        className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
        Start Learning
    </p>
    </div>
</button>

    )
}

export default HeaderButtonOfInfo