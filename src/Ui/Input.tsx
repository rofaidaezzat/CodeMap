import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(
  ({ className = "", ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
    return <input ref={ref} className={`${className}`} {...rest} />;
  }
);

// ✅ عشان React Hook Form يشتغل تمام وما تظهرش تحذيرات
Input.displayName = "Input";

export default Input;
