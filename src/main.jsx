// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { store } from './store/store.js'
// import { Provider } from 'react-redux'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//   <Provider store={store}>
//     < App/>
//   </Provider>
//   </>
// )
import ReactDOM from 'react-dom/client'
import './index.css'
import { weatherApi } from './api/weatherApi'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import Appi from './Appi'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <ApiProvider api={weatherApi}>
    < Appi/>
  </ApiProvider>
  </>
)
