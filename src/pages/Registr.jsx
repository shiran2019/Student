import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function StdReg() {
  const navigate = useNavigate();

    const initialValues ={
        studentId:"",
        fName:"",
        lName:"",
        gender:"",
        address:"",
        
    }
    const onSubmit =(data) =>{
        //console.log(data);
        axios.post("http://localhost:3001/students", data).then((response) => {
          navigate('/');
    });

    }
  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <label>studentId: </label>
          <Field id="inputCreatePost" name="studentId" placeholder="(Ex. 0001)" />
          <label>fName: </label>
          <Field id="inputCreatePost" name="fName" placeholder="(Ex. postText)" />
          <label> lName: </label>
          <Field id="inputCreatePost" name="lName" placeholder="(Ex. uname)" />
          <label> gender: </label>
          <Field id="inputCreatePost" name="gender" placeholder="(Ex. Title)" />
          <label>address: </label>
          <Field id="inputCreatePost" name="address" placeholder="(Ex. postText)" />
        
          <button type="submit"> Create Posts</button>
        </Form>
      </Formik>
    </div>
  );
}
