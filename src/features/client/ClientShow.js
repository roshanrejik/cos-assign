import React,{useState } from "react"
import { Button } from "react-bootstrap"
import ClientForm from './ClientForm'
import ClientShowDetails from "./ClientShowDetails"
import { Route } from "react-router-dom"
const ClientShow = (props) => {   
     const [showClientForm,setShowClientForm]=useState(false)
    const handleNewClient=()=>{
        setShowClientForm(!showClientForm)
    }
    return (

         <div className="border rounded shadow" style={{ 'height': '86vh' }}>
             <div className="m-5">
             <Button style={{float:'right'}} variant="dark" onClick={handleNewClient}>+ New Client</Button>
             </div>
                    <br />
                    <Route path='/client/:id' exact><ClientShowDetails handleNewClient={handleNewClient}/></Route>
                    {showClientForm&&<ClientForm showClientForm={showClientForm} handleNewClient={handleNewClient}/>}
        </div>
    )
}
export default ClientShow