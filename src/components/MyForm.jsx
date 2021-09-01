import React from "react";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InputMask from "react-input-mask";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CustomSwitch from "./CustomSwitch";
import {makeStyles} from "@material-ui/core/styles";
import CustomTextBox from "./CustomTextBox";
import {useForm} from "../util/validation";
import MyDialog from "./MyDialog";
import {Grid} from "@material-ui/core";

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
  const {handleInput,
    validForm,
    errors,
    handleSubmit,
    handleDateChange,
    values,
    handleClose} = useForm();

  return (
    <form noValidate className={classes.form} onSubmit={handleSubmit}>
      <CustomTextBox attr={{label: "Nombres", name: "name", id: "name", handleInput: handleInput, errors:errors, value:values.name}}/>
      <CustomTextBox attr={{label: "Apellidos", name: "lastname", id: "lastname", handleInput: handleInput, errors:errors, value:values.lastname}}/>
      <CustomTextBox attr={{label: "Correo", name: "email", id: "email", handleInput: handleInput, type: "email", errors:errors, value:values.email}}/>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          fullWidth
          margin="normal"
          id="birthdate"
          name="birthdate"
          label="Fecha de nacimiento"
          format="MM/dd/yyyy"
          value={values.birthdate}
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
        value={values.phone}
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
      <MyDialog success={values.open} handleClose={handleClose} />
      <Container>
        <Grid>
          Cambiar tema<CustomSwitch toggleDark={toggleDark} setToggleDark={setToggleDark}/>
        </Grid>
      </Container>
    </form>
  )
}

export default MyForm