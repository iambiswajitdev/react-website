import React from "react";
import NavBar from "../components/navBar";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col lg={2}>
            <Logo />
          </Col>
          <Col lg={10}>
            <NavBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
