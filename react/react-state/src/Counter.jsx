import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    // setCount(count+1);
    // setCount(count+1);it not work
    setCount((currCount)=>{
      return currCount +1;
    });
    setCount((currCount)=>{
      return currCount +1;
    });

    // console.log(count);
  };
  return (
    <div>
      <h3>Count = {count} </h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );

  // let count = 0;

  // function incCount() {
  //   count +=1 ;
  //   console.log(count);
  // }

  // return(
  //   <div>
  //     <h3>Count = {count}</h3>
  //     <button onClick={incCount}> Increased count</button>
  //   </div>
  // );
}

// In React, state is an object that holds data or information about the component. State determines how the component behaves and renders. When the state changes, the component re-renders to reflect the new state. 