import React, { useEffect, useRef } from "react";
import FormInput from "../../component/Input";
import EmpBtn from "../../component/Button";
import { useLoginContext } from "../../context/useContext";

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { isLogged, setIsLogged } = useLoginContext();

  useEffect(() => {
    console.log(isLogged);
  }, []);

  const loginHandler = () => {
    console.log("login handler");
    setIsLogged(true);
    // console.log()
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <FormInput label="User Name" ref={inputRef} type="text" />
        <FormInput label="Password" ref={inputRef} type="password" />
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
