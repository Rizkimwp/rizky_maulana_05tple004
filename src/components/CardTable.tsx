import React from "react";

const CardTable: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="card text-white bg-white shadow-lg">
      <img className="card-img-top" src="holder.js/100px180/" alt="" />
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardTable;
