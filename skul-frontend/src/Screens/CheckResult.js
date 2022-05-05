import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutSteps from "../Components/CheckoutSteps";

import FormContainer from "../Components/FormContainer";

const CheckResult = () => {
  return (
    <div
      style={{
        height: "60vh",
        border: "1px solid darkblue",
        borderRadius: "8px",
      }}
    >
      <CheckoutSteps step1 step2 step3 step4 />
      <FormContainer>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          CheckResult{" "}
        </h1>

        <DropdownButton
          style={{ display: "flex", justifyContent: "center" }}
          id="dropdown-basic-button"
          title="Select Your Class"
        >
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">JSS1A</Dropdown.Item>
          </Link>
          <Link to="//JSS1Bresultlist">
            <Dropdown.Item href="#/action-2">JSS1B</Dropdown.Item>
          </Link>
          <Link to="/JSS1C">
            <Dropdown.Item href="#/action-3">JSS1C</Dropdown.Item>
          </Link>
          <Link to="/JSS2A">
            {" "}
            <Dropdown.Item href="#/action-3">JSS2A</Dropdown.Item>
          </Link>{" "}
          <Link to="/SS1">
            {" "}
            <Dropdown.Item href="#/action-3">SS1</Dropdown.Item>
          </Link>{" "}
        </DropdownButton>
        {/* <br />
        <hr />
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            font: "caption 20px",
          }}
        >
          Result Sort By Year{" "}
        </h2>
        <DropdownButton
          style={{ display: "flex", justifyContent: "center" }}
          id="dropdown-basic-button"
          title="Select Your Class"
        >
          {" "}
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",

                color: "blueviolet",
              }}
            >
              2019{" "}
            </Col>
            <Link to="/JSS1resultlist/year/:cat">
              {" "}
              <Dropdown.Item href="#/action-1">1st Term</Dropdown.Item>
            </Link>
            <Link to="/JSS1resultlist/year/:cat">
              {" "}
              <Dropdown.Item href="#/action-1">2nd Term</Dropdown.Item>
            </Link>
          </Row>
          <Link to="//JSS1Bresultlist">
            <Dropdown.Item href="#/action-2">2020</Dropdown.Item>
          </Link>
          <Link to="/JSS1C">
            <Dropdown.Item href="#/action-3">2021</Dropdown.Item>
          </Link>
          <Link to="/JSS2A">
            {" "}
            <Dropdown.Item href="#/action-3">2022</Dropdown.Item>
          </Link>{" "}
          <Link to="/SS1">
            {" "}
            <Dropdown.Item href="#/action-3">SS1</Dropdown.Item>
          </Link>{" "}
        </DropdownButton> */}
      </FormContainer>
    </div>
  );
};

export default CheckResult;
