import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: localStorage.getItem("token"),
  loading: false,
  error: false,
  signIn: false,
  signUp: false,
};

// export const signUpUser = createAsyncThunk(
//   "user/post",
//   async ({ login, password }, thunkAPI) => {
//     try {
//       const res = await fetch("http://localhost:3001/signUp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ login, password }),
//       });
//       const data = await res.json();
//       if (data.error) {
//         return thunkAPI.rejectWithValue(data.error);
//       }
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );
// export const signInUser = createAsyncThunk(
//   "user/fetch",
//   async ({ login, password }, thunkAPI) => {
//     try {
//       const res = await fetch("http://localhost:3001/signIn", {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ login, password }),
//       });
//       const data = await res.json();
//       if (data.error) {
//         return thunkAPI.rejectWithValue(data.error);
//       }
//       localStorage.setItem("token", data.token);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
  extraReducers: (builder) => {},
});
export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
