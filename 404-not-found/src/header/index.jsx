import React from "react";
import { Row, Container } from "react-bootstrap";
import "./styles.scss";

const Header = () => {
  return (
    <>
      <header className="App-header">
        <Container fluid>
          <Row>
            <p className="headerTitle">404 not found</p>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
