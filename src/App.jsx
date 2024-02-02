import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <Link to="/contacts" content="Hola">
          Hola
        </Link>
      </div>
    </>
  );
}

export default App;
