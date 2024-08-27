import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/signup', formData);
      console.log('Signup successful:', response.data);
      setSignupSuccess(true); // Show success message
      setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
    } catch (error) {
      console.error('Signup failed:', error);
      setSignupSuccess(false); // Hide success message if an error occurs
    }
  };

  return (
    <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      {signupSuccess && (
        <Alert severity="success" sx={{ marginBottom: '1rem' }}>
          Signup successful! Please log in.
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Signup
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default SignupForm;
