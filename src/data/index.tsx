import { Icategories, IDataOfCardInfo, ILoginInput, IQuestions, IRegisterInput } from "../interfaces";

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

    export const categories:Icategories[]=[

        {   
            id:1,
            StageName:"HTML",
            category1:"Introduction and Basics",
            category2:"HTML Structure and Basic Elements",
            category3:"Attributes, Links, and Formatting",
            category4:"Lists, Tables, and Div/Span Usage",
            category5:"Advanced HTML Features",
            category6:"Multimedia and Forms",
            category7:"Special Elements and Final Lessons",
            },
        { 
            id:2,
            StageName:"css",
            category1:"Introduction and what yiu need to learn",
            category2:"Box Model and Positioning",
            category3:"Element Appearance and Visibility",
            category4:"Element Structure and Behavior",
            category5:"text",
            category6:"inheratince",
            category7:"font",
            category8:"Element Interaction and Layering",
            category9:"Styling Structures and Special States",
            category10:"Cross-Browser Styling and Box Enhancements",
            category11:"Advanced Styling and Behavior Control",
            category12:"flex box",
            category13:"Visual Effects and Interaction Control",
            category14:"grid parent",
            category15:"transform",
            category16:"animation",
            category17:"selector",
            category18:"media",
            category19:"Framework Structure and Global Configurations",
            },
        {
            id:3,
            StageName:"javascript",
            category1:"Introduction and what yiu need to learn",
            category2:"Box Model and Positioning",
            category3:"Element Appearance and Visibility",
            category4:"Element Structure and Behavior",
            category5:"text",
            category6:"inheratince",
            category7:"font",
            category8:"Element Interaction and Layering",
            category9:"Styling Structures and Special States",
            category10:"Cross-Browser Styling and Box Enhancements",
            category11:"Advanced Styling and Behavior Control",
            category12:"flex box",
            category13:"Visual Effects and Interaction Control",
            category14:"grid parent",
            category15:"transform",
            category16:"animation",
            category17:"selector",
            category18:"media",
            category19:"Framework Structure and Global Configurations",
            category20:"animation",
            category21:"selector",
            category22:"media",
        },
        {
            id:4,
            StageName:"Bootstrap",
            category1:"Introduction and Basics",
        },
        {
            id:5,
            StageName:"react",
            category1:"Introduction and Basics",
        },
    ]

    export const DataOfCardInfo:IDataOfCardInfo[]=[
        {
            title:"Core Languages",
            content:[
                {
                    imagurl:"src/assets/Info/html-5-svgrepo-com.svg",
                    imagetitle:"HTML"
                },
                {
                    imagurl:"src/assets/Info/css-document-extension-file-file-format-file-type-svgrepo-com.svg",
                    imagetitle:"Css"
                },
                {
                    imagurl:"src/assets/Info/javascript.svg",
                    imagetitle:"JavaScript"
                }
                
            ]
        },
        {
            title:"Popular FrameWork",
            content:[
                {
                    imagurl:"src/assets/Info/react-svgrepo-com.svg",
                    imagetitle:"React"
                },
                {
                    imagurl:"src/assets/Info/vue-svgrepo-com.svg",
                    imagetitle:"Vue"
                },
                {
                    imagurl:"src/assets/Info/angular-svgrepo-com.svg",
                    imagetitle:"Angular"
                },
                {
                    imagurl:"src/assets/Info/svelte-icon-svgrepo-com.svg",
                    imagetitle:"Svelte"
                },
                
            ]
        },
        {
            title:"Development Tools",
            content:[
                {
                    imagurl:"src/assets/Info/vs-code-svgrepo-com.svg",
                    imagetitle:"VS CODE"
                },
                {
                    imagurl:"src/assets/Info/webstorm-svgrepo-com.svg",
                    imagetitle:"WebStorm"
                },
                {
                    imagurl:"src/assets/Info/sublimetext-icon-svgrepo-com.svg",
                    imagetitle:"Sublime Text"
                },
            ]
        }

    ] 


    
