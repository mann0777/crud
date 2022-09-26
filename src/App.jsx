import React from "react";
import { useState } from "react";

const App=()=>{
  const[name, setName] = useState("");
  const[email, setemail] = useState("");
  const[address, setAddress] = useState("");
return(
<>
<div className="App">
      <h1>React CRUD App</h1>
      <div className ="container">
      <div className="row justify-content-center" >
      <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5"> 
      <form>
      <div className='form-group'>
        <label htmlFor="">Name</label>
        <input type="text" className= "form-control" value={name} onChange={(e)=>setName(e.target.value) }/>
      </div>
      <div className='form-group'>
        <label htmlFor="">Email</label>
        <input type="email" className= "form-control" value={email} onChange={(e)=>setemail(e.target.value) }/>
      </div>
      <div className='form-group'>
        <label htmlFor="">Address</label>
        <input type="text" className= "form-control" value={address} onChange={(e)=>setAddress(e.target.value) }/>
      </div>
      <button className="btn btn-success form-control">Add</button>
      </form>
      </div>
      </div>
      </div>
      
    </div>
</>
)
};

export default App;
