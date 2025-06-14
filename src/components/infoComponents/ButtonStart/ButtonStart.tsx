import { useNavigate } from 'react-router-dom'
import './ButtonStart.css'
import { useEnrollRoadMapMutation } from '@/app/services/userOperations'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import Spinner from '@/Ui/LoadingSpinner'


const ButtonStart = () => {

    const navigate = useNavigate()
    const { ClickedId } = useSelector((state: RootState) => state.clickedId);
    const [enroll, { isLoading, isSuccess }] = useEnrollRoadMapMutation()

    const navigateToRoadmap = () => {
    if (ClickedId) {
        enroll(ClickedId)
        navigate('SecondPageOfRoadMap')
    }
    }

    useEffect(() => {
    if (isSuccess) {
        toast.success("You Enroll the track successfully", {
        position: "bottom-center",
        duration: 4000,
        style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
        },
        });
    }
    }, [isSuccess]);

    return (
    <div className="buttons-startInfo">
        <button
        className="btn-startInfo flex items-center gap-2 px-4 py-2"
        onClick={navigateToRoadmap}
        disabled={isLoading}
        >
        {isLoading && <Spinner />}
        {isLoading ? 'Loading...' : (
            <>
            <span></span><p data-start="good luck!" data-text="start" data-title="Enroll Now!"></p>
            </>
        )}
        </button>
    </div>
    )
}

export default ButtonStart
