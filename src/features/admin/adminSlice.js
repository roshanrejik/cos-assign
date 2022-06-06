import { createSlice } from "@reduxjs/toolkit";
import {GetAllAdmins,AddAdmin,UpdateAdmin, DeleteAdmin,GetUpdatedAdmins,GetAdminsByName} from '../../services'
import swal from 'sweetalert';


export const adminSlice=createSlice({
    name:'admin',
    initialState:{admins:[],loading:false,error:null},
    extraReducers:{
        [GetAllAdmins.fulfilled]:(state,action)=>{
            if(action.payload.data.length>1)
            {
                state.admins=state.admins.concat(action.payload.data)
            }
            else{
                console.log('not found');
            }
        },
        [GetAllAdmins.rejected]:(state)=>{console.log('not found');},
        [GetAdminsByName.fulfilled]:(state,action)=>{
            state.admins=action.payload.data
        },
        [GetAdminsByName.rejected]:(state)=>{console.log('not found');},
        [GetUpdatedAdmins.fulfilled]:(state,action)=>{
                state.admins=[...action.payload.data]
        },
        [GetUpdatedAdmins.rejected]:(state)=>{console.log('not found');},
        [AddAdmin.fulfilled]:(state,action)=>{
            state.admins.unshift(action.payload)
        },
        [AddAdmin.rejected]:(state)=>{console.log('not Added');},
        [UpdateAdmin.fulfilled]:(state, action) => {
            swal("Admin Updated!", "You clicked the button!", "success"); 
          },
        [UpdateAdmin.rejected]:(state)=>{console.log('not Updated');},
        [DeleteAdmin.fulfilled]:(state, action) => {
            swal("Admin Deleted!", "You clicked the button!", "success");  
            state.admins=state.admins.filter(admin=>{return admin.id!=action.payload})
          },
        [DeleteAdmin.rejected]:(state)=>{console.log('not deleted');}
    }
})
export default adminSlice.reducer