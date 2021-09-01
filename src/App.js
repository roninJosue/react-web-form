import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Paper} from "@material-ui/core";
import MyForm from "./components/MyForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5)
  }
}));

export default function App() {
  const classes = useStyles();
  const [toggleDark, setToggleDark] = useState(false)
  const theme = createTheme({
    palette: {
      type: toggleDark ? 'dark' : 'light'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={3} className={classes.paper}>
          <Typography component="h1" variant="h5">
            LLenar formulario
          </Typography>
         <MyForm toggleDark={toggleDark} setToggleDark={setToggleDark} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}