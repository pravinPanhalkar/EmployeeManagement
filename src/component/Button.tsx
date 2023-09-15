import { Add } from "@mui/icons-material";
import Button, { ButtonProps } from "@mui/material/Button";
import * as React from "react";

interface EmpBtnProps extends ButtonProps {
  onClick?: () => void;
}

export const EmpBtn = React.forwardRef<HTMLButtonElement, EmpBtnProps>(
  (props, ref) => {
    return (
      <Button
        ref={ref}
        variant="outlined"
        startIcon={<Add />}
        onClick={props.onClick}
        className="empbtn"
      >
        {props.children}
      </Button>
    );
  }
);
