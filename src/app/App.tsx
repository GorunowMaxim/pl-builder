import { RedactorPage } from "pages/redactorPage";

import { ThemeProvider } from "./providers/themeProvider";

import "./styles/styles.scss";

const App = () => {
  return (
    <ThemeProvider>
      <div className="wrapper">
        <RedactorPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
