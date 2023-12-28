import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <div id="liveAlertPlaceholder"></div>
      <button
        type="button"
        className={"btn btn-" + color}
        id="liveAlertBtn"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
