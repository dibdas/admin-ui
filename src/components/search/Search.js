import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Search.scss";

function Search({ setQuery }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get("query");
  // const allo = searchParams.get("age");
  // console.log(age + allo);
  // console.log(searchParams.get("age"));
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    setQuery(() => searchParams.get("query"));
  }
  return (
    <div className="search">
      <form className="search-forms">
        <input
          type="text"
          placeholder="search"
          // onClick={() => navigate("/filterdata")}
          onChange={(event) => setSearchParams({ query: event.target.value })}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}

export default Search;
