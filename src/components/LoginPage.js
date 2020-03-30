import React from 'react'
import {withFormik, Form, Field} from 'formik';
import {Button} from "reactstrap";

const LoginPage = () => {

    const cheeseToken = () => localStorage.setItem("token", "token");

    return (
        <Form>
            <h5>Login</h5>
            <Field name="email" type="email" placeholder="Email"></Field><br/>
            <Field name="password" type="password" placeholder="Password"></Field><br/>
            <Button color="info" size="sm">Submit</Button>
            <Button type="button" size="sm" color="danger" onClick={cheeseToken}>Dev: Get Token</Button>
        </Form>
    )
}

const FormikLoginPage = withFormik({})(LoginPage)

export default FormikLoginPage
