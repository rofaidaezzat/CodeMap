import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebaseConfig";
import toast from "react-hot-toast";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";



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

export function cn(...inputs: any[]) {
    return twMerge(clsx(inputs));
    }

