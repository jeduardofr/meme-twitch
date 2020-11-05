import * as yup from "yup";

const schema = yup.object().shape(
    {
        name: yup.string().required("El nombre es obligatorio"),
        url: yup.string().when(["file"], {
            is: file => !file,
            then: yup
                .string()
                .required("La URL es obligatoria")
                .url("La URL no tiene un formato válido")
        }),
        file: yup.mixed().when("url", {
            is: url => !url,
            then: yup.mixed().required("La imagen es obligatoria")
        })
    },
    [["file", "url"]]
);

export default schema;
