import React, { useState } from 'react';
import { CssBaseline, Container, Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InputForm from './components/InputForm';
import ResultsPage from './components/ResultsPage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [projectData, setProjectData] = useState(null);

  const handleFormSubmit = (data) => {
    const mockResult = {
      title: "SkillSync: Optimal Group Formation For College Projects",
      team: [
        { branch: "CSE", student: "Student A" },
        { branch: "ECE", student: "Student B" },
        { branch: "Civil", student: "Student C" },
      ],
    };
    setProjectData(mockResult);
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SkillSync: Optimal Group Formation For College Projects
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
          
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ paddingTop: '2rem' }}>
        <Routes>
          <Route
            path="/"
            element={
              !projectData ? (
                <InputForm onSubmit={handleFormSubmit} />
              ) : (
                <ResultsPage projectData={projectData} />
              )
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
