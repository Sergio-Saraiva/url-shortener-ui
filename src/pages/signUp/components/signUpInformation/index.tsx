import { FC } from "react";
import { Styles } from "./styles";
import DoneIcon from "@mui/icons-material/Done";

export const SignUpInformation: FC = () => {
  return (
    <Styles>
      <h1>Why TL;JC?</h1>
      <div className="benefit-item">
        <div className="benefit-item-header">
          <DoneIcon />
        </div>
        <div className="benefit-item-body">
          <h3>Amazing free tier</h3>
          <span>
            Create up to 500 short urls valid for 15 days. Just sign up and
            validate your email!
          </span>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-item-header">
          <DoneIcon />
        </div>
        <div className="benefit-item-body">
          <h3>Awesome features</h3>
          <span>
            Track your links, create QR Codes and more in the paid tier!
          </span>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-item-header">
          <DoneIcon />
        </div>
        <div className="benefit-item-body">
          <h3>Paid tier</h3>
          <span>
            Unlimited urls with no expiration date paying only $5 dolars per
            month.
          </span>
        </div>
      </div>
    </Styles>
  );
};
