import React from "react";
import style from "./style.module.scss";

const PaginationBtn = ({ onClick, children, isActive }) => {
  return (
    <button
      className={`${style.paginationButton} ${isActive ? style.activePage : ""}`}
      onClick={isActive ? undefined : onClick}
      disabled={isActive}
    >
      {children}
    </button>
  );
};

export default PaginationBtn;
