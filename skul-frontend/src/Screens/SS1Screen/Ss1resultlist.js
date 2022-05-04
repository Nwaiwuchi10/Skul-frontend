import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from "react-bootstrap";

// import Paginate from "../Components/Paginate";

import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";

import { Link } from "react-router-dom";

const Ss1resultlist = () => {
  // const { id } = useParams();
  const [dj, setDj] = useState([]);

  useEffect(() => {
    const { data } = axios.get("/api/ss1results").then((response) => {
      if (!response.data.hasError) {
        setDj(response.data.ss1results);
        console.log(response.data);
        // localStorage.setItem("id", data._id);
        localStorage.setItem("ss1result", JSON.stringify(response.data));
      }
    });
  }, []);

  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h1>SS1 ClassList</h1>
        </Col>
      </Row>

      <>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>NAME</th>
              <th>Registration NUMBER</th>
              <th>Class</th>
              <th>Option</th>

              <th>Term</th>
              <th>Year</th>

              {/* <th></th> */}
            </tr>
          </thead>

          <tbody>
            {dj.map((producter) => (
              <tr key={producter._id}>
                <Link to={`/ss1results/${producter._id}`}>
                  {" "}
                  <td>{producter.name}</td>{" "}
                </Link>{" "}
                <td> {producter.registrationNumber}</td>
                <td> {producter.classes}</td>
                <td> {producter.option}</td>
                <td> {producter.term}</td>
                <td> {producter.year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
      </>
    </Container>
  );
};

export default Ss1resultlist;
