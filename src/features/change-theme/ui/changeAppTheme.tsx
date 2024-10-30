import { useContext } from "react";

import { ThemeContext } from "shared/lib/theme";

export const ChangeAppTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <button
        onClick={toggleTheme}
        className="theme-switcher__button"
      >
        light
      </button>
      <button
        onClick={toggleTheme}
        className="theme-switcher__button"
      >
        dark
      </button>
    </div>
  );
};
