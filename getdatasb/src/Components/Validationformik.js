import *as Yup from "yup";
const Validationformik=Yup.object({
    user_name: Yup.string().required("**"),
    user_password: Yup.string()
    .required("**")
    .min(4,"mimimum 4 characters")
    .max(10,"max 10 characters"),
    user_email: Yup.string().email("invalid email format").required("**"),
    user_mobile: Yup.string()
    .required("**")
    .length(10,"the number must be of exactly 10 numbers"),
});

export default Validationformik;