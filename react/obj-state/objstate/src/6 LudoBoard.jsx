import { useState } from "react"

export default function LudoBoard() {
  let [moves, setMoves]= useState({blue:0, red:0, yellow:0, green:0});
  // let [blueMove, setBlueMove]= useState(0);
  // let [blueMove, setBlueMove]= useState(0);
  // let [blueMove, setBlueMove]= useState(0);

  let updateBlue= ()=>{
    // moves.blue += 1;
    // console.log(`moves.blue = ${moves.blue}`);
    setMoves((prevMoves)=>{
      return { ...prevMoves, blue: prevMoves.blue+1};
      //The spread operator (...) takes all the key-value pairs from the prevMoves object and includes them in the new object being created.The blue property is updated, while the rest remain unchanged.
      //also rerender in webpage by {...moves}
    }); 
  };

  let updateYellow= ()=>{
    // moves.blue += 1;
    // console.log(`moves.blue = ${moves.blue}`);
    setMoves((prevMoves)=>{
      return { ...prevMoves, yellow: prevMoves.yellow+1};
      //also rerender in webpage by spread  {...moves}
    }); 
  };

  let updateGreen= ()=>{
    // moves.blue += 1;
    // console.log(`moves.green = ${moves.green}`);
    setMoves((prevMoves)=>{
      return { ...prevMoves, green: prevMoves.green+1};
      //also rerender in webpage by {...moves}
    }); 
  };

  let updateRed= ()=>{
    // moves.blue += 1;
    // console.log(`moves.red = ${moves.red}`);
    setMoves((prevMoves)=>{
      return { ...prevMoves, red: prevMoves.red+1};
      //also rerender in webpage by {...moves}
    }); 
  };
  return(
    <div>
      <p>Game Begins</p>
      <div className="board">
        <p>Blue Moves= {moves.blue} </p>
        <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
        <p>Yellow Moves= {moves.yellow} </p>
        <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
        <p>Green Moves={moves.green}</p>
        <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        <p>Red Moves={moves.red}</p>
        <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
      </div>
      </div>
  )
}