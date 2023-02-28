import React, { useEffect, useState } from "react";
import Lists from "../../components/Lists/Lists";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slices/userSlice";
// import Pagination from "../../components/pagination/Pagination";

function Home(props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <Lists users={users} />
      {/* <Pagination itemsPerPage={10} pageCount={pageCount} users={users} /> */}
    </div>
  );
}

export default Home;
