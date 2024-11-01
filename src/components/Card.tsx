import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon: ReactNode;
  bg_color: string;
}

const Card: React.FC<CardProps> = ({ description, title, icon, bg_color }) => {
  return (
    <div className="card shadow-lg p-4">
      <div className="card-body">
        <div className="row">
          <div className={`col-md-3 bg-${bg_color} p-2  rounded`}>{icon}</div>
          <div className="col-md-9">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
