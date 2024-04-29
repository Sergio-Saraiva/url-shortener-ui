import { FC } from "react";
import { Styles } from "./styles";

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
};

export const AppInput: FC<Props> = ({
  label,
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <Styles>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </Styles>
  );
};
