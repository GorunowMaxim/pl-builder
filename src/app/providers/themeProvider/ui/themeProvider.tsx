import { ReactNode, useState } from "react";

import { ThemeContext } from "shared/lib/theme";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-wrapper theme-wrapper_${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
