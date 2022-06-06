import React,{ useState } from "react"
import AdminList from "./AdminList"
import AdminShow from "./AdminShow"
const Admin = (props) => {
    return (
        <div className="row p-2">
        <div className="col-md-4"><AdminList/></div>
        <div className="col-md-8"><AdminShow/></div>
      </div>
    )
}
export default Admin