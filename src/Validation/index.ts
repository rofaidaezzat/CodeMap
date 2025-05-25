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
    .min(6, "Password should be at least 6 charachters."),
})
.required();
export const ContactUs_Schema = yup.object({
    first_name: yup
        .string()
        .trim()
        .required("First name is required")
        .min(2, "First name should be at least 2 characters"),
    last_name: yup
        .string()
        .trim()
        .required("Last name is required")
        .min(2, "Last name should be at least 2 characters"),
    email: yup
        .string()
        .required("Email is required")
        .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Not a valid email address"),
    whatsappnumber: yup
        .string()
        .required("Whatsapp number is required")
        .min(10, "Whatsapp number should be at least 10 digits"),
    message: yup
        .string()
        .transform((value) => value?.trim())
        .required("Message is required")
        .min(10, "Message should be at least 10 characters")
}).required();

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
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include at least one uppercase letter")
    .matches(/[a-z]/, "Must include at least one lowercase letter")
    .matches(/\d/, "Must include at least one number")
    .matches(/[@$!%*?&]/, "Must include at least one special character"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], "Passwords must match")
    .required("Please confirm your new password"),
});

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
