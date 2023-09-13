import { Add } from "@mui/icons-material";
import Button from "@mui/material/Button";
import * as React from "react";

const EmpBtn = React.forwardRef<Props, ref>((props, inRef) => {
  const btnRef = React.useRef(null);
  React.useImperativeHandle(inRef, () => ({
    addData: () => {
      console.log(`we're inside the exposed property function!`);
      return 1;
    },
    testFn: () => {
      console.log("inside test");
    },
  }));
  return (
    <Button
      ref={btnRef}
      variant="outlined"
      startIcon={<Add />}
      onClick={props.onClick}
      className="empbtn"
    >
      {props.children}
    </Button>
  );
});

export default EmpBtn;
