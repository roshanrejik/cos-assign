import React,{useState } from "react"
import { Button } from "react-bootstrap"
import AdminForm from './AdminForm'
import AdminShowDetails from "./AdminShowDetails"
import { Route } from "react-router-dom"
const AdminShow = (props) => {   
     const [showAdminForm,setShowAdminForm]=useState(false)
    const handleNewAdmin=()=>{
        setShowAdminForm(!showAdminForm)
    }
    return (

         <div className="border rounded shadow" style={{ 'height': '86vh' }}>
             <div className="m-5">
             <Button style={{float:'right'}} variant="dark" onClick={handleNewAdmin}>+ New Admin</Button>
             </div>
            <br />
            <Route path='/admin/:id' exact><AdminShowDetails handleNewAdmin={handleNewAdmin}/></Route>
            {showAdminForm&&<AdminForm showAdminForm={showAdminForm} handleNewAdmin={handleNewAdmin}/>}
        </div>
    )
}
export default AdminShow