import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { TextField } from "../../TextField";
import { useDispatch } from "react-redux";
import { AddAdmin } from "../../services";
const AdminForm = (props) => {
    const { showAdminForm, handleNewAdmin } = props
    const initialValues = {
        firstName: '',
        lastName: '',
        title: '',
        extension: '',
        primaryPhoneNumber: '',
        hours: '',
        hireDate: '',
        person: {
            email: '',
            secret: '',
            role: {
                id: '',
            },
        },
        address: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipCode: '',
        },
        practices: [{ id: '' }, { name: '' }]
    }
    const dispatch=useDispatch()
    const onSubmit = (formData) => {
        console.log(formData);
        dispatch(AddAdmin(formData))
        handleNewAdmin()
    }
    const validationSchema = Yup.object().shape(
       {
        firstName:Yup.string().required("First Name Required !"),
        lastName:Yup.string().required("First Name Required !"),
        person:Yup.object().shape({
            email:Yup.string().required("email is required"),
            secret:Yup.string().required('password required').min(8,'min * charater'),
            role:Yup.object().shape({
                id:Yup.string().required("Role Id Required")
            })
        })
       }
    )
    return (
        <div>
            <>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                </div>
                <Modal show={showAdminForm ? true : false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header>
                        <Modal.Title>Add Admin Details</Modal.Title>
                        <Modal.Title><img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png' style={{ 'width': '20px' }} onClick={handleNewAdmin} alt='close' /></Modal.Title>
                    </Modal.Header>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={onSubmit}>
                        {(props) => (
                            <Modal.Body>
                                <>

                                    <Form style={{ 'textAlign': 'center' }}>
                                        <div>
                                                <TextField label='Enter First Name' head='First Name *' name='firstName' type='text'/>
                                                <TextField label='Enter Last Name' head='Last Name *' name='lastName' type='text'/><br/><br />
                                                <TextField label='Enter Email' head='Email *' name='person.email' type='email'/>
                                                <TextField label='Enter Password' head='Password *'name="person.secret" type='password' /><br/><br />
                                                <TextField label='Enter Extension' head='Extension'name="extension" type='text' />
                                                <TextField label='Enter Phone Number' head='Phone Number'name="primaryPhoneNumber" type='text' /><br/><br />
                                                <TextField label='Enter Hours' head='Hours'name="hours" type='text' />
                                                <TextField label='Enter Address1' head='Address 1'name="address.address1" type='text' /><br/><br />
                                                <TextField label='Enter Address2' head='Address 2'name="address.address2" type='text' />
                                                <TextField label='Enter City' head='City'name="address.city" type='text' /><br/><br />
                                                <TextField label='Enter State' head='State'name="address.state" type='text' />
                                                <TextField label='Enter Hiring Date' head='Hiring Date'name="hireDate" type='date' />
                                        </div>
                                        <br />
                                        <div className="form-group d-inline">
                                        <label htmlFor="email" style={{ 'fontWeight': 'bold' }} className="m-2 p-2 d-inline">Role  <span style={{ color: 'red' }}>*</span> :</label>
                                            <Field as="select" className='form-control d-inline' style={{width:'200px'}} name="person.role.id">
                                                <option>-Select Role-</option>
                                                <option value="1">Admin</option>
                                                <option value="3">Affiliated Provider</option>
                                            </Field>
                                            <div style={{ color: 'red' }}>
                                                <ErrorMessage name="person.role.id"/>
                                            </div>
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
export default AdminForm