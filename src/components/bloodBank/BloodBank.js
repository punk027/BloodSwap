import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import batOne from "../../assets/batOne.gif";
import batTwo from "../../assets/batTwo.gif";
import "./BloodBank.css";
const BloodBank = () => {
  return (
    <>
      <Container className="container_bloodbank">
        <Row>
         {/* <Col>
            <img className="bat_gif" src={batOne} alt=""/>
          </Col>
          <Col>
            <img className="bat_gif" src={batTwo} alt="" />
         </Col>*/}
        </Row>
        <div className="t_blood_bank">Welcome to the $BLOOD Bank</div>

        <div style={{ textAlign: "center" }}>
          <iframe title="blood swap"
            src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
            height="580px"
            width="100%"
            id="uniswap_iframe"
          />
        </div>
      </Container>
      <br />
    </>
  );
};

export default BloodBank;
