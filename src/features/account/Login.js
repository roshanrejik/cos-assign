import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetAccountToken } from "../../services";
import { Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup'
const Login = (props) => {
    const dispatch=useDispatch()
    const initialValues={email: 'fetrain@gmail.com', password: 'Testing!@34' }
    const onSubmit=(formData)=>{
       dispatch(GetAccountToken(formData))
    }
    const validationSchema=Yup.object({
         email:Yup.string().email("invalied Email").required("Required"),
         password: Yup.string().required("Required")
    })
    const {error}=useSelector(state=>state.account)
    return (
        <div>
            <>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                </div>
                <Modal show={true} >
                    <Modal.Header>
                        <Modal.Title>Login Form</Modal.Title>
                    </Modal.Header>
                                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                    {(props) => (
                                        <Modal.Body>
                                        <>
                                          
                                            <Form style={{'textAlign':'center'}}>
                                                <div className="form-group">
                                                    <label htmlFor="email" style={{'fontWeight':'bold'}} className="m-2 p-2">Email  </label>
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter email"
                                                        autoComplete="off"
                                                    />
                                                    <div style={{ color: 'red' }}>
                                                        <ErrorMessage name="email" />
                                                    </div>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="password" style={{'fontWeight':'bold'}} className="m-2 p-1">
                                                        Password
                                                    </label>
                                                    <Field
                                                        type="password"
                                                        name="password"
                                                        placeholder="Enter Password"
                                                    />
                                                    <div style={{ color: 'red' }}>
                                                        <ErrorMessage name="password" />
                                                    </div>
                                                    <span style={{color:'red'}}>{error}</span>
                                                </div>
                                               <button
                                                    type="submit"
                                                    className="btn btn-primary btn-block mt-4"
                                                >
                                                    Submit
                                                </button>
                                            </Form>
                                        </>
                                        </Modal.Body>
                                    )}
                                </Formik>
                </Modal>
            </>
        </div>
    )
}
export default Login