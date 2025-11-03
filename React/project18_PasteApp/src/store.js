// import {configureStore} from "@reduxjs/toolkit"
// import pasteReducer from "./redux/pasteSlice"

// export const store = configureStore({
//   reducer:{
//       paste: pasteReducer
//   }
// })



import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/PasteSlice'

export default configureStore({
  reducer: {
    paste: pasteReducer,
  }
})