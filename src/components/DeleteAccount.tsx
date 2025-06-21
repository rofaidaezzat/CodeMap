import Button from "@/Ui/Button";
import  { useEffect, useState } from "react";
import GlobalModal from "./DeleteModal";
import Spinner from "@/Ui/LoadingSpinner";
import { useDeleteAccountMutation, useRequestForDeleteAccountMutation } from "@/app/services/DeleteAccountForUser";
import toast from "react-hot-toast";
import OTPForm from "./OTPForm";



interface Iprops{
  isOpenDeleteModal:boolean
  setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
}


const DeleteAccount = ({isOpenDeleteModal,setIsOpenDeleteModal}:Iprops) => {

  const[requestForDelete,{isSuccess,isLoading}]=useRequestForDeleteAccountMutation()
  const[deleteAccount,{isLoading:isLoadingDelete}]=useDeleteAccountMutation()
  const [showOTP, setShowOTP] = useState(false);

  
  //Handler for VerifyOTP
  const handleVerifyOTP = (code: string) => {
    deleteAccount({ body:{
      deletionCode:code
    }}) 
      .unwrap()
      .then(() => {
                  toast.success("Account deleted successfully!", {
                    position: "bottom-center",
                    duration: 4000,
                    style: {
                        backgroundColor: "black",
                        color: "white",
                        width: "fit-content",
                    },
                    })
            setShowOTP(false)
            localStorage.removeItem("loggedInUser");
            localStorage.removeItem("accessToken");
            setTimeout(() => {
          location.replace("SignUp");
        }, 800);
    
      })
      .catch((err) => {
        toast.error(err?.data?.message || "Invalid OTP code", {
          position: "bottom-center",
            duration: 4000,
                    style: {
                        backgroundColor: "black",
                        color: "white",
                        width: "fit-content",
                    },
        });
      });
  };
  
// isSuccess to request delete account 
  useEffect(() => {
      if (isSuccess) {
          toast.success("Check you email for get OTPCode", {
                    position: "bottom-center",
                    duration: 4000,
                    style: {
                        backgroundColor: "black",
                        color: "white",
                        width: "fit-content",
                    },
                    })
      setIsOpenDeleteModal(false)
      setShowOTP(true);
    }
    }, [isSuccess]);


  return (
    <div className="flex items-center justify-between border border-gray-300 p-6 rounded-lg bg-red-50">
      <div className="space-y-2 max-w-3xl">
        <h2 className="text-2xl font-bold text-red-700"
        onClick={()=>(
          setIsOpenDeleteModal(true)
        )}
        
        >Delete Account</h2>
        <p className="text-gray-700">
          By deleting your account, all of your data will be permanently
          removed. Please download any important information before proceeding.
        </p>
      </div>
      <Button className="px-6 py-3 bg-[#DC3545] text-white rounded-md" onClick={()=>setIsOpenDeleteModal(true)}>
        DELETE
      </Button>

      {/* Delete modal */}
      {
        isOpenDeleteModal&&
        <GlobalModal
        title="Delete Acount"
        description="Are you sure you want to delete this Account?"
        isOpen={isOpenDeleteModal}
        setIsOpen={setIsOpenDeleteModal}
        >
          <button
            onClick={() => setIsOpenDeleteModal(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700  text-gray-800 dark:text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => 
              requestForDelete({})
            }
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            {isLoading ? (
              <div className="flex gap-1 items-center justify-center">
                  <Spinner/>
                  <p>Loading...</p> 
              </div>
            ) : (
              "Get OTP Code"
            )}
          </button>
          </GlobalModal>
      }
      {/* OTP Form */}
      {
        showOTP&&
              <OTPForm onVerify={handleVerifyOTP} isloading={isLoadingDelete} onClose={()=>setShowOTP(false)}/>
      }
    </div>
  );
};

export default DeleteAccount;
