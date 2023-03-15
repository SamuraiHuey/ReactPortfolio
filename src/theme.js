import { extendTheme } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
    baseStyle: {
        fontSize: '20px',
    },
});

const theme = extendTheme ({
    components: {
        Button,
    },
});

export default theme;