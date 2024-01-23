// import {useState} from 'react'

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         address: '',
//         phonenumber: '',

//       });

//       // Handle form field changes
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//       };

//       // Handle form submission
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         // You can perform form submission logic here
//         console.log('Form submitted with data:', formData);
//       };

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           name="username"
//           required
//           value={formData.username}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           required
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           name="password"
//           required
//           value={formData.password}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Address:
//         <input
//           type="text"
//           name="address"
//           required
//           value={formData.address}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Phone:
//         <input
//           type="number"
//           maxLength={10}
//           name="phonenumber"
//           required
//           value={formData.phonenumber}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Sign Up</button>
//     </form>

//     </div>
//   )
// }

// export default Signup


import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/users/signup", { email, password })
        .then(res => {
          if (res.data == "exist") {
            alert("User already exists")
          }
          else if (res.data == "notexist") {
            navigate("/dommy", { state: { id: email } })
          }
        })
        .catch(e => {
          alert("wrong details")
          console.log(e);
        })

    }
    catch (e) {
      console.log(e);

    }

  }

  <input type="password" name="password" autocomplete="on"></input>

  return (
    <div className="signup">

      <h1>Signup</h1>

      <form action="POST">
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
        <input type="password" name="password" autoComplete="on" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        <input type="submit" onClick={submit} />

      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/signin">Signin Page</Link>

    </div>
  )
}

export default Signup