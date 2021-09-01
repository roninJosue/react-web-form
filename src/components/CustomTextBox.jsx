import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text:  {
    marginBottom: '10rem',
    fontSize: '6rem'
  }
}));

const CustomTextBox = (props) => {
  const { attr: {label, id, name, handleInput, type='text', errors} } = props
  return(
    <TextField
      onBlur={handleInput}
      onChange={handleInput}
      variant="standard"
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      type={type}
      error={errors[name]}
      {...(errors[name] && {
        error: true,
        helperText: errors[name]
      })}
    />
  )
}

export default CustomTextBox