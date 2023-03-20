import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
    passwordConfirmation: yup.string().required('Confirmação de senha é obrigatório'),
})

export const loginSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
})

export const updateSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    password: yup.string()
})


