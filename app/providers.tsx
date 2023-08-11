"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js"


export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
    return (
        <NextUIProvider>
            <NextThemesProvider {...themeProps}>
                <CacheProvider>
                    <ChakraProvider>
                        {children}
                    </ChakraProvider>
                </CacheProvider>
            </NextThemesProvider>
        </NextUIProvider>
    );
}
