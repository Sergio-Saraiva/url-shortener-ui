import { FC } from "react";
import { AppButton } from "../../components/AppButton";
import { AppInput } from "../../components/AppInput";
import { Styles } from "./styles";
import { useNavigate } from "react-router-dom";

export const SignUpPage: FC = () => {
  const navigate = useNavigate();

  const onSingInClick = () => {
    navigate("/signin");
  };

  return (
    <Styles>
      <div className="signup-form">
        <div className="form-header">
          <h1>Sign Up</h1>
          <span>Create a new account and start a free trial.</span>
          <span>No credit card needed.</span>
        </div>
        <div className="form-div">
          <AppInput
            label="Email"
            name="email"
            type="email"
            placeholder="email@email.com"
          />
          <AppInput label="Password" name="password" type="password" />
          <AppInput
            label="Confirm password"
            name="password_confirmation"
            type="password"
          />
          <AppButton label="Sign Up" />
        </div>
        <div className="form-footer">
          <span>
            Already have an accout?{" "}
            <span className="singin-link" onClick={onSingInClick}>
              Sign In
            </span>
          </span>
        </div>
      </div>
    </Styles>
  );
};
