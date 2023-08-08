import React from 'react'
import './App.css'
import ShowList from './ShowList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Outlet } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <ShowList>
          <Outlet></Outlet>

        </ShowList>
      </div>
    </BrowserRouter>
  )
}

export default App
