import React, { useRef, useState } from "react";
import FormInput from "../../component/Input";
import { EmpBtn } from "../../component/Button";
import { useLoginContext } from "../../context/useContext";
import { Box } from "@mui/material";

export const Login = () => {
  const userRef = useRef(null);
  const pwdRef = useRef(null);
  const { setIsLogged } = useLoginContext();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const pwdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const loginHandler = () => {
    const userSaved = "pravin";
    const pwdSaved = "abc";
    if (userSaved === user && pwdSaved === pwd) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }

    // console.log()
  };

  return (
    <Box className="login-container" data-testid="login-cont">
      <h1>Sign In</h1>
      <form className="login-form" data-testid="login-form">
        <FormInput
          label="User Name"
          ref={userRef}
          type="text"
          onChange={userHandler}
          dataId="username"
        />
        <FormInput
          label="Password"
          ref={pwdRef}
          type="password"
          onChange={pwdHandler}
          dataId="password"
        />
        <Box className="login-form__btn">
          <EmpBtn onClick={loginHandler}>Login</EmpBtn>
        </Box>
        <h1>test</h1>
      </form>
    </Box>
  );
};
