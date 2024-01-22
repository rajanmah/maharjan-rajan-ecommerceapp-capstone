import {useState}  from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    //for user inputs
    const [userData, setUserData] = useState({
        username: '',
        password:'',
    })
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement authentication logic here
    console.log('Form submitted with:', userData);
    // Reset form fields after submission
    setUserData({
      username: '',
      password: '',
    });
  };
  const signupHandler = () => {
    navigate('/signup')
}

  return (
    <div>
    <div className="signin">
    <h2>Login</h2>
    <form onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          required
          value={userData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          required
          value={userData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    </div>
    <br />
    <button onClick={signupHandler} type="submit"> Not a Member? Create your account!!!</button>
  </div>
  )
}

export default Signin