import { useState } from 'react';
import './App.css';

import axios from 'axios';

function App() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://myregisterappbackend.onrender.com/register', form);
      alert('Registered successfully!');
      setForm({ name: '', email: '', password: '' });
    } catch (err) {
      alert('Error registering user');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br /><br />
        <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
