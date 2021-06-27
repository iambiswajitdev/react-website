import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Card = () => {
  const [boxbgcolor, setBgcolor] = useState(false);

  const buttonHandelar = () => {
    setBgcolor(!boxbgcolor);
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={5}>
            <div className="main_card">
              <div className={boxbgcolor === true ? "radbgcolor" : "card"}>
                <div
                  className={
                    boxbgcolor === true ? "card_contant" : "green_card_contant"
                  }
                >
                  <h3>hello</h3>
                  <h3>hello hello</h3>
                  <h3>hello hello hello</h3>
                  <h3>hello hello hello hello</h3>
                </div>
              </div>
            </div>
            <Button onClick={buttonHandelar} className="press_btn">
              Press
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
