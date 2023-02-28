import React, { useState } from "react";
// import ReactPaginate from "react-paginate";

function Pagination({ pageCount, itemsPerPage, users, onItemOffSet }) {
  const [itemOffset, setItemOffset] = useState(0);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    // onItemOffSet(newOffset);
  };
  return (
    <>
      {/* <ReactPaginate
        breakLabel=""
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        // onPageChange={(event) => {
        //   const newOffset = (event.selected * itemsPerPage) % users.length;
        //   onItemOffSet({ newOffset });
        // }}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </>
  );
}

export default Pagination;
