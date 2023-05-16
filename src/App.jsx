import './App.css'
import { Padre, Hijo } from "./components/FunctionComponent";

function App() {
  return (
    <Padre>
      <Hijo nombre = "Uriel" />
    </Padre>
  );
}

export default App
