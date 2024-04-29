import Button from "@mui/material/Button";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Styles } from "./styles";

export const AppHeaderComponent: FC = () => {
  const navigate = useNavigate();

  const onSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <Styles>
      <div className="app-header-component">
        <div className="left">TL;JC | Too Long;Just Click</div>
        <div className="right">
          <span>Features</span>
          <span>Pricing</span>
          <Button onClick={onSignUpClick}>Sign Up</Button>
        </div>
      </div>
    </Styles>
  );
};
