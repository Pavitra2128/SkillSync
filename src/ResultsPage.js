// src/components/ResultsPage.js
import React from "react";
import { Box, Paper, Typography, List, ListItem, ListItemText, Button } from "@mui/material";

function ResultsPage({ projectData }) {
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Paper elevation={3} sx={{ padding: "1.5rem" }}>
        <Typography variant="h5" gutterBottom>
          {projectData.title}
        </Typography>
        <List>
          {projectData.team.map((member, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${member.student} from ${member.branch}`} />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: "1rem" }}
          onClick={() => window.location.reload()}
        >
          Start Over
        </Button>
      </Paper>
    </Box>
  );
}

export default ResultsPage;
