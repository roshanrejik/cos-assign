import React,{ useEffect, useState,useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetAdminsByName, GetAllAdmins } from "../../services"
import AdminItem from "./AdminItem"
import {Form,FormControl} from 'react-bootstrap' 
const AdminList = (props) => {
    const listInnerRef = useRef();
    const [page,setPage]=useState(0)


//scrolling page increment
    const onScroll = () => {
      if (listInnerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
        if (scrollTop + clientHeight+1> scrollHeight) {
          console.log("reached bottom",page);
         setPage(page+1)
        }
      }
    };
    const dispatch = useDispatch()

//on every page increment dispatch action 
    useEffect(() => {
            dispatch(GetAllAdmins(page))
    }, [page])


    const {admins}=useSelector(state=>state.admin)
    const [searchKey,setSearchKey]=useState('')
    const handleSearch=(e)=>{
        dispatch(GetAdminsByName(e.target.value.toLowerCase()))
        setSearchKey(e.target.value.toLowerCase())    
    }
    return (
        <div className="border rounded shadow"  onScroll={onScroll} ref={listInnerRef} style={{'height': '88vh', overflowY: "auto"}} >
            <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        value={searchKey}
                                        onChange={handleSearch}
                                    />
                                </Form>
            {
                admins.map((admin,i) => <AdminItem admin={admin}  key={i} />)
            }
        </div>
    )
}
export default AdminList



  


