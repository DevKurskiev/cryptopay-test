import React from "react";

import { ButtonContainer } from "./styles";

function Button({ text, ...props }) {
  return <ButtonContainer {...props}>{text}</ButtonContainer>;
}

export default Button;
