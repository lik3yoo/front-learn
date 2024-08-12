import React from "react";
var Button = function (props) {
    var label = props.label, onClick = props.onClick, _a = props.loading, loading = _a === void 0 ? false : _a;
    return React.createElement("button", { onClick: onClick }, label);
};
export default Button;
