import { Add } from "@mui/icons-material";
import Button from "@mui/material/Button";
import * as React from "react";

const EmpBtn = React.forwardRef<Props, ref>((props, btnRef) => (
  <Button
    ref={btnRef}
    variant="outlined"
    startIcon={<Add />}
    onClick={props.onClick}
    className="empbtn"
  >
    {props.children}
  </Button>
));

export default EmpBtn;
