import { extendTheme } from "@chakra-ui/react";
import tailwindCustomColors from "./tailwindConfigColors";
import tailwindCustomFonts from "./tailwindConfigFonts";


const chakraThemes = extendTheme({
    components: {
        Modal: {
            baseStyle: {
                dialog: {
                    bg: tailwindCustomColors.green100,
                    borderRadius: '25px',
                    padding: '25px',
                },
                header: {
                    fontFamily: tailwindCustomFonts.serif,
                    fontSize: '32px',
                },
                body: {
                    fontFamily: tailwindCustomFonts.sans,
                    fontSize: '20px',
                },
                closeButton: {

                    color: tailwindCustomColors.tan100,
                    _hover: {
                        color: tailwindCustomColors.gold,
                        bg: tailwindCustomColors.green200,
                    },
                },
            },
        },
    },
});

export default chakraThemes;