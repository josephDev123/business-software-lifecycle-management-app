import React from 'react';
import './component/app.css'
import Header from './component/Header';
import { useState, useRef } from 'react';
import Form from './component/Form';
import Board_wrapper from './component/Board_wrapper';
import Board from './component/Board';
import Card from './component/Card';
// import { label} from './component/data';


function App() {
    const [data, setData] = useState([{
          id:1,
          status:'backlog',
          title:'title 1',
          content:'lorem ipsum'
      },
      {
          id:2,
          status:'backlog',
          title:'title 2',
          content:'lorem ipsum'
      }
      ,{
        id:3,
        status:'progress',
        title:'title 3',
        content:'lorem ipsum'
    },
    {
        id:4,
        status:'progress',
        title:'title 4',
        content:'lorem ipsum'
    },


])
   return (
    <div className="container">
      <Header/>
      <Form />
      <Board_wrapper>
        <Board >
          <Card  item={data} />
        </Board >
      </Board_wrapper >
    </div>
  );
}

export default App;
