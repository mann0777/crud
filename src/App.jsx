import React from "react";
import { useState } from "react";

const App=()=>{
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[address, setAddress] = useState("");

  const[users, setUsers] = useState([]);

  const addUser=(e)=>{
    e.preventDefault();
    const user={
      name,
      email,
      address
    };
    setUsers([...users, user]);
    setName("")
    setEmail("")
    setAddress("")

  };
return(
<>
<div className="App">
      <h1>React CRUD App</h1>
      <div className ="container">
      <div className="row justify-content-center" >
      <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5"> 
      <form onSubmit={addUser}>
      <div className='form-group'>
        <label htmlFor="">Name</label>
        <input type="text" className= "form-control" value={name} onChange={(e)=>setName(e.target.value) }/>
      </div>
      <div className='form-group'>
        <label htmlFor="">Email</label>
        <input type="email" className= "form-control" value={email} onChange={(e)=>setEmail(e.target.value) }/>
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

      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>

          </tr>
        </thead>

        <tbody>
          {
            users.map(user =>{
              return(
                <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <button className="btn btn-info">Edit</button>
                </td>
                <td>
                <button className="btn btn-danger">Delete</button>
                </td>
                </tr>
                
               
                
              )
            })
          }
              
            

            
          
        </tbody>
      </table>

      
    </div>
</>
)
};

export default App;
