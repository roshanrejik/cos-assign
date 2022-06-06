import React,{ useState } from "react"
import ClientList from "./ClientList"
import ClientShow from "./ClientShow"
const Client = (props) => {
    return (
        <div className="row p-2">
        <div className="col-md-4"><ClientList/></div>
        <div className="col-md-8"><ClientShow/></div>
      </div>
    )
}
export default Client