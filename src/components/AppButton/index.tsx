import { FC } from "react";
import { Styles } from "./styles";

type Props = {
  label?: string;
};

export const AppButton: FC<Props> = ({ label }) => {
  return (
    <Styles>
      <button>{label}</button>
    </Styles>
  );
};
