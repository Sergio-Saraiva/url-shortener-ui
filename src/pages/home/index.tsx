import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const onSingInClick = () => {
    navigate("/signin");
  };

  const onSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Button onClick={onSingInClick}>SignIn</Button>
      <Button onClick={onSignUpClick}>SignUp</Button>
    </div>
  );
};
