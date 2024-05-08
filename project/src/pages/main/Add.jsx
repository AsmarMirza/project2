import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
function Add() {
    const navigate =useNavigate()

  async function addEmployee(values) {
    const res = await fetch("http://localhost:3000/employes2", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    });
    const data = await res.json();
    navigate("/admin")
  }
  return (
    <div>
      <Formik
        initialValues={{ image: "", name: "", job: "" }}
        validationSchema={Yup.object({
          image: Yup.string()
            .max(150, "Must be 15 characters or less")
            .required("Required"),
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          job: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          addEmployee(values);
        }}
      >
        <Form>
          <label htmlFor="image">image </label>
          <br />
          <Field name="image" type="text" />
          <br />
          <ErrorMessage name="image" />

          <label htmlFor="name"> Name</label>
          <br />
          <Field name="name" type="text" />
          <br />
          <ErrorMessage name="name" />

          <label htmlFor="job">job </label>
          <br />
          <Field name="job" type="job" />
          <br />
          <ErrorMessage name="job" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Add;
