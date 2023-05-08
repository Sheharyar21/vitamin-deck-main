import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import Results from './Results';
import * as Yup from 'yup';
// import {baseUrl} from './Shared/baseUrl'

const PictureExample = () =>{


  let PostPictureUrl = ()=>{

    let http = new XMLHttpRequest;

    let url = "http://127.0.0.1:8000/api/products/";
    let Method = "POST"

    http.open(Method,url)

    http.onreadystatechange = function(){

        if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
            console.log(JSON.parse(http.response));
          
        }else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200){
            console.log("Error")
        }
    }


}
  return(
  <div>
    
    <Formik
    initialValues={{
      Photo1:''
    }}
    onSubmit={(values)=>{
      console.log(values)

      Results.post('./marks.json',values).then(response=>{
        console.log(response)
      })
      let data = new FormData()

      data.append('Photo1',values.Photo1)

    return fetch(Results,
      {method:"POST",headers:new Headers({Accept:'application/json'}),body:data})
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then((error) => console.log(error));
    }}
    >
        <Form>
          <Field type="file"  name="Photo1" />
          <button type="submit">Submit</button>
        </Form>
  
      
    </Formik>
  </div>
)};
export default PictureExample;
