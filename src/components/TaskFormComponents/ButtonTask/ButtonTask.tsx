import { ButtonHTMLAttributes } from 'react'
import './ButtonTask.css'
interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    title:string
}

const ButtonTask = ({title,...rest}:Iprops) => {
    return (
    <button className="btn-task" {...rest}>
    <span>{title}</span>
    </button>
    )
}

export default ButtonTask