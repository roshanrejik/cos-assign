import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
const BASE_URL="http://23.21.204.21/api/v1"

//Account--------------------------------------------------------------------------------------
export const GetAccountToken=createAsyncThunk(
    "post/getAccountToken",
    async (formData)=>(await (await axios.post(`${BASE_URL}/auth/login`,formData)).data)
)
//Admin------------------------------------------------------------------------------------------
export const GetAdminsByName=createAsyncThunk(
    "get/getAllAdminbyName",
    async (filterBy)=>(await (await axios.get(`${BASE_URL}/admins`,{params: {page:0,limit:10,name:filterBy},headers: {
        'Authorization': `  ${localStorage.getItem('token')}`
      }})).data))
export const GetAllAdmins=createAsyncThunk(
        "get/getAllAdmin",
        async (page)=>(await (await axios.get(`${BASE_URL}/admins`,{ params: {page:page?page:0,limit:10},headers: {
            'Authorization': `  ${localStorage.getItem('token')}`
          }})).data))
export const GetUpdatedAdmins=createAsyncThunk(
    "get/getUpdatedAdmins",
    async (page)=>(await (await axios.get(`${BASE_URL}/admins`,{ params: {page:page?page:0,limit:10},headers: {
        'Authorization': `  ${localStorage.getItem('token')}`
        }})).data))
export const AddAdmin=createAsyncThunk(
"post/postAddAdmin",
async (formData)=>(await (await axios.post(`${BASE_URL}/admins`,formData,{ headers: {
    'Authorization': `  ${localStorage.getItem('token')}`
    }})).data))

export const UpdateAdmin=createAsyncThunk(
    "put/putUpdateAdmin",
    async ({id,formData,handleShowAdmin})=>(await (await axios.put(`http://23.21.204.21/api/v1/admins/${id}`,formData,{ headers: {
        'Authorization': `  ${localStorage.getItem('token')}`
        }}).then(res=>{
            handleShowAdmin()
              return {id,formData}}))))
export const DeleteAdmin=createAsyncThunk(
    "delete/deleteAdmin",
    async (id)=>(await (await axios.delete(`${BASE_URL}/admins/${id}`,{ headers: {
        'Authorization': `  ${localStorage.getItem('token')}`
    }}).then(res=>{return id}))))

//Client------------------------------------------------------------------------------------------
export const GetAllClients=createAsyncThunk(
    "get/getAllClient",
    async (page)=>(await (await axios.get(`${BASE_URL}/clients`,{ params: {page:page?page:0,limit:10},headers: {
        'Authorization': `  ${localStorage.getItem('token')}`
      }})).data))

export const AddClient=createAsyncThunk(
"post/postAddClient",
async (formData)=>(await (await axios.post(`${BASE_URL}/clients`,formData,{ headers: {
    'Authorization': `  ${localStorage.getItem('token')}`
    }})).data))

export const UpdateClient=createAsyncThunk(
    "put/puttUpdateClient",
    async ({id,formData})=>(await (await axios.put(`http://23.21.204.21/api/v1/clients/${id}`,formData,{ headers: {
        'Authorization': `  ${localStorage.getItem('token')}`
        }}).then(res=>{return {id,formData}}))))
export const DeleteClient=createAsyncThunk(
    "delete/deleteAdmin",
    async (id)=>(await (await axios.delete(`${BASE_URL}/clients/${id}`,{ headers: {
        'Authorization': `  ${localStorage.getItem('token')}`
    }}).then(res=>{return id}))))