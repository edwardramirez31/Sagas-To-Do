import { Container, LinearProgress, Paper, Typography } from '@material-ui/core';
import { getTasksLoading } from 'app/selectors/tasks';
import { useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Tasks from './containers/Tasks';

const App = (): JSX.Element => {
  const isLoading = useSelector(getTasksLoading);
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
};

export default App;
