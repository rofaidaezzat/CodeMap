import * as yup from "yup"

export const SignUpSchema = yup
    .object({
    username: yup.string().required('Username is required').min(5,'userName should be at least 5 character'),
    email: yup.string()
    .required("Email is required.")
    .matches(/^[^@]+@[^@]+\.[^@.]{2,}$/,"Not a valide email address."),
    password: yup.string().required("Password is required").min(6, "Password should be at least 6 charachters."),
    // terms: yup.boolean().oneOf([true], "You must accept the terms and conditions")

})
.required()

export const loginSchema = yup
    .object({
    identifier: yup
    .string()
    .required("Email is required")
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Not a valid email address."),
    password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should be at least 6 charachters."),
})
.required();


