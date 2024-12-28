import React, { useState } from "react";
//import validator from "validator";

export const Login = () => {
    const [e_error, e_setError] = useState("");
    const [p_error, p_setError] = useState("");
    

    function genericValidation(value,regex,id,failMessage,successMessage = ""){
        console.log(value, "value")
        console.log(regex, "regex")
        console.log(id, "id")
        console.log(failMessage, "fail")
        console.log(successMessage, "success")
        if(id === "userEmail"){
            if(regex.test(value,id,failMessage,successMessage)){
                e_setError("Valid")
           }
           else{
               e_setError("Invalid")
           }
        }
        if(id === "userPhone"){
            if(regex.test(value,regex,id,failMessage,successMessage)){
                p_setError("Valid")
           }
           else{
               p_setError("Invalid")
           }
        }
        
    }
      function validateEmail(event){
        console.log(event.target.value);
        genericValidation(event.target.value, /^([a-zA-Z0-9_.±]+)@([a-zA-Z0-9-]+)$/,"userEmail","", "")
      }
      function validatePhone(event){
        console.log(event.target.value);
        genericValidation(event.target.value, /^[0-9]{10}$/,"userPhone","", "")
      }
    
    
  return (
    <>
    <div className='form-group'>
        <label htmlFor="">User ID</label>
        <input  id="userEmail" className='form-control' type="text" placeholder='Enter Your Email' onChange={(event) => validateEmail(event)}/>
    </div>
    <span
            style={{
                    color: "red"
                    }}
                >
                    {e_error}
                </span><br /><br />

   <div className='form-group'>
    <label htmlFor="">Phone Number</label>
    <input  id="userPhone" className='form-control' type="text" placeholder='Enter Your Phone' onChange={(event) => validatePhone(event)}/>
   </div>
   <span
            style={{
                    color: "green"
                    }}
                >
                    {p_error}
                </span><br /><br />

    

    <div className='form-group'>
    <label htmlFor="">Password</label>
    <input id="password" className='form-control' type="password" placeholder='Enter Your Password' />
   </div> <br />
    </>

  )
}
