// src/components/InputForm.js
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    projectTitle: "",
    branches: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextField
          name="projectTitle"
          label="Project Title"
          variant="outlined"
          fullWidth
          value={formData.projectTitle}
          onChange={handleChange}
        />
        <TextField
          name="teamsize"
          label="Required team size"
          variant="outlined"
          fullWidth
          helperText="e.g., 2,3,4"
          value={formData.branches}
          onChange={handleChange}
        />
        <TextField
          name="skills"
          label="Required Skills"
          variant="outlined"
          fullWidth
          helperText="e.g., React, Python, AI"
          value={formData.skills}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: "1rem" }}
        >
          Generate Team
        </Button>
      </Box>
    </form>
  );
}

export default InputForm;
