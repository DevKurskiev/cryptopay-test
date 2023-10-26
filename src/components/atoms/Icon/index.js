import React, { Fragment, memo } from "react";

import sprite from "../../../assets/icons/sprite.svg";

const Icon = memo(({ name, size, ...rest }) => (
  <Fragment>
    <svg width={size} height={size} {...rest}>
      <use href={`${sprite}#${name}`} />
    </svg>
  </Fragment>
));

export default Icon;
