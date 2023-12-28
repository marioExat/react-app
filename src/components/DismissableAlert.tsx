import React, { ReactNode } from "react";

interface DismissableAlertProps {
  children: ReactNode;
  onClose: () => void;
}

const DismissableAlert = ({ children, onClose }: DismissableAlertProps) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      A simple primary alert—check it out!
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        {children}
      </button>
    </div>
  );
};

export default DismissableAlert;
