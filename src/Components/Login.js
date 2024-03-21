import React from 'react'
import { NavLink } from 'react-router-dom'
function Login() {
    return (
        <div class='container'>
            <form>
            <h1 style={{display:'flex',justifyContent:'center'}}>Login</h1>
            <hr></hr>
            <div className="form-floating ">
  <input type="email" class="form-control" id="email"  name="email"/>
  <label htmlFor="email">Email</label>
</div>

<div class="form-floating ">
  <input type="password" class="form-control" id="pwd"  name="pswd"/>
  <label htmlFor="pwd">Password</label>
</div>
<div class="footer">
    
<button class="btn btn-primary">Login</button>
<NavLink to='/signup'style={{display:'flex',justifyContent:'flex-end'}}>Don't Have an account? Signup!</NavLink>
</div>
            </form>
            
        </div>
    )
}

export default Login
