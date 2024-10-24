import { Formik, useFormik } from "formik";
import { createContext, useState } from "react";


import Consume8 from "./Consume8";
import axios from "axios";

function UserName(){
    
    let[data,setdata]=useState([]);

    let uname={
        name:"",
    };

    function demo(v){
        let str="";
        let str2=str.concat(v);
        for(let v=0;v<str2.length;v++){
            str=str+"*";
        }
        return str;
    }

    const{handleChange,handleSubmit,values,submitForm}=useFormik({
        initialValues:uname,
        onSubmit:(v)=>{
            axios.get("http://localhost:8080/Get-user-by-name?name="+v.name)
            .then((response)=>{
                setdata(response.data);
            });
        },
    });

    return(
        <>
        <form onSubmit={handleSubmit}>
        <h3>Please enter the name of the user to find out from database:</h3>
        <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}

        />
        <button
        type="submit"
        onClick={submitForm}
        class="btn btn-success"
        style={{marginLeft:"20px"}}>
            Find
        </button>

       
        </form>
        <div style={{textAlign:"center"}}>
            <h1 style={{backgroundColor:"grey"}}>The data of user ::{data.user_name}</h1>
            <h1>user-name:{data.user_name}</h1>
            <h1>user-id:{data.user_id}</h1>
            <h1>user-email:{data.user_email}</h1>
            <h1>user-mobile:{data.user_mobile}</h1>
            <h1>user-password:{demo(data.user_password)}</h1>

        </div>
        </>
    )

}

export default UserName;