import React from "react";
import {  Container, Row } from "react-bootstrap";

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
            src="https://app.uniswap.org/#/swap?exactField=input&use=v3&outputCurrency=0x12753244901f9e612a471c15c7e5336e813d2e0b"
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
