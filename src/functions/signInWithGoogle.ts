import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebaseConfig";
import toast from "react-hot-toast";

export const signInWithGoogle = async () => {
    try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    toast.success(`Welcome, ${user.displayName}`);
    return user;
    } catch (error) {
    toast.error("Google sign-in failed");
    console.error("Google Sign-In Error:", error);
    }
};