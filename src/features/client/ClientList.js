import React,{ useEffect, useState,useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetAllClients, GetClientsByName } from "../../services"
import ClientItem from "./ClientItem"
import {Form,FormControl} from 'react-bootstrap' 
const ClientList = (props) => {
    const listInnerRef = useRef();
    const [page,setPage]=useState(0)
    const onScroll = () => {
      if (listInnerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
        if (scrollTop + clientHeight +2 > scrollHeight) {
          console.log("reached bottom",page);
         setPage(page+1)
        }
      }
    };
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllClients(page))
    }, [page])
    const {clients}=useSelector(state=>state.client)
    const [searchKey,setSearchKey]=useState('')
    const handleSearch=(e)=>{
            dispatch(GetClientsByName(e.target.value.toLowerCase()))
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
                clients.filter(client=>client.firstName.toLowerCase().includes(searchKey)).map((client,i) => <ClientItem client={client}  key={i} />)
            }
        </div>
    )
}
export default ClientList



  


