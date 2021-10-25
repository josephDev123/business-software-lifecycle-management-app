import React from 'react';
import './component/app.css'
import Header from './component/Header';
import { useState, useRef } from 'react';
import Form from './component/Form'
// import { label} from './component/data';


function App() {
   return (
    <div className="container">
      <Header/>
      <Form />
    </div>
  );
}

export default App;
