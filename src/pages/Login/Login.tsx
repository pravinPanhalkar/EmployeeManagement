import React, { useEffect, useRef, useState } from "react";
import FormInput from "../../component/Input";
import EmpBtn from "../../component/Button";
import { useLoginContext } from "../../context/useContext";

const Login = () => {
  const userRef = useRef(null);
  const pwdRef = useRef(null);
  const { setIsLogged } = useLoginContext();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const userHandler = (e: event) => {
    setUser(e.target.value);
  };

  const pwdHandler = (e: event) => {
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
    <div className="login-container">
      <form className="login-form">
        <FormInput
          label="User Name"
          ref={userRef}
          type="text"
          onChange={userHandler}
        />
        <FormInput
          label="Password"
          ref={pwdRef}
          type="password"
          onChange={pwdHandler}
        />
        <div className="login-form__btn">
          <EmpBtn onClick={loginHandler}>Login</EmpBtn>
        </div>
      </form>
    </div>
  );
};

export default Login;
