import axios from "axios";


function App(){

  async function fetchdata(){
    let res=await axios({
      method:"GET",
      url:"https://jsonplaceholder.typicode.com/todos",
    });
    console.log("data",res.data);
  }
  return(
    <>
    <button onClick={()=>{fetchdata()}}>Fetch</button>
    </>
  )
}
export default App;