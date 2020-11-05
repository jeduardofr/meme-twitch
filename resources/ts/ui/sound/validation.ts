import * as yup from "yup";

const schema = yup.object().shape(
    {
        keyword: yup
            .string()
            .required("El nombre es obligatorio")
            .min(2, "El nombre debe contener al menos dos caracteres")
            .max(10, "EL nombre debe contenerl máximo 10 caracteres"),

        author: yup.string().required("No se ha detectado un autor"),

        audioUrl: yup.mixed().required("El audio es olbigatorio"),

        thumbnailUrl: yup.string().when(["file"], {
            is: file => !file,
            then: yup
                .string()
                .required("La URL es obligatoria")
                .url("La URL no tiene un formato válido")
        }),
        thumbnail: yup.mixed().when("url", {
            is: url => !url,
            then: yup.mixed().required("La imagen es obligatoria")
        })
    },
    [["file", "url"]]
);

export default schema;
