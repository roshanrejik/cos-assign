import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import AdminEditForm from "./AdminEditForm";
import { DeleteAdmin,GetUpdatedAdmins } from "../../services";
import { useDispatch } from "react-redux";
const AdminShowDetails=(props)=>{
    const {id}=props.match.params
    const [showAdmin,setShowAdmin]=useState('')
    
    useEffect(()=>{
        axios.get(`http://23.21.204.21:8080/api/v1/admins/${id}`,{headers: {
            'Authorization': `  ${localStorage.getItem('token')}`
          }})
        .then(res=>setShowAdmin(res.data))
        .catch(err=>console.log(err.message))
        
    },[id])
    const [EditForm,setEditForm]=useState(false)
    const handleEditForm=()=>{
        setEditForm(!EditForm)
    }
    const handleShowAdmin=async()=> {
         
           await axios.get(`http://23.21.204.21:8080/api/v1/admins/${id}`,{ headers: {
                'Authorization': `  ${localStorage.getItem('token')}`
                }}).then(res=>{ setShowAdmin(res.data) 
                    dispatch(GetUpdatedAdmins()) })
                .catch(err=>console.log(err.message))
         
    }
    const dispatch=useDispatch()
    const handleDelete=()=>{
        dispatch(DeleteAdmin(id))
        props.history.push('/admin')
    }
    return(
        showAdmin&& <div className="job-box text-center  justify-content-between m-5">
        <div className="job-left my-4   flex-wrap">
        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                    {showAdmin.firstName[0]}{showAdmin.lastName[0]}
        </div>
        <div className="job-content">
        <h3 className=" text-md-left">Name : {showAdmin.firstName} {showAdmin.lastName}</h3>
        <ul className=" flex-wrap text-capitalize ff-open-sans">
            <li className="mr-md-4">
                <i className="zmdi zmdi-pin mr-2">Email : {showAdmin.person.email}</i> 
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-money mr-2">Role : {showAdmin.person.role.name}</i> 
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-time mr-2"> Id : {showAdmin.id}</i>
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-time mr-2">Address 1 : {showAdmin.address.address1}</i> 
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-time mr-2"> Address 2 : {showAdmin.address.address2}</i>
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-time mr-2">City  : {showAdmin.address.city}</i> 
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-time mr-2">State : {showAdmin.address.state}</i> 
            </li>
            {EditForm&&<AdminEditForm initialValues={showAdmin} handleShowAdmin={handleShowAdmin} EditForm={EditForm} handleEditForm={handleEditForm}/>}
            <Button variant="outline-secondary" size="lg" className='m-5' onClick={handleEditForm}>Edit</Button>
            <Button variant="outline-danger" size="lg" className='m-5' onClick={handleDelete}>Delete</Button>
        </ul>
    </div>
    </div>
    </div>
    )
}
export default withRouter(AdminShowDetails)