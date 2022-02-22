import { Container, LinearProgress, Paper, Typography } from '@material-ui/core';
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Tasks from './containers/Tasks';

function App() {
  const isLoading = useSelector((state) => state.task.loading);
  return (
    <div className="App">
      <Container maxWidth="md">
        <Typography variant="h3">To-Do App</Typography>
        <Paper style={{ padding: 20 }}>
          <Form />
        </Paper>
        {isLoading ? <LinearProgress /> : <Tasks />}
      </Container>
    </div>
  );
}

export default App;
