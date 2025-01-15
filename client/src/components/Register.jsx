import React, { Fragment, useState } from "react";
import { registerUser } from "../services/api";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(formData);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button type="submit">Register</button>
      </form>
    </Fragment>
  );
}

// Login.jsx

// import React from 'react'

// export default function Login() {
//   return (
//     <>
//     <div className="title">
//         <h1>facebook</h1>
//         <h3>Facebook helps you connect and share<br/>with the people in your life.</h3>
//     </div>
//     <div className="container">
//         <form action="#link">
//             <input type="text" name="Mailph" id="mailph" placeholder="Email address or phone number" autofocus />
//             <input type="password" name="password" id="pwd" placeholder="Password" />
//             <input type="submit" value="Log in" id="login" />
//             <h4><a href="#link">Forgetten password?</a></h4>
//             <hr/>
//             <a href="#link"><button>Create New Account</button></a>
//         </form>
//         <h5><b><a href="#link">Create a Page</a></b> for a celebrity, band or business</h5>
//     </div>
//     </>
//   )
// }
