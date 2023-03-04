import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slices/userSlice";
import List from "../List/List";
// import Pagination from "../pagination/Pagination";
import ReactPaginate from "react-paginate";
import "./Lists.scss";
import Header from "../header/Header";
import DeleteButton from "../delete-button/Delete-button";

function Lists({ users, query }) {
  console.log(query);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchItem, setSearchItem] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isDelSeletested, setDelSelected] = useState(false);
  const [isListChecked, setIsListChecked] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedArray, setSelectedArray] = useState([]);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  console.log(isDelSeletested);
  console.log(isAllChecked);
  const endOffset = itemOffset + itemsPerPage;
  console.log(itemOffset);
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  console.log(searchItem);

  const currentItems =
    searchItem.length !== 0
      ? searchItem.slice(itemOffset, endOffset)
      : users.slice(itemOffset, endOffset);
  console.log(currentItems);

  const pageCount = Math.ceil(
    searchItem.length > 0
      ? searchItem.length / itemsPerPage
      : users.length / itemsPerPage
  );

  //   Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPageNumber(event.selected + 1);
    const newOffset =
      (event.selected * itemsPerPage) %
      (searchItem.length > 0 ? searchItem.length : users.length);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  function filterData() {
    const desiredData = users.filter(
      (item) =>
        item.name === query || item.email === query || item.role === query
    );
    console.log(desiredData);
    setSearchItem(desiredData);
  }

  useEffect(() => {
    filterData();
    console.log(query);
  }, [query]);
  useEffect(() => {
    if (isAllChecked) {
      console.log(itemOffset);
      console.log(endOffset);
      setIsListChecked(!isListChecked);
      console.log(isListChecked);
    }
  }, [isAllChecked]);

  // if (searchItem.length === 0) {
  return (
    <>
      <div className="lists">
        <div className="heading">
          <Header
            onSelectCheckBox={() => setIsAllChecked(!isAllChecked)}
            pageNumber={pageNumber}
          />
        </div>
        <div className="list-array">
          {currentItems.map((user, id) => {
            return (
              <List
                user={user}
                key={id}
                onSelected={isAllChecked}
                itemOffset={itemOffset}
                endOffset={endOffset}
              />
            );
          })}
        </div>

        <div className="delete-pagination">
          <div className="delete-button">
            <DeleteButton onSelect={setDelSelected} />
          </div>

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
      </div>
    </>
  );
}

export default Lists;
