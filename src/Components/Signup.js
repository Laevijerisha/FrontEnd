import React from 'react'
import { NavLink } from 'react-router-dom'
function Signup() {
    return (
        <div class='container'>
            <form>
            <h1 style={{display:'flex',justifyContent:'center'}}>Signup</h1>
            <hr></hr>
            <div className="form-floating ">
  <input type="text" class="form-control" id="username"  name="username"/>
  <label htmlFor="username">User Name</label>
</div>
<div className="form-floating ">
  <input type="email" class="form-control" id="email"  name="email"/>
  <label htmlFor="email">Email</label>
</div>

<div class="form-floating ">
  <input type="password" class="form-control" id="pwd"  name="pswd"/>
  <label htmlFor="pwd">Password</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="pwd"  name="pswd"/>
  <label htmlFor="pwd">Cpassword</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="location"  name="location"/>
  <label htmlFor="location">Location</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="phone"  name="phone"/>
  <label htmlFor="phone">Phone Number</label>
</div>
<button class="btn btn-primary">Submit</button>

</form>
{/* <NavLink></NavLink> */}
        </div>
    )
}

export default Signup
