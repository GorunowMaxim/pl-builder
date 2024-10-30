import { useContext } from "react";

import { ChangeAppTheme } from "features/change-theme";
import { ThemeContext } from "shared/lib/theme";

import "./styles.scss";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={`header header_${theme}`}>
      <ChangeAppTheme />
    </header>
  );
};
