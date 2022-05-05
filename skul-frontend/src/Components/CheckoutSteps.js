import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/checkresult">
            <Nav.Link>Check Current Result</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Check Current</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/yearofresult">
            <Nav.Link>Sort By Year</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sort By Year</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/resultterm">
            <Nav.Link>Sort By Term</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sort By Term</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
