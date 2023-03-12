import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#ff0000",
    secondary: "#00ff00",
    tertiary: "#0000ff",
  },
};

export function ThemeWrapper({ children }: React.PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
