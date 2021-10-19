import React from "react";
import { Button } from "react-bootstrap";
//import vampLogo from "../../assets/vamp-logo.svg";
import "./Sneaky.css";

const Sneaky = () => {
  return (
    <div className="sneaky_container">
    { /* <img className="vamp_logo" src={vampLogo} alt="vamp" />*/}
      <br />
      <br />
      <Button className="route_item">Staking</Button>
    </div>
  );
};

export default Sneaky;
