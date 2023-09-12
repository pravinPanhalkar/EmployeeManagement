import TextField from "@mui/material/TextField";
import React, { forwardRef } from "react";

const FormInput = forwardRef<Ref, Props>((props, ref) => (
  <TextField
    ref={ref}
    // id={}
    label={props.label}
    type={props.type}
    variant="standard"
    style={{ width: "100%" }}
  />
));

export default FormInput;
