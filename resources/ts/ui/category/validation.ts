import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/png", "image/jpeg"];
const FILE_SIZE = 1024 * 1024 * 8;

const schema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    type: yup.string(),
    url: yup.string().when("type", {
        is: "url",
        then: yup
            .string()
            .required("La URL es obligatoria")
            .url("La URL no tiene un formato válido")
    }),
    file: yup.mixed().when("type", {
        is: "file",
        then: yup
            .mixed()
            .required("El archivo es obligatorio")
            .test(
                "fileSize",
                "El tamaño del archivo es muy grande",
                value => value && value[0] && value[0].size <= FILE_SIZE
            )
            .test(
                "fileType",
                "El formato del archivo no es soportado",
                value =>
                    value &&
                    value[0] &&
                    SUPPORTED_FORMATS.includes(value[0].type)
            )
    })
});

export default schema;
