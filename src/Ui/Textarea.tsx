import { TextareaHTMLAttributes, Ref, forwardRef } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const Textarea = forwardRef(({ className, ...rest }: IProps, ref: Ref<HTMLTextAreaElement>) => {
    return (
        <textarea
            ref={ref}
            className={`rounded-3xl p-3 w-full border border-purple-400 shadow-md transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 ${className}`}
            rows={6}
            {...rest}
        />
    );
});

export default Textarea;
