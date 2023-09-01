import { useState } from "react";
import TextInput from "../../../base/input/text";
import PasswordInput from "../../../base/input/password";
import Button from "../../../base/button";
import { loginValidator } from "../../../../helpers/validation";
import "./style.css";

const LoginForm = ({onSubmit}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (userName, password) => {
    const value = {
      userName: userName,
      password: password,
    };

    setError(loginValidator(value));
    console.log(error)
    if (!Object.keys(error).length) {
      onSubmit(value);
    }
  };

  return (
    <div className="wrapper-login-form">
      <div className="header-login">
        <p className="h3">Login Admin</p>
      </div>
      <div className="wrapper-container">
        <div className="container-form">
          <TextInput onChange={(e) => setUserName(e.target.value)} error={error.userName} />
          <br />
          <PasswordInput onChange={(e) => setPassword(e.target.value)} error={error.password} />
          <br />
          <Button
            type="button"
            classname="btn-primary"
            label="Submit"
            onClick={() => handleSubmit(userName, password)}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
