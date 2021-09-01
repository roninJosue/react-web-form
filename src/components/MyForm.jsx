import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InputMask from "react-input-mask";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Modal} from "@material-ui/core";
import CustomSwitch from "./CustomSwitch";
import {makeStyles} from "@material-ui/core/styles";
import CustomTextBox from "./CustomTextBox";
import {useForm} from "../util/validation";

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const MyForm = (props) => {
  const {toggleDark, setToggleDark} = props
  const classes = useStyles()
  const {handleInput, validForm, errors, handleSubmit, handleDateChange, values, setValues} = useForm();

  const handleClose = () => {
    setValues({
      ...values,
      success: false
    })
  }

  return (
    <form noValidate className={classes.form} onSubmit={handleSubmit}>
      <CustomTextBox attr={{label: "Nombres", name: "name", id: "name", handleInput: handleInput, errors:errors}}/>
      <CustomTextBox attr={{label: "Apellidos", name: "lastname", id: "lastname", handleInput: handleInput, errors:errors}}/>
      <CustomTextBox attr={{label: "Correo", name: "email", id: "email", handleInput: handleInput, type: "email", errors:errors}}/>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          fullWidth
          margin="normal"
          id="birthdate"
          name="birthdate"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>

      <InputMask
        mask="(+505) 9999 9999"
        maskChar={"#"}
        onBlur={handleInput}
        onChange={handleInput}
      >
        {() => <TextField
          fullWidth
          label="Teléfono"
          margin="normal"
          variant="standard"
          required
          id={"phone"}
          name={"phone"}
          {...(errors['phone'] && {
            error: true,
            helperText: errors['phone']
          })}
        />}
      </InputMask>

      <Button
        disabled={!validForm()}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Registrarse
      </Button>
      <Dialog
        open={values.success}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Container>
        <Grid>
          Cambiar tema<CustomSwitch toggleDark={toggleDark} setToggleDark={setToggleDark}/>
        </Grid>
      </Container>
    </form>
  )
}

export default MyForm