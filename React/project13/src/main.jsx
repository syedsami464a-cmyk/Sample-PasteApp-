import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import { store } from './redux/store.js' 
import './index.css'
import App from './App.jsx'

// // debug logs to help diagnose Provider/store runtime issues
// console.log('main.jsx loaded - store:', store)

// // Expose store for quick browser inspection and validate
// try {
//   // attach for manual inspection in DevTools
//   if (typeof window !== 'undefined') window.__STORE__ = store
//   if (!store || typeof store.dispatch !== 'function') {
//     console.error('Invalid Redux store detected before Provider mount:', store)
//   }
// } catch (err) {
//   console.error('Error while validating store in main.jsx', err)
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
)
