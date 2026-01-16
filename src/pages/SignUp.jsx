import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {Button} from "../components/Button";
import { InputField } from "../components/InputField";

export const SignUp = ({ setName, setEmail }) => {
  const navigate = useNavigate();
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const canSubmit = nameValid && phoneValid && emailValid && passwordValid;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Create your <br /> PopX account
      </h1>

      <InputField
        label="Full Name"
        placeholder="John Doe"
        required
        onValidChange={setNameValid}
        onValueChange={setName} 
      />

      <InputField
        label="Phone number"
        placeholder="9876543210"
        required
        onValidChange={setPhoneValid}
      />

      <InputField
        label="Email address"
        type="email"
        placeholder="example@domain.com"
        required
        onValidChange={setEmailValid}
        onValueChange={setEmail}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Create a password"
        required
        onValidChange={setPasswordValid}
      />

      <InputField
        label="Company name"
        placeholder="Acme Corporation"
      />

      <div className="mt-4 mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">
          Are you an Agency?
        </p>

        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="agency" defaultChecked className="accent-[#6C25FF]" />
            Yes
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="agency" className="accent-[#6C25FF]" />
            No
          </label>
        </div>
      </div>

      <Button
        text="Create Account"
        variant={canSubmit ? "primary" : "disabled"}
        onClick={() => {
          if (canSubmit) navigate("/profile");
        }}
      />
    </div>
  );
}
