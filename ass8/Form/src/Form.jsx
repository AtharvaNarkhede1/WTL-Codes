import axios from "axios";
import {useState} from "react";
import styles from './Form.module.css';
function Form()
{

let reg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  let [form,setform]= useState({name:'',email:'',pass:'',cpass:''});
  let [error,seterror]=useState('');
   function event(){
   if(form.name="")
   {
       alert("Name field is Blanc!!");
   }
   else if(!reg.test(form.email.trim())){
alert("Make sure Email contains a valid format like example1@domain.com");
   }
   else if(form.pass!=form.cpass)
   {
    alert("Password not match!!");
   }
   else{
    alert("Register Successfully!!!");
   }

}
 return(
<>
<form className={styles.main}>
    <h1>Login</h1>
<label>Enter Name:</label>
<input id="name" type="text" value={form.name} onChange={(e)=>setform({...form,name:e.target.value})}/>

<label>Enter Email:</label>
<input id="email" type="text" value={form.email} onChange={(e)=>setform({...form,email:e.target.value})}/>
<label>Password:</label>
<input id="pass" type="password" value={form.pass}  onChange={(e)=>setform({...form,pass:e.target.value})} />
<label>Confirm Password:</label>
<input id="cpass" type="password" value={form.cpass}  onChange={(e)=>setform({...form,cpass:e.target.value})} />
<button onClick={()=>{event()}}>Submit</button>
</form>
</>
    )
}
export default Form;