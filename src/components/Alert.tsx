import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: IProps) {
  return (
    <div className={"alert alert-primary alert-dismissible"}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert;
