import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("fetch/users", async () => {});
const userSlice = createSlice({
  name: "userSlice",
});
