import { ILoginInput, IQuestions, IRegisterInput } from "../interfaces";

export const REGISTER_FORM: IRegisterInput[] = [
    {
        name: "username",
        Label:"Full Name",
        placeholder: "Username",
        type: "text",
        validation: {
        required: true,
        minLength: 5,
        },
    },
    {
        name: "email",
        Label:"Email",
        placeholder: "Email",
        type: "email",
        validation: {
        required: true,
        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, /*validation for email */
        },
    },
    {
        name: "password",
        Label:"Password",
        placeholder: "Password",
        type: "password",
        validation: {
        required: true,
        minLength: 6,
        },
    },
];

export const LOGIN_FORM: ILoginInput[] = [
    {
        name: "identifier",
        Label:"Email",
        placeholder: "Email",
        type: "email",
        validation: {
        required: true,
        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
    },
    {
        name: "password",
        Label:"Password",
        placeholder: "Password",
        type: "password",
        validation: {
        required: true,
        minLength: 6,
        },
    },
    ];

    export const Questions:IQuestions[]=[
        {
            Question:"How can I get started with Learnly?",
            answer:"can I get started with Learnly"
        },
        {
            Question:"How do I join a course or path?",
            answer:"do I join a course or path"
        },
        {
            Question:"What are the differences between a course and a path?",
            answer:"are the differences between a course and a path"
        },
        {
            Question:"How much does Learnly cost?",
            answer:" much does Learnly cost"
        },
        {
            Question:"How much does Learnly cost?",
            answer:" much does Learnly cost"
        },
        {
            Question:"How can I get started with Learnly?",
            answer:" much does Learnly cost"
        },
        {
            Question:"How do I join a course or path?",
            answer:" much does Learnly cost"
        },
        {
            Question:"What are the differences between a course and a path?",
            answer:" much does Learnly cost"
        },
        {
            Question:"How much does Learnly cost?",

            answer:" much does Learnly cost"
        },
        {
            Question:"How can I get started with Learnly?",
            answer:" much does Learnly cost"
        },
        {
            Question:"How do I join a course or path?",
            answer:" much does Learnly cost"
        },
        
    ]
    
