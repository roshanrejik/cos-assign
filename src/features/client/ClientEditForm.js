import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { TextField } from "../../TextField";
import { useDispatch } from "react-redux";
import { UpdateClient } from "../../services";
import { withRouter } from "react-router-dom";
const ClientEditForm = (props) => {
    const { initialValues,EditForm, handleEditForm,handleShowClient } = props
    const {id}=props.match.params
    const dispatch=useDispatch()
    const validationSchema = Yup.object().shape({
		firstName: Yup.string().required("*First Name is required!"),
		lastName: Yup.string().required("*Last Name is required!"),
		gender: Yup.string().required("*Gender is required!"),
		dob: Yup.string().required("*Date of birth is required!"),
		primaryPhoneNumber: Yup.string().required("*Phone number is required!"),
		address: Yup.object().shape({
			address1: Yup.string().required("*Address line 1 is required!"),
			address2: Yup.string().required("*Address line 2 is required!"),
			city: Yup.string().required("*City is required!"),
			state: Yup.string().required("*State is required!"),
			zipCode: Yup.string().required("*Zip code is required!"),
		}),
		activeFlag: Yup.string().required("*Status is required!"),
	});
    const onSubmit = (formData) => {
        dispatch(UpdateClient({id,formData,handleShowClient}))
        handleEditForm()
    }
    // Object.keys(initialValues).forEach(function(key) {
    //     if(initialValues[key] === null) {
    //         initialValues[key] = 'Y';
    //     }
    // })
    return (
        <div>
            <>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                </div>
                <Modal show={EditForm ? true : false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header>
                        <Modal.Title>Edit Client Details</Modal.Title>
                        <Modal.Title><img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png' style={{ 'width': '20px' }} onClick={handleEditForm} alt='close' /></Modal.Title>
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
                                             <TextField label='Enter Primary Number' head='Primary Number'name="primaryPhoneNumber" type='text' />
                                             <TextField label='Enter Address1' head='Address 1'name="address.address1" type='text' /><br/><br />
                                             <TextField label='Enter Address2' head='Address 2'name="address.address2" type='text' />
                                             <TextField label='Enter City' head='City'name="address.city" type='text' /><br/><br />
                                             <TextField label='Enter State' head='State'name="address.state" type='text' />
                                             <TextField label='Enter ZipCode' head='ZipCode'name="address.zipCode" type='text' />   <br/><br />                     
                                             <TextField label='Enter Date of Birth' head='Date of Birth'name="dob" type='date' />                                            
                                             <TextField label='Enter Guardian' head='Guardian'name="guardian" type='text' /><br/><br />
                                             <TextField label='Enter Emergency Contact Number' head='Emergency Contact Number'name="emergencyContactNumber" type='text' />
                                             <TextField label='Enter Note' head='Note'name="note" type='textarea' /><br/><br />
                                             <TextField label='Insurance Company Name' head=' Company Name'name="insuredFirstName" type='text' />
                                             <TextField label='Enter Insureds Relationship' head=' Relationship'name="insuredRelationship" type='text' /><br/><br />
                                             <TextField label='Enter Insurance Policy Number' head=' Policy Number'name="insurancePolicyNumber" type='text' />
                                             <TextField label='Enter Insurance Group Number' head=' Group Number'name="insuranceGroupNumber" type='text' /><br/><br />
                                             {/* <div className="form-check form-switch">
                                             <p className="form-label d-inline text-secondary"> Flag</p>
                                             <Field
                                                 type="checkbox"
                                                 name="clientFlag"
                                                 className="form-check-input d-inline"
                                             />{" "}
                                            </div> */}
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
export default withRouter(ClientEditForm)