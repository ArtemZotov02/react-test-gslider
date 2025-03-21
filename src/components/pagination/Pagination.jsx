import React from "react";
import PaginationBtn from "./PaginationBtn";
import style from "./style.module.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePagination = () => {
    const pages = [];
    const visibleNeighbors = 1;

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 4) pages.push("...");

      let start = Math.max(2, currentPage - visibleNeighbors);
      let end = Math.min(totalPages - 1, currentPage + visibleNeighbors);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  console.log(`Total pages: ${totalPages}`);
console.log(`Current page: ${currentPage}`);
  return (
    <div className={style.pagination}>
      {currentPage > 1 && (
        <PaginationBtn onClick={() => onPageChange(currentPage - 1)}>
          ←
        </PaginationBtn>
      )}

      {generatePagination().map((page, index) =>
        page === "..." ? (
          <span key={index} className={style.dots}>...</span>
        ) : (
          <PaginationBtn
            key={index}
            onClick={() => onPageChange(page)}
            isActive={currentPage === page}
          >
            {page}
          </PaginationBtn>
        )
      )}

      {currentPage < totalPages && (
        <PaginationBtn onClick={() => onPageChange(currentPage + 1)}>
          →
        </PaginationBtn>
      )}
    </div>
  );
};

export default Pagination;
