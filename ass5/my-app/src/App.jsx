// task 1
// // import Comp from "./Comp"
// import Mech from "./Mech"

import { useState } from "react";

// function App(){

//   return (
//       <div>
//     <h1>Welcome to React page!!</h1>
//     <Comp/>
//     <Mech/>
//   </div>
//   )

// }

// export default App;


// task 2
// import Department from "./Department";
// function App()
// {
//   return(
//     <div>
//       <h2>Welcome React Page!!</h2>
//       <Department namedept={"Computer"} intake={121} />
//       <Department namedept={"Mechanical"} intake={60} />
//     </div>
//   )
// }
// export default App;

// task 3

// import Department from "./Department";
// function App()
// {
//   return(
//     <div>
//       <h2>Welcome React Page!!</h2>
//       <Department arr={["Computer","Mechanical","Civil"]}/>
//     </div>
//   )
// }
// export default App;

// task 4

// function App()
// {
//   function myfun()
//   {
//     alert("Hi");
//   }
//   return(
//     <div>
//       <button onClick={myfun}>Click</button>
//     </div>
//   )
// }
// export default App;

// task 5
// import Department from "./Department";
// function App()
// {
//   return(
//     <div>
//       <h2>Counter!!</h2>
//       <Department/>
//       <Department/>
//     </div>
//   )
// }
// export default App;

// task 6

// add number in the arr
// function App()
// {
//   let [count,setcount]=useState(30);
//   let [arr,setarr]=useState([10,20,30])
//   function add()
//   {
// setcount(count+10);
// setarr([...arr,count+10]);
//   }
//   return(
//     <>
//     {arr.map((x)=> <h4>{x}</h4>)}
//     <button onClick={()=>{add()}}>Add</button>
//     </>
//   )
// }
// export default App;
import Department from "react";
function App()
{
    return(
        <>
        <h1>Department</h1>
        <Department name={Computer} intake={120}/>
        <Department name={mechanical} intake={60}/>
        </>
    )
}
export default App;