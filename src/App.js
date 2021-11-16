import React from 'react';
import './component/app.css'
import Header from './component/Header';
import { useState, useRef, useEffect } from 'react';
import Form from './component/Form';
import Boardwrapper from './component/Board_wrapper';
import Board from './component/Board';
import Card from './component/Card';
// import { label} from './component/data';
import {useSelector} from 'react-redux';
 

function App() {
 
let data = useSelector(state => state.post);

// console.log(data);
   return (
    <div className="container">
      <Header/>
      <Form />
      <Boardwrapper>
        <Board data={data}>
           <Card item={data} />
        </Board >
      </Boardwrapper >
    </div>
  );
}

export default App;



// Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
//     at removeChild