import * as yup from "yup"
export const SignUpSchema = yup
    .object({
    first_name: yup.string().required('Username is required').min(5,'userName should be at least 5 character'),
    last_name: yup.string().required('Username is required').min(5,'userName should be at least 5 character'),
    email: yup.string()
    .required("Email is required.")
    .matches(/^[^@]+@[^@]+\.[^@.]{2,}$/,"Not a valide email address."),
    password: yup.string().required("Password is required").min(8, "Password should be at least 8 charachters."),
   })
.required()

export const loginSchema = yup
    .object({
    email: yup
    .string()
    .required("Email is required")
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Not a valid email address."),
    password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be at least 6 charachters."),
})
.required();
export const ContactUs_Schema = yup
    .object({
        first_name: yup
    .string()
    .required("first name is required")
    .min(2, "first name should be at least 6 charachters."),
    last_name: yup
    .string()
    .required("last name is required")
    .min(2, "last name should be at least 6 charachters."),
    email: yup
    .string()
    .required("email is required")
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Not a valid email address."),
    whatsappnumber: yup
    .string()
    .required("whatsapp number is required")
    .min(10, "whatsapp number should be at least 6 charachters."),
    message: yup
    .string()
    .required("message is required")
    .min(10, "message should be at least 6 charachters."),


})
.required();

export const ForgetPasswordSchema = yup
    .object({
    email: yup
    .string()
    .required("Email is required")
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Not a valid email address."),
})
.required();
export const NewPasswordSchema = yup.object({
    newPassword: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be at least 8 characters."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Passwords must match")
      .required("Please confirm your password"),
  })
  .required();
export const UpdatePasswordSchema = yup.object({
    currentPassword: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be at least 8 characters."),
    newPassword: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be at least 8 characters."),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Passwords must match")
      .required("Please confirm your password"),
  })
  .required();

export const UpdateProfileSchema = yup.object({
    first_name: yup
    .string()
    .required("first name is required")
    .min(2, "first name should be at least 6 charachters."),
    last_name: yup
    .string()
    .required("last name is required")
    .min(2, "last name should be at least 6 charachters."),
    email: yup
    .string()
    .required("email is required")
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Not a valid email address."),
})
.required();
