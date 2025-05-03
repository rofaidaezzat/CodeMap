import { useNavigate } from 'react-router-dom'
import './ButtonStart.css'

const ButtonStart = () => {

    const navigate=useNavigate()

    const navigateToRoadmap=()=>{

        navigate('SecondPageOfRoadMap')
    }
    return (
    <div className="buttons-startInfo" onClick={navigateToRoadmap}>
    <button className="btn-startInfo"><span></span><p data-start="good luck!" data-text="RoadMap" data-title="start Now!"></p></button>
    </div>
    )
}

export default ButtonStart