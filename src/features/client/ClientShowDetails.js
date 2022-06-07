import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import ClientEditForm from "./ClientEditForm";
import { DeleteClient,GetUpdatedClients} from "../../services";
import { useDispatch } from "react-redux";
const ClientShowDetails=(props)=>{
    const {id}=props.match.params
    const [showClient,setShowClient]=useState('')
    
    useEffect(()=>{
        axios.get(`http://23.21.204.21:8080/api/v1/clients/${id}`,{headers: {
            'Authorization': `  ${localStorage.getItem('token')}`
          }})
        .then(res=>setShowClient(res.data))
        .catch(err=>console.log(err.message))
        
    },[id])
    const [EditForm,setEditForm]=useState(false)
    const handleEditForm=()=>{
        setEditForm(!EditForm)
    }
    const handleShowClient=async()=> {
         
        await axios.get(`http://23.21.204.21:8080/api/v1/clients/${id}`,{ headers: {
             'Authorization': `  ${localStorage.getItem('token')}`
             }}).then(res=>{ setShowClient(res.data) 
                 dispatch(GetUpdatedClients()) })
             .catch(err=>console.log(err.message))
      
 }
    const dispatch=useDispatch()
    const handleDelete=()=>{
        dispatch(DeleteClient(id))
        props.history.push('/client')
    }
    return(
        showClient&& <div className="job-box text-center  justify-content-between m-5">
        <div className="job-left my-4   flex-wrap">
        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                    {showClient.firstName[0]}{showClient.lastName[0]}
        </div>
        <div className="job-content">
        <h3 className=" text-md-left">Name : {showClient.firstName} {showClient.lastName}</h3>
        <ul className=" flex-wrap text-capitalize ff-open-sans">
            <li className="mr-md-4">
                <i className="zmdi zmdi-pin mr-2">Email : {showClient.email}</i> 
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-money mr-2">Gender : {showClient.gender}</i> 
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-time mr-2"> Id : {showClient.id}</i>
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-time mr-2">Address 1 : {showClient.address.address1}</i> 
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-time mr-2"> Address 2 : {showClient.address.address2}</i>
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-time mr-2">City  : {showClient.address.city}</i> 
            </li>
            <li className="mr-md-4">
                <i className="zmdi zmdi-time mr-2">State : {showClient.address.state}</i> 
            </li>
            {EditForm&&<ClientEditForm initialValues={showClient} handleShowClient={handleShowClient} EditForm={EditForm} handleEditForm={handleEditForm}/>}
            <Button variant="outline-secondary" size="lg" className='m-5' onClick={handleEditForm}>Edit</Button>
            <Button variant="outline-danger" size="lg" className='m-5' onClick={handleDelete}>Delete</Button>
        </ul>
    </div>
    </div>
    </div>
    )
}
export default withRouter(ClientShowDetails)