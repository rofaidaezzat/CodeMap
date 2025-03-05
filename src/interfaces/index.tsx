
export interface IRegisterInput {
    name: "email" | "username" | "password";
    Label:"Full Name"|"Email"|"Password"
    placeholder: string;
    type: string;
    validation: {
        required?: boolean;
        minLength?: number;
        pattern?: RegExp;
    };
}

export interface ILoginInput {
    name: "identifier" | "password";
    Label:"Email"|"Password"
    placeholder: string;
    type: string;
    validation: {
        required?: boolean;
        minLength?: number;
        pattern?: RegExp;// regular Expression
    };
}
    export interface IErrorResponse {
        error: {
            message?: string;// انا كده بطلع المسدج الي جوا ال ايرور
        };
    }

export interface IQuestions{
    Question:string;
    answer:string;
}