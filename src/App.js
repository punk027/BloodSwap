import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar/NavbarComponent";
import Sneaky from "./components/sneaky/Sneaky";
import { Container } from "react-bootstrap";
import BloodBank from "./components/bloodBank/BloodBank";

function App() {
  return (
    <>
      <NavbarComponent />
      &nbsp; &nbsp;{" "}
      <div className="d-flex sneaky_bloodbank  justify-content-center align-items-center ">
        <Sneaky />
        <BloodBank />
      </div>
    </>
  );
}

export default App;
