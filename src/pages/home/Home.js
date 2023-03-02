import React, { useEffect, useState } from "react";
import Lists from "../../components/Lists/Lists";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slices/userSlice";
import Search from "../../components/search/Search";
// import Pagination from "../../components/pagination/Pagination";
import "./Home.scss";

function Home(props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const [query, setQuery] = useState(null);
  console.log(query);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="home">
      <Search setQuery={setQuery} />
      <Lists users={users} query={query} />
      {/* <Pagination itemsPerPage={10} pageCount={pageCount} users={users} /> */}
    </div>
  );
}

export default Home;
