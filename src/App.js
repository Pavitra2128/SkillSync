// src/App.js
import React, { useState } from "react";
import { CssBaseline, Container, Typography } from "@mui/material";
import InputForm from "./InputForm";
import ResultsPage from "./ResultsPage";

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
    <>
      <CssBaseline />
      <Container maxWidth="md" style={{ paddingTop: "2rem" }}>
        <Typography variant="h3" align="center" gutterBottom>
          Project Team Optimizer
        </Typography>
        {!projectData ? (
          <InputForm onSubmit={handleFormSubmit} />
        ) : (
          <ResultsPage projectData={projectData} />
        )}
      </Container>
    </>
  );
}

export default App;
