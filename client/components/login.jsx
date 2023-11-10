import React from 'react'

export default function Login() {
  return (
    <>
    <div className="title">
        <h1>facebook</h1>
        <h3>Facebook helps you connect and share<br/>with the people in your life.</h3>
    </div>
    <div className="container">
        <form action="#link">
            <input type="text" name="Mailph" id="mailph" placeholder="Email address or phone number" autofocus />
            <input type="password" name="password" id="pwd" placeholder="Password" /> 
            <input type="submit" value="Log in" id="login" />
            <h4><a href="#link">Forgetten password?</a></h4>
            <hr/>
            <a href="#link"><button>Create New Account</button></a>
        </form>
        <h5><b><a href="#link">Create a Page</a></b> for a celebrity, band or business</h5>
    </div>
    </>
  )
}

