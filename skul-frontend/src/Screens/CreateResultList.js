import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import FormContainer from "../Components/FormContainer";

const CreateResultList = () => {
  const id = useParams();

  return (
    <div
      style={{
        height: "60vh",
        border: "1px solid darkblue",
        borderRadius: "8px",
      }}
    >
      <FormContainer>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          ClassList{" "}
        </h1>
        <DropdownButton
          style={{ display: "flex", justifyContent: "center" }}
          id="dropdown-basic-button"
          title="Select Your Class"
        >
          <Link to={`/admin/jss1results/${id}/edit`}>
            {" "}
            <Dropdown.Item href="#/action-1">JSS1A</Dropdown.Item>
          </Link>
          <Link to="/JSS1Bresultlist">
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
      </FormContainer>
    </div>
  );
};

export default CreateResultList;
