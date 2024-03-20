import React from 'react'

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
<div class="form-floating ">
<button class="btn btn-primary">Login</button>
</div>
            </form>
            
        </div>
    )
}

export default Login
