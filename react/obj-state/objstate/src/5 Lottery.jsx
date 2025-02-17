import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./4 helper";
import Ticket from "./2 Ticket";
import Button from "./3 Button";

export default function Lottery({n =3, winCondition}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  
  return(
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket}/>
      <Button action = {buyTicket} />
      <h3>{isWinning && "congratulation ,you won"} </h3>
    </div>
  );
}