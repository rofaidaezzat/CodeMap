import { ButtonHTMLAttributes, ReactNode } from 'react'
import './ButtonTask.css'

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

const ButtonTask = ({ children, className = "", ...rest }: Iprops) => {
  return (
    <button className={`btn-task ${className} `} {...rest}>
      <div className="btn-task-content">
        {children}
      </div>
    </button>
  )
}

export default ButtonTask