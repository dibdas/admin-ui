import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slices/userSlice";
import List from "../List/List";
// import Pagination from "../pagination/Pagination";
import ReactPaginate from "react-paginate";
import "./Lists.scss";

function Lists({ users }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(itemOffset);
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = users.slice(itemOffset, endOffset);
  console.log(currentItems);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  //   Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="lists">
        {currentItems.map((user, id) => {
          return <List user={user} key={id} />;
        })}

        <div className="pagination">
          <ReactPaginate
            breakLabel=""
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination justify-content-center "
            pageClassName="page-item"
            pageLinkClassName="page-link border-primary"
            previousClassName={"page-item"}
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
        </div>
      </div>
    </>
  );
}

export default Lists;
