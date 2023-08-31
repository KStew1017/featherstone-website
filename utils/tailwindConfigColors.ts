const tailwindConfig = require('../tailwind.config.js');

const tailwindCustomColors = {
    grey: tailwindConfig.theme.extend.colors['grey'],
    lightGrey: tailwindConfig.theme.extend.colors['light-grey'],
    tan100: tailwindConfig.theme.extend.colors['tan-100'],
    tan200: tailwindConfig.theme.extend.colors['tan-200'],
    tan300: tailwindConfig.theme.extend.colors['tan-300'],
    gold: tailwindConfig.theme.extend.colors['gold'],
    green100: tailwindConfig.theme.extend.colors['green-100'],
    green200: tailwindConfig.theme.extend.colors['green-200'],
    green75: tailwindConfig.theme.extend.colors['green-75'],
    green50: tailwindConfig.theme.extend.colors['green-50'],
    green25: tailwindConfig.theme.extend.colors['green-25'],
};


export default tailwindCustomColors;