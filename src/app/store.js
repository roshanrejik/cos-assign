import { configureStore } from "@reduxjs/toolkit";
import  accountSlice  from "../features/account/accountSlice";
import adminSlice from "../features/admin/adminSlice";
import clientSlice from "../features/client/clientSlice";
export default configureStore({
    reducer:{
        account:accountSlice,
        admin:adminSlice,
        client:clientSlice,
    },
});