
import React from 'react';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormikForm.css'
import MyTextInput from './MyTextInput';
import MyCheckbox from './MyCheckbox';
import MySelect from './MySelect';
import Results from './Results';

const FormikForm= () => {
    return (
      <>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            Age:'',
            Password:'',
            conformPassword:'',
            acceptedTerms: false,
            jobType: '',
            picked:'',
            image:''
          }}
         
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
              Age:Yup.number()
              .min(1,"Age Must be > 1")
              .max(100,"Age Must be < 100")
              .required('Age is Required'),
              Password:Yup.string()
              .min(6,'Password Must be Greater then 6 Character')
              .max(15,'Password Must less then 15 Character')
              .required("Password is Required"),
              conformPassword:Yup.string()
              .oneOf([Yup.ref('Password'),null], "Password must Match")
              .required("Conform Password is Required"),
            acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string()
              .oneOf(
                ['designer', 'development', 'product', 'other'],
                'Invalid Job Type'
              )
              .required('Required'),
              picked:Yup.string()
              .required("Required"),
              image:Yup.mixed()
              .required("Required")
          })}
         onSubmit={(values, { setSubmitting }) => {
          console.log(values)
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              
            }, 400);
  
            Results.post('./marks.json',values).then(response=>{
              console.log(response)
            }).catch((error)=>{
               console.log(error)
            })
        
          }}
        >
          
      <div className="Contact-main">
          <Form>
          <div className="Contact-sec">
              <div className="Contact-form">
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
              id="firstName"
            />
             </div>
             <div className="Contact-form">
            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
              id="lastName"
            />
            </div>
            <div className="Contact-form">
            <MyTextInput
              label="Age"
              name="Age"
              type="number"
              id="Age"
            />
            </div>
            <div className="Contact-form">
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
              id="email"
            />
            </div>
            <div className="Contact-form">
            <MyTextInput
              label="Password"
              name="Password"
              type="Password"
              id="Password"
            />
            </div>
            <div className="Contact-form">
            <MyTextInput
              label="Conform Password"
              name="conformPassword"
              type="Password"
              id="conformPassword"
            />
            </div>
        
            <div className="Contact-form">
            <MySelect label="Job Type" name="jobType" id="colors">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect>
            </div>
            <div className="Contact-form MyCheckbox">   
            <MyCheckbox name="acceptedTerms" id="checkbox">
                I accept the terms and conditions
            </MyCheckbox>
            </div>
  
            <div className="Contact-form">   
            <div role="group" aria-labelledby="my-radio-group">
              <label>
              <div id="my-radio-group">Picked 1</div>
                <Field type="radio" name="picked" value="One" />
              </label>
              <label>
              <div id="my-radio-group">Picked 2</div>
                <Field type="radio" name="picked" value="Two" />
              </label>
             </div>
             <ErrorMessage component="div" className="error"  name="picked"/>
            </div>
  
            <div className="Contact-form">  
               <label htmlFor="image">Image File</label> 
               <Field type="file" name="image" />
               <ErrorMessage component="div" className="error"  name="image"/>
            </div>
  
          <div className='form-submit'>
            <div className="Contact-btn">
            <button type="submit">Submit</button>
            </div>
            <div className="Contact-btn-reset">
            <button type="reset">Reset</button>
            </div>
          <div>
              {/* <a href="">Other Page</a> */}
          </div>
            
        </div>
          </div>
          </Form>
      </div>
        </Formik>
      </>
    );
  };
  export default FormikForm;