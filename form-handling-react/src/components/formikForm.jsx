// src/components/formikForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("User Registered:", values);
    alert("User registered successfully!");
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Username:</label>
          <Field name="username" type="text" placeholder="Username" />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <label>Email:</label>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <label>Password:</label>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
