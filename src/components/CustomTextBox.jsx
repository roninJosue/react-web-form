import React from "react";
import { TextField } from "@material-ui/core";

const CustomTextBox = (props) => {
  const { attr: {label, id, name, handleInput, type='text', errors, value} } = props
  return(
    <TextField
      value={value}
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