import React from "react";
import {Switch} from "@material-ui/core";

const CustomSwitch = (props) => {
  const {toggleDark, setToggleDark} = props

  const handleModeChange = () =>{
    setToggleDark(!toggleDark)
  }

  return (
    <Switch
      checked={toggleDark}
      onChange={handleModeChange}
      name={"toggleDark"}
      color={"default"}
    />
  )
}

export default CustomSwitch