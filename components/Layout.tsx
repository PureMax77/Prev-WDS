import { Global, ThemeProvider } from "@emotion/react";
import { global } from "../styles/global";
import theme from "../styles/theme";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Header />
      {children}
    </ThemeProvider>
  </div>
);
