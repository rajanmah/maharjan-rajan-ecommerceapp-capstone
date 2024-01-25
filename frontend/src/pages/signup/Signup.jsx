import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './signup.css'


const Signup=()=> {
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
            navigate("/", { state: { id: email } })
          }
        })
        .catch(error => {
          alert("Type valid email and password.")
          console.log(error);
        })
    }
    catch (error) {
     console.log(error);
    }
  }

  return (
    <div className="signup">
      <h1>Signup</h1>
<div className="form_body">
      <form action="POST">
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" /> <br/><br/>
        <input type="password" name="password" autoComplete="on" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /> <br/><br/>
        <input type="text"  placeholder="Address" /> <br/><br/>
        <input type="number"  placeholder="Phone Number" /> <br/><br/>
        <input type="submit" style={{ backgroundColor: "rgb(9, 9, 160)", color:"white"}}  onClick={submit} />
      </form>

      <br />
     <h5>Click here to <Link to="/signin" style={{textDecoration:"none"}}>Sign in</Link></h5>
      </div>
    </div>
  )
}

export default Signup