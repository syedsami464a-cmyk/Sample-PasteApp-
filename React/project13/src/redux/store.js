import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
})


// import {configureStore,createSlice} from '@reduxjs/toolkit'
// import CounterReducer from '../features/counter/CounterSlice'
// import { Provider } from 'react-redux'

// export const store = ConfigureStore({
//     reducer : {
//         counter : CounterReducer,
//     },
// })

