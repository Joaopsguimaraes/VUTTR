import HomePage from "./components/HomePage";
import { ToolProvider } from "./contexts/ToolContext";
import "./App.css";

const App = () => {
  return (
    <ToolProvider>
      <HomePage />
    </ToolProvider>
  );
};

export default App;
