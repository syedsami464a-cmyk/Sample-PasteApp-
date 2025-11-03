// import { createSlice } from "@reduxjs/toolkit"
// import { toast } from "react-hot-toast"

// const initialState = {
//   pastes: localStorage.getItem("pastes")
//     ? JSON.parse(localStorage.getItem("pastes"))
//     : []
// }

// const pasteSlice = createSlice({
//   name: "paste",
//   initialState,
//   reducers: {
//     addToPastes: (state, action) => {
//       const paste = action.payload
//       const index = state.pastes.findIndex((item) => item._id === paste._id)

//       if (index >= 0) {
//         // If the course is already in the Pastes, do not modify the quantity
//         toast.error("Paste already exist")
//         return
//       }
//       // If the course is not in the Pastes, add it to the Pastes
//       state.pastes.push(paste)
      
//       // Update to localstorage
//       localStorage.setItem("pastes", JSON.stringify(state.pastes))
//       // show toast
//       toast.success("Paste added")
//     },

//     updatePastes: (state, action) => {
//       const paste = action.payload
//       const index = state.pastes.findIndex((item) => item._id === paste._id)

//       if (index >= 0) {
//         // If the course is found in the Pastes, update it
//         state.pastes[index] = paste
//         // Update to localstorage
//         localStorage.setItem("pastes", JSON.stringify(state.pastes))
//         // show toast
//         toast.success("Paste updated")
//       }
//     },
//     removeFromPastes: (state, action) => {
//       const pasteId = action.payload

//       console.log(pasteId)
//       const index = state.pastes.findIndex((item) => item._id === pasteId)

//       if (index >= 0) {
//         // If the course is found in the Pastes, remove it
//         state.pastes.splice(index, 1)
//         // Update to localstorage
//         localStorage.setItem("pastes", JSON.stringify(state.pastes))
//         // show toast
//         toast.success("Paste deleted")
//       }
//     },
//     resetPaste: (state) => {
//       state.pastes = []
//       // Update to localstorage
//       localStorage.removeItem("pastes")
//     },
//   },
// })

// export const { addToPastes, removeFromPastes, updatePastes } = pasteSlice.actions

// export default pasteSlice.reducer











import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    // Key of the Local Storage is ''pastes''
    pastes :  
    // Conditional Operator if data present in LocalStorage then it is to JSON Format else empty list
    localStorage.getItem("pastes")? JSON.parse(localStorage.getItem("pastes")) : []
  }

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
  reducers: {

    addToPastes : (state,action) => {
      const paste = action.payload; // 'paste' content which present in Home.jsx , comes here 
      // And we can access it thorugh the help of action.payload -> then we can use that here also

      // add a Check -> Paste Already Exist wala Case


      state.pastes.push(paste);    // Stores in Centralized Store 
      // localStorage.setItem("key",JSON.stringify(value)); 
      localStorage.setItem("pastes",JSON.stringify(state.pastes)); // Stores in Local Storage
      // toast -> Download the package to use it easily
      toast.success("Paste Created Successfully!!")
    },
    UpdateToPastes : (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => 
      item._id === paste._id);

      if (index >= 0){

        // Updating the Paste in the Centralized Store and Local Store..
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Updated..")
      }
    },
    resetAllPastes : (state, action) => {
      state.pastes = []

      localStorage.removeItem("pastes")

    },
    removeFromPastes : (state , action) =>{
      const pasteId = action.payload;

      console.log(pasteId);
      const index = state.pastes.findIndex((item) =>
      item._id === pasteId);

      if (index >= 0){
        state.pastes.splice(index,1);

        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        
        toast.success("Paste deleted")
      }


    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, UpdateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer