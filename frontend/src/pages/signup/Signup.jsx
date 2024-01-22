import {useState} from 'react'

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        phonenumber: '',

      });
    
      // Handle form field changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form submission logic here
        console.log('Form submitted with data:', formData);
      };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          required
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="number"
          maxLength={10}
          name="phonenumber"
          required
          value={formData.phonenumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>

    </div>
  )
}

export default Signup