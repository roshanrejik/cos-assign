import React from "react";
import {ErrorMessage, useField } from "formik";
export const TextField=({label,...props})=>{
    const [field,meta]=useField(props)
    return(
        <div className="mb-2 d-inline" >
            <label htmlFor="firstName" style={{ 'fontWeight': 'bold' }} className="m-2 p-2 d-inline">{props.head} : </label>
            <input   className={` form-control d-inline shadow-none ${meta.touched&& meta.error && 'is-invalid'}`}
            style={{display:'inline',width:'200px'}}
            {...field}{...props}
            placeholder={label}/>
            <ErrorMessage name={field.name}>{msg => <span style={{color:'red'}} className='d-inline'>{}</span>}</ErrorMessage>
        </div>
    )
}