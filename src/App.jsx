import HomePage from "./components/HomePage";
import Modal from "./components/Modal";
import { CssBaseline } from "@mui/material";
import "./App.css"

const App = () => {
  return(
    <div>
      <CssBaseline/>
      <HomePage/>
      <Modal/>
    </div>
  )
}

export default App;