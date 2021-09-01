import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text:  {
    marginBottom: '10rem',
    fontSize: '6rem'
  }
}));

const CustomTextBox = (props) => {
  const classes = useStyles();
  const { label } = props
  return(
    <TextField classes={classes.text}  label={label} />
  )
}

export default CustomTextBox