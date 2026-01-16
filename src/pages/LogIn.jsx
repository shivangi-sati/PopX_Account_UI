import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {Button} from "../components/Button";
import { InputField } from "../components/InputField";
export const LogIn = ({ setEmail }) => {
  const navigate = useNavigate();

  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");

  const canLogin = emailValid && password.length > 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">
        Signin to your <br /> PopX account
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit,
      </p>

      <InputField
        label="Email Address"
        type="email"
        placeholder="Enter email address"
        required
        onValidChange={setEmailValid}
        onValueChange={setEmail}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        required
        onValueChange={setPassword}
      />

      <Button
        text="Login"
        variant={canLogin ? "primary" : "disabled"}
        onClick={() => {
          if (canLogin) navigate("/profile");
        }}
      />
    </div>
  );
}