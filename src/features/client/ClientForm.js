import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { TextField } from "../../TextField";
import { useDispatch } from "react-redux";
import { AddClient } from "../../services";
const ClientForm = (props) => {
    const { showClientForm, handleNewClient } = props
    const initialValues = {
        "firstName": "",
        "lastName":"",
        "email": "",
        "gender": "",
        "clientFlag": false,
        "emailOptingIn": true,
        "primaryPhoneNumber": "",
        "secondaryPhoneNumber": "",
        "guardian": "",
        "emergencyContactNumber": "",
        "emergencyContactName": "",
        "dob": "",
        "note": "",
        "billingNote": "",
        "insurance": null,
        "insurancePolicyNumber": "",
        "insuranceGroupNumber": "",
        "insuredRelationship": "Self",
        "insuredFirstName": "",
        "insuredLastName": "",
        "insuredDob": "",
        "activeFlag": true,
        "createUser": "",
        "address": {
          "address1": "",
          "address2": "",
          "city": "",
          "state": "TX",
          "zipCode": "75001"
        },
        "clinicians": [
          {
            "id": 84,
            "firstName": "Maria",
            "lastName": "Garcia",
            "activeFlag": true,
            "acceptingNewPatientFlag": true,
            "label": "Garcia, Maria",
            "value": 84
          }
        ],
        "location": {
          "id": 3,
          "name": "CoStrategix Testing Practice",
          "code": "CT",
          "address": {
            "id": 745,
            "address1": "",
            "address2": "",
            "state": "",
            "city": "",
            "zipCode": ""
          },
          "label": "CoStrategix Testing Practice",
          "value": 3
        }
      }
    const dispatch=useDispatch()
    const onSubmit = (formData) => {
        console.log(formData);
        dispatch(AddClient(formData))
        handleNewClient()
    }
    const validationSchema = Yup.object().shape(
       {
        firstName:Yup.string().required("First Name Required !"),
        lastName:Yup.string().required("First Name Required !"),
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
                <Modal show={showClientForm ? true : false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header>
                        <Modal.Title>Add Client Details</Modal.Title>
                        <Modal.Title><img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png' style={{ 'width': '20px' }} onClick={handleNewClient} alt='close' /></Modal.Title>
                    </Modal.Header>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={onSubmit}>
                        {(props) => (
                            <Modal.Body>
                                <>

                                    <Form style={{ 'textAlign': 'center' }}>
                                        <div>
                                                <TextField label='Enter First Name' head='First Name *' name='firstName' type='text'/>
                                                <TextField label='Enter Last Name' head='Last Name *' name='lastName' type='text'/><br/><br />
                                                <TextField label='Enter Email' head='Email *' name='email' type='email'/>
                                                <TextField label='Enter Gender' head='Gender *'name="gender" type='text' /><br/><br />
                                                <TextField label='Enter Phone Number' head='Phone Number'name="primaryPhoneNumber" type='text' />
                                                <TextField label='Enter Address1' head='Address 1'name="address.address1" type='text' /><br/><br />
                                                <TextField label='Enter Address2' head='Address 2'name="address.address2" type='text' />
                                                <TextField label='Enter City' head='City'name="address.city" type='text' /><br/><br />
                                                <TextField label='Enter State' head='State'name="address.state" type='text' />
                                                <TextField label='Enter Date of Birth' head='Date of Birth'name="dob" type='date' />
                                        </div>
                                        <br />
                                       
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
export default ClientForm