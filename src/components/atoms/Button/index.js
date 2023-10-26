import React from "react";

import { ButtonContainer } from "./styles";

function Button({ text, ...rest }) {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>;
}

export default Button;
