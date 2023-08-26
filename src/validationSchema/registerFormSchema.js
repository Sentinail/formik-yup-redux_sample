import * as yup from "yup"

export const registerFormSchema = yup.object().shape({
    first_name: yup.string().required("Firstname is Required"),
    last_name: yup.string().required("Lastname is Required"),
    email_address: yup.string().email("Please enter valid email").required("Email is Required"),
    password: yup
        .string()
        .min(8, "Password must contain 8 or more characters")
        .required("Required"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Required"),
})