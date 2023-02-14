import React from 'react'
import App from './App'
import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header.component';
import Contact from './pages/contact.page';
import Tools from './pages/tools.page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<App />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/tools' element={<Tools />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
