import { createSlice } from "@reduxjs/toolkit";
import {GetAllClients,AddClient,UpdateClient, DeleteClient,GetClientsByName,GetUpdatedClients} from '../../services'
import swal from 'sweetalert';
export const clientSlice=createSlice({
    name:'client',
    initialState:{clients:[],loading:false,error:null},
    extraReducers:{
        [GetClientsByName.fulfilled]:(state,action)=>{
            state.clients=action.payload.data
        },
        [GetClientsByName.rejected]:(state)=>{console.log('not found');},
        [GetUpdatedClients.fulfilled]:(state,action)=>{
            state.clients=[...action.payload.data]
        },
        [GetUpdatedClients.rejected]:(state)=>{console.log('not found');},

        [GetAllClients.fulfilled]:(state,action)=>{
            state.clients.push(...action.payload.data)
        },
        [GetAllClients.rejected]:(state)=>{console.log('not found');},
    
        [AddClient.fulfilled]:(state,action)=>{
            state.clients.unshift(action.payload)
        },
        [AddClient.rejected]:(state)=>{console.log('not Added');},
        [UpdateClient.fulfilled]:(state, action) => {
            swal("Client Updated!", "You clicked the button!", "success"); 
          },
        [UpdateClient.rejected]:(state)=>{console.log('not Updated');},
        [DeleteClient.fulfilled]:(state, action) => {
            swal("Client Deleted!", "You clicked the button!", "success");  
            state.clients=state.clients.filter(client=>{return client.id!=action.payload})
          },
        [DeleteClient.rejected]:(state)=>{console.log('not deleted');}
    }
})
export default clientSlice.reducer