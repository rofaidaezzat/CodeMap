import { InputHTMLAttributes,Ref, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(({ ...rest }:IProps, ref:Ref<HTMLInputElement>) => {
    return (
    <input
        ref={ref}
        className="border-[1px]   border-gray-300 shadow-lg focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF] rounded-lg px-3 py-3 text-md  bg-[#FFFFFF]"
        {...rest}
    />
);
});

export default Input;
