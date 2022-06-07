import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
const AdminItem=(props)=>{
    const {admin}=props
    return(
        <div className="job-box d-md-flex align-items-center justify-content-between border p-2">
        <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
            <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                    {admin.firstName[0]}{admin.lastName[0]}
                    </div>
                    <div className="job-content">
                        <h5 className="text-center text-md-left">{admin.firstName} {admin.lastName}</h5>
                        {/* <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                        <div >
                           <li className="mr-md-4">
                                <i className="zmdi zmdi-time mr-2"> Id : {admin.id}</i> 
                            </li>
                           </div>
                            <div>
                            <li className="mr-md-4">
                                <i className="zmdi zmdi-pin mr-2">First Name : {admin.firstName}</i> 
                            </li>
                            </div>
                          
                        </ul> */}
                    </div>
                </div>
                <div className="job-right my-4 flex-shrink-0">
                   <Link to={`/admin/${admin.id}`}><Button variant="outline-dark">Details</Button></Link>
                </div>
            </div>
    )
}
export default AdminItem