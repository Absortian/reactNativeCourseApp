import * as Yup from "yup";

export function initialValues(){
    return {
        email: "",
        password: "",
        passwordConfirmation: ""
    };
}

export function validationSchema(){
    return Yup.object().shape({
        email: Yup.string()
            .email("El correo electrónico no es válido")
            .required("El correo electrónico es obligatorio"),
        password: Yup.string()
            .min(6, "La contraseña debe tener al menos 6 caracteres")
            .required("La contraseña es obligatoria"),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
            .required("La confirmación de la contraseña es obligatoria")
    });
}