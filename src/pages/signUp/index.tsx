import { FC } from "react";
import { Styles } from "./styles";
import { SignUpForm } from "./components/signUpForm";
import { SignUpInformation } from "./components/signUpInformation";

export const SignUpPage: FC = () => {
  return (
    <Styles>
      <SignUpForm />
      <SignUpInformation />
    </Styles>
  );
};
