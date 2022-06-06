import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
const ClientItem=(props)=>{
    const {client}=props
    return(
        <div className="job-box d-md-flex align-items-center justify-content-between border p-2">
        <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
            <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                    {client.firstName[0]}{client.lastName[0]}
                    </div>
                    <div className="job-content">
                        <h5 className="text-center text-md-left">{client.firstName} {client.lastName}</h5>
                        <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                        <div >
                           <li className="mr-md-4">
                                <i className="zmdi zmdi-time mr-2"> Id : {client.id}</i> 
                            </li>
                           </div>
                            <div>
                            <li className="mr-md-4">
                                <i className="zmdi zmdi-pin mr-2">First Name : {client.firstName}</i> 
                            </li>
                            </div>
                            <div>
                            <li className="mr-md-4">
                                <i className="zmdi zmdi-money mr-2"> Last Name :  {client.lastName} </i> 
                            </li>
                            </div>
                            <div>
                            <li className="mr-md-4">
                                <i className="zmdi zmdi-money mr-2"> Email :  {client.email} </i> 
                            </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="job-right my-4 flex-shrink-0">
                   <Link to={`/client/${client.id}`}><Button variant="outline-dark">Details</Button></Link>
                </div>
            </div>
    )
}
export default ClientItem