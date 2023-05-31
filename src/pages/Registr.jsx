import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default function StdReg() {
  const navigate = useNavigate();

  const initialValues = {
    studentId: "",
    fName: "",
    lName: "",
    gender: "",
    address: "",
    birthday: "",
    nation: "",
    religion: "",
  };

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/students", data)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const labelStyle = {
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "10px",
    marginBottom: "20px",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const formStyle = {
    // maxWidth: "50%",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    background: "#fff",
  };
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="createPostPage" style={buttonContainerStyle}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Row>
          <Col xs={12} lg={7} >
            <Form style={formStyle}>
              <center>
                <h2 style={{ color: "#5b5ea6" }}>REGISTRATION FORM</h2>
              </center>

              <label style={labelStyle}>Student ID:</label>
              <Field
                id="inputCreatePost"
                name="studentId"
                placeholder="(Ex. 0001)"
                style={inputStyle}
              />

              <label style={labelStyle}>First Name:</label>
              <Field
                id="inputCreatePost"
                name="fName"
                placeholder="(Ex. Savindu)"
                style={inputStyle}
              />

              <label style={labelStyle}>Last Name:</label>
              <Field
                id="inputCreatePost"
                name="lName"
                placeholder="(Ex. Pathiraja)"
                style={inputStyle}
              />

              <label style={labelStyle}>Address:</label>
              <Field
                id="inputCreatePost"
                name="address"
                placeholder="(Ex. 123 Street, City)"
                style={inputStyle}
              />

              <Row>
                <Col xs={12} lg={6}>
                  <label style={labelStyle}>Birthday:</label>
                  <Field
                    id="inputCreatePost"
                    name="birthday"
                    type="date"
                    style={inputStyle}
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <label style={labelStyle}>Gender:</label>
                  <Field
                    id="inputCreatePost"
                    name="gender"
                    placeholder="(Ex. Male/Female)"
                    style={inputStyle}
                  />
                </Col>
              </Row>

              <Row>
                <Col xs={12} lg={6}>
                  <label style={labelStyle}>Nationality:</label>
                  <Field
                    id="inputCreatePost"
                    name="nation"
                    placeholder="(Ex. Sinhala/Tamil)"
                    style={inputStyle}
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <label style={labelStyle}>Religion:</label>
                  <Field
                    id="inputCreatePost"
                    name="religion"
                    placeholder="(Ex. Christianity/Buddhist)"
                    style={inputStyle}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={6}>
                <button type="submit" style={buttonStyle}>
                  Register
                </button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Formik>
    </div>
  );
}
