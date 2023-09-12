import { Add } from "@mui/icons-material";
import Button from "@mui/material/Button";
import * as React from "react";

const EmpBtn = React.forwardRef<Ref, Props>((props, ref) => (
  <Button
    ref={ref}
    variant="outlined"
    startIcon={<Add />}
    onClick={props.onClick}
    className="empbtn"
  >
    {props.children}
  </Button>
));

export default EmpBtn;
