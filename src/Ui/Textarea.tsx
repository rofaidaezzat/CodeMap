import { TextareaHTMLAttributes } from "react";

interface Iprops extends  TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    }


function Textarea({ className, ...rest }: Iprops) {
    return (
        <textarea
        className={`rounded-3xl p-3 w-full border border-purple-400 shadow-md transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 ${className}`}
        rows={6}
        {...rest}
        />
    );
    }
    export default Textarea;
