import TextField from "@mui/material/TextField";
import React, { forwardRef } from "react";

const FormInput = forwardRef<Props, ref>((props, innerRef) => (
  <TextField
    ref={innerRef}
    // id={}
    label={props.label}
    type={props.type}
    variant="standard"
    onChange={props.onChange}
    style={{ width: "100%" }}
  />
));

export default FormInput;
