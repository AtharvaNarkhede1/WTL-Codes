// task 2
// function Department({namedept,intake})
// {
//     return (
//         <div>
//             <h2>Name:-{namedept}</h2>
//             <p>Intake:-{intake}</p>
//         </div>
//     )

// }
// export default Department;

// task 3

// function Department({arr})
// {
//     return( 
//         <div>
//             {arr.map((x)=><h3>{x}</h3>)}
//         </div>
//     )
// }
// export default Department;

// task 5
// import { useState } from "react";
// function Department()
// {
//   let [count,setcount]=useState(0);  //return the array
// function dec()
// {
//   setcount(count-1);
// }
//   function add()
//   {
//     setcount(count+1);
//   }

//   return (
//     <div> 
//       <h3>Value of count is:- {count}</h3>
//       <button onClick={()=>{add()}}>increase</button>
//       <button onClick={()=>{dec()}}>Decrease</button>
//     </div>
//   )
// }
// export default Department;

function Department(props)
{
    return(
        <>
        <h2>Department:-{props.name}</h2>
        <h2>intake:-{props.intake}</h2>
        </>
    )
}
export defualt Department;