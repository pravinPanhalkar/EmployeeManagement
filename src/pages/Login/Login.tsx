import React, { useEffect, useRef } from "react";
import FormInput from "../../component/Input";
import EmpBtn from "../../component/Button";
import { useLoginContext } from "../../context/useContext";

const Login = () => {
  const userRef = useRef(null);
  const pwdRef = useRef(null);
  const btnRef = useRef(null);
  const { setIsLogged } = useLoginContext();

  const loginHandler = () => {
    console.log("login handler");
    setIsLogged(true);
    // console.log()
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <FormInput label="User Name" ref={userRef} type="text" />
        <FormInput label="Password" ref={pwdRef} type="password" />
        <div className="login-form__btn">
          <EmpBtn ref={btnRef} onClick={loginHandler}>
            Login
          </EmpBtn>
        </div>
      </form>
    </div>
  );
};

export default Login;
