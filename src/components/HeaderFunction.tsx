import React from "react";

interface HeaderProps {
  text: string;
  btn_text: string;
  icon?: React.ReactNode;
  onFunc?: () => void;
}

const HeaderFunction: React.FC<HeaderProps> = ({
  btn_text,
  text,
  icon,
  onFunc,
}) => {
  return (
    <div className="container  ">
      <div className="row justify-content-s">
        <div className="col-md-4">
          <h4 className="text-secondary">{text}</h4>
        </div>
        <div className="col-md-4 offset-md-4 text-end">
          <button className="btn btn-primary rounded-lg" onClick={onFunc}>
            {" "}
            {icon && <span className="me-2">{icon}</span>}
            {btn_text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderFunction;
