import React from "react";

export const stylePrimitive = (Primitive, style) =>
  React.forwardRef((props, forwardedRef) => {
    const { className, ...restProps } = props;
    return <Primitive {...restProps} ref={forwardedRef} className={style} />;
  });
