import styles from './App.module.css'
function Count({count ,setCount})
{

function dec()
{
  if(count<=0)
  {
    alert("count is 0");
  }
  else{
  setCount(count-1);
  }
}
  function add()
  {
    setCount(count+1);
  }


  return (
    <div> 
      <div className={styles.abc}>  
           <h3>Value of count is:- {count}</h3>
      <button className={styles.inc} onClick={()=>{add()}}>increase</button>
      <button className={styles.dec} onClick={()=>{dec()}}>Decrease</button>
      </div>

    </div>
  )
}
export default Count;