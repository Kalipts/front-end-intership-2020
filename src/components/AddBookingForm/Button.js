import React from "react";

import { StyledButton } from "./FooterBooking";

const Button = props => {
  const { primary } = props;
  return <StyledButton primary={primary}>{props.children}</StyledButton>;
};

export default Button;
