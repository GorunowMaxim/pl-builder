import { createContext } from "react";

type ThemeContextProps = {
  theme: string;
  toggleTheme: () => void;
};

const defaultThemeContext: ThemeContextProps = {
  theme: 'light',
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);