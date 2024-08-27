import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from an API
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/user'); // Adjust API endpoint as needed
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login');
  };

  return (
    <Box sx={{ marginTop: '2rem' }}>
      <Paper elevation={3} sx={{ padding: '1.5rem' }}>
        <Typography variant="h5" gutterBottom>
          User Dashboard
        </Typography>
        {userData ? (
          <Box>
            <Typography variant="h6">Name: {userData.name}</Typography>
            <Typography variant="body1">Email: {userData.email}</Typography>
            <Typography variant="body1">Joined: {userData.joinedDate}</Typography>
            {/* Add more user details here as needed */}
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: '1rem' }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Typography>Loading user data...</Typography>
        )}
      </Paper>
    </Box>
  );
}

export default DashboardPage;
