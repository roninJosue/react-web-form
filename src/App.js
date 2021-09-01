import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Grid, Paper} from "@material-ui/core";
import CustomSwitch from "./components/CustomSwitch";
import InputMask from "react-input-mask"
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [toggleDark, setToggleDark] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const theme = createTheme({
    palette: {
      type: toggleDark ? 'dark' : 'light'
    }
  })

  const handleDateChange = (date) =>{
    setSelectedDate(date)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={3} className={classes.paper}>
          <Typography component="h1" variant="h5">
            LLenar formulario
          </Typography>
          <form className={classes.form} >
            <TextField
              onBlur={(e) => {console.log(e.target.value)}}
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="names"
              label="Nombres"
              name="names"
              type="text"
              color={toggleDark?'secondary':'primary'}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Apellidos"
              name="lastname"
              type={"email"}
              color={toggleDark?'secondary':'primary'}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>

            <InputMask
              mask="(0)999 999 99 99"
              maskChar={" "}
            >
              {()=><TextField
                fullWidth
                label="Numero"
                margin="normal"
              />}
            </InputMask>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarse
            </Button>
            <Container>
              <Grid justifyContent={"flex-end"} alignItems={"center"}>
                Cambiar tema<CustomSwitch toggleDark={toggleDark} setToggleDark={setToggleDark} />
              </Grid>
            </Container>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}