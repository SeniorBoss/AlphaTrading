// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store  from './store.js'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ToastContainer } from 'react-toastify'


const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <ToastContainer />
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
  </Provider>,
)