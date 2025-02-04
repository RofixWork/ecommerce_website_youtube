import React from "react";
import { Link } from "react-router";
const MainTitle = ({ title, link, showButton = true }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      {showButton ? (
        <Link className="btn-primary font-semibold" to={link}>
          View More
        </Link>
      ) : null}
    </div>
  );
};

export default MainTitle;
