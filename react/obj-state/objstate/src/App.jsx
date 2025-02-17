import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './6 LudoBoard'
import TodoList from "./7 TodoList";
import Lottery from "./5 Lottery"
import TicketNum from "./1 TicketNum";
import {sum } from "./4 helper";



function App() {
//   let winCondition = (ticket) =>{
//     // return ticket.every((num) => num === ticket[0]) ;// all digit same
//     return ticket[0] ===0 ;
//   }
 
  
  // return (
//     <>
//     <Lottery n={3} winCondition = {winCondition} />
//       {/* <TicketNum num ={[4]}/> */}
//       {/* <TicketNum num ={3}/>
//       <TicketNum num ={9}/> */}
//     </>
 return (<TodoList />
// return (<LudoBoard />
  )
}

export default App;
