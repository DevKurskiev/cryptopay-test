import React, { memo } from "react";

import sprite from "../../../assets/icons/sprite.svg";

const Icon = memo(({ name, size, ...rest }) => (
  <>
    <svg width={size} height={size} {...rest}>
      <use href={`${sprite}#${name}`} />
    </svg>
  </>
));

export default Icon;
