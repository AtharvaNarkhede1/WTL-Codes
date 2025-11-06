import styles from './App.module.css'
import { useState } from "react";
import Count from "./Count";
function App()
{
  let [count2,setCount2]=useState(0);
  let [count1,setCount1]=useState(0);
  function resetall()
  {
setCount2(0);
setCount1(0);
  }
  return(
    <div className={styles.card}>
           <fieldset className={styles.main}><legend className={styles.heading}>Counter</legend>
      <Count count={count2} setCount={setCount2} />
      <Count count={count1} setCount={setCount1} />
      <button className={styles.res} onClick={resetall}>Reset</button>
      </fieldset>

    </div>

  )
}
export default App;
