import { ErrorOption } from "react-hook-form";

type ErrorFormResponse = {
    errors: {
        [key: string]: string[];
    };
};

function useError() {
    function setFormErrors(
        e: ErrorFormResponse,
        setError: (name: unknown, error: ErrorOption) => void
    ) {
        Object.keys(e.errors).forEach(key => {
            const errors = e.errors[key];
            setError(key, {
                type: "manual",
                message: errors[0]
            });
        });
    }

    return {
        setFormErrors
    };
}

export default useError;
