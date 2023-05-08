
import React from "react"; 
import { useField,Form,Formik,Field } from "formik";

const RadioButton = ({label,...props})=>{

    const [field,meta] = useField(props)

    return(
        <>
        {
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (<div class="error">{meta.error}</div>) :null}
              
        </div>
        }
        </>
    )





}
export default RadioButton;



