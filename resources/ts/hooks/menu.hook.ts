import { useState } from "react";

const useMenu = function() {
    const [open, setOpen] = useState(false);

    return {
        open,
        setOpen
    };
};

export default useMenu;
