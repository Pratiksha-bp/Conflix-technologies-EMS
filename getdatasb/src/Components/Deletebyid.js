import axios from "axios";
import { Formik, useFormik } from "formik";
import { useState } from "react";

function Deletebyid() {
  let userid = {
    id: "",
  };

  const { values, submitForm, handleChange, handleSubmit } = useFormik({
    initialValues: userid,
    onSubmit: (v) => {
      try {
        axios.delete("http://localhost:8080/Delete-by-id?id=" + v.id);
        alert("The user with id " + v.id + "is deleted successfully!");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <h4>Please enter the id of the user you want to delete:</h4>
        <input
          type="text"
          value={values.id}
          onChange={handleChange}
          name="id"
        />
        <button type="submit" class="btn btn-danger" onClick={submitForm}
        style={{marginLeft:"20px"}}>
          Delete
        </button>
      </form>
    </>
  );
}

export default Deletebyid;
