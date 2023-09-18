import localFont from "next/font/local";


export const jost = localFont({
    src: [
        {
            path: "../public/fonts/Jost-Regular.ttf",
            weight: "normal",
        },
        {
            path: "../public/fonts/Jost-Bold.ttf",
            weight: "bold",
        }
    ],
    variable:  '--font-jost'
});

export const ptserif = localFont({
    src: [
        {
            path: "../public/fonts/PTSerif-Regular.ttf",
            weight: "normal",
        },
        {
            path: "../public/fonts/PTSerif-Bold.ttf",
            weight: "bold",
        }
    ],
    variable:  '--font-ptserif'
});

export const northwell = localFont({
    src: [
        {
            path: "../public/fonts/Northwell.ttf",
            weight: "normal",
        }
    ],
    variable:  '--font-northwell'
});

export const northwellSwash = localFont({
    src: [
        {
            path: "../public/fonts/Northwell-Swash.ttf",
            weight: "normal",
        }
    ],
    variable:  '--font-northwell-swash'
});