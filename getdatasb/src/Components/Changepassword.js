import axios from "axios";
import { Formik, useFormik } from "formik";
import { useState } from "react";

function Changepassword() {
  let user={
    user_name:"",
    user_id:"",
    user_email:"",
    user_password:"",
    user_mobile:"",
  };

  const { values, handleChange, handleSubmit, submitForm, errors,touched } = useFormik({
    initialValues: user,
    onSubmit: (PP) => {
        try{
            axios.put("http://localhost:8080/update-user-names-with-object",PP);
            document.write(
                "<h1>Password changed of the user</h1>"+
                "<h1>"+PP.user_name+"</h1>"+"<h1>successfully!</h1>"
            );
        }catch(error){
            console.log(error.data);
        }
    },
  });

  return (
    <>
      <form style={{ textAlign: "center" ,height:"593px"}} onSubmit={handleSubmit}>
        <h3>User name:</h3>
        {touched.user_name && errors.user_name && (
          <div className="error">
            <h3 style={{ color: "red" }}>{errors.user_name}</h3>
          </div>
        )}
        <input
          type="text"
          name="user_name"
          value={values.user_name}
          onChange={handleChange}
        />

        <h3>User ID:</h3>
        {touched.user_id && errors.user_id && (
          <div className="error">
            <h3 style={{ color: "red" }}>{errors.user_id}</h3>
          </div>
        )}
        <input
          type="text"
          name="user_id"
          value={values.user_id}
          onChange={handleChange}
        />

        <h3>User email:</h3>
        {touched.user_email && errors.user_email && (
          <div className="error">
            <h3 style={{ color: "red" }}>{errors.user_email}</h3>
          </div>
        )}
        <input
          type="text"
          name="user_email"
          value={values.user_email}
          onChange={handleChange}
        />

        <h3>User password:</h3>
        {touched.user_password && errors.user_password && (
          <div className="error">
            <h3 style={{ color: "red" }}>{errors.user_password}</h3>
          </div>
        )}
        <input
          type="password"
          name="user_password"
          value={values.user_password}
          onChange={handleChange}
        />

        <h3>User mobile:</h3>
        {touched.user_mobile && errors.user_mobile && (
          <div className="error">
            <h3 style={{ color: "red" }}>{errors.user_mobile}</h3>
          </div>
        )}
        <input
          type="text"
          name="user_mobile"
          value={values.user_mobile}
          onChange={handleChange}
        />

        <br></br>
        <br></br>
        <button type="submit" 
        onClick={submitForm}
        class="btn btn-success"
        style={{marginLeft:"20px"}}>
          Change Password
        </button>
      </form>
    </>
  );
   
}

export default Changepassword;
