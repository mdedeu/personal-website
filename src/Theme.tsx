import {extendTheme, ThemeConfig, useColorModeValue} from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
      fonts: {
          heading: `'Jersey 10', sans-serif`,
          body: `'VT323', monospace`,
      },
    colors: {
        brand: {
            light: `linear-gradient(to right, #6E72FC, #AD1DEB, #7B52B9)`,
            dark: `linear-gradient(122deg, rgba(24,25,32,1) 0%, rgba(9,9,121,1) 66%, rgba(0,212,255,1) 100%)`}}
    ,
    styles: {
        global: {
            body: {
                bg: 'brand.dark',
            },
        },
    },
    config
})
export default theme