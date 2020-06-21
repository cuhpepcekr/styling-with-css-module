import React from "react";

function CheckBox({ checked, children, ...rest }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div>{checked ? "체트됨" : "체크 안 됨"}</div>
      </label>
      <span> {children}</span>
    </div>
  );
}

export default CheckBox;
