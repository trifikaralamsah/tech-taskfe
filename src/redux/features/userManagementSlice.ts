/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestApi } from "../../utils";
import { TAsyncThunkPayload } from "../../types";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const getUsers = createAsyncThunk("getUsers", async (_, thunkAPI) => {
  try {
    const response = await requestApi({
      method: "get",
      //   endpoint: `/users`,
      endpoint: `users?limit=50&select=firstName,lastName,image,username,email,gender&sort=firstName:asc`,
    });
    const result = response?.data?.users.map((user: any) => {
      return {
        ...user,
        lastUpdate: new Date().toISOString(),
      };
    });
    // console.log(result);
    return { data: { users: result } };
    // return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || error.message,
    );
  }
});

export const addUser = createAsyncThunk(
  "addUser",
  async (payload: TAsyncThunkPayload, thunkAPI) => {
    try {
      const response = await requestApi({
        method: "post",
        endpoint: `users/add`,
        body: payload,
      });
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error.message,
      );
    }
  },
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (payload: TAsyncThunkPayload, thunkAPI) => {
    // console.log(payload);
    try {
      if (payload.newUser) {
        MySwal.fire({
          title: "Success!",
          // text: "Akun anda telah terdaftar",
          icon: "success",
          confirmButtonText: "OK",
          allowOutsideClick: false,
          timer: 4000,
          timerProgressBar: true,
        });
        return { data: payload };
      } else {
        const response = await requestApi({
          method: "put",
          endpoint: `users/${payload.id}`,
          body: payload,
        });
        return response;
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error.message,
      );
    }
  },
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (payload: TAsyncThunkPayload, thunkAPI) => {
    try {
      if (payload.newUser) {
        MySwal.fire({
          title: "Success!",
          icon: "success",
          confirmButtonText: "OK",
          allowOutsideClick: false,
          timer: 4000,
          timerProgressBar: true,
        });
        return { data: payload };
      } else {
        const response = await requestApi({
          method: "delete",
          endpoint: `users/${payload.id}`,
        });
        console.log(response);
        return response;
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error.message,
      );
    }
  },
);

const initialState = {
  users: [],
  isUsersLoading: false,
  usersError: null,
  usersSuccess: null,

  isAddUserLoading: false,
  addUserError: null,
  addUserSuccess: null,

  isUpdateUserLoading: false,
  updateUserError: null,
  updateUserSuccess: null,

  isDeleteUserLoading: false,
  deleteUserError: null,
  deleteUserSuccess: null,
};

const userManagementSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {
    clearUsersManagement: (state) => {
      state.users = [];
      state.isUsersLoading = false;
      state.usersError = null;
      state.usersSuccess = null;

      state.isAddUserLoading = false;
      state.addUserError = null;
      state.addUserSuccess = null;

      state.isUpdateUserLoading = false;
      state.updateUserError = null;
      state.updateUserSuccess = null;

      state.isDeleteUserLoading = false;
      state.deleteUserError = null;
      state.deleteUserSuccess = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isUsersLoading = true;
      })
      .addCase(getUsers.rejected, (state: any, action) => {
        state.isUsersLoading = false;
        state.usersError = action.payload;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.isUsersLoading = false;
        state.users = action.payload?.data?.users;
      })

      .addCase(addUser.pending, (state) => {
        state.isAddUserLoading = true;
      })
      .addCase(addUser.rejected, (state: any, action) => {
        state.isAddUserLoading = false;
        state.addUserError = action.payload;
      })
      .addCase(addUser.fulfilled, (state: any, action) => {
        state.isAddUserLoading = false;
        state.addUserSuccess = action.payload?.data?.message;
        // console.log(action.payload.data);
        const newId = state.users.length + 1;
        const data = {
          id: newId,
          firstName: action.payload?.data?.firstName,
          lastName: action.payload?.data?.lastName,
          image: action.payload?.data?.image,
          username: action.payload?.data?.username,
          email: action.payload?.data?.email,
          gender: action.payload?.data?.gender,
          lastUpdate: new Date().toLocaleString(),
          newUser: true,
        };
        state.users.unshift(data);
      })

      .addCase(updateUser.pending, (state) => {
        state.isUpdateUserLoading = true;
      })
      .addCase(updateUser.rejected, (state: any, action) => {
        state.isUpdateUserLoading = false;
        state.updateUserError = action.payload;
      })
      .addCase(updateUser.fulfilled, (state: any, action) => {
        state.isUpdateUserLoading = false;
        state.updateUserSuccess = action.payload?.data?.message;
        // console.log(action.payload.data);
        const data = {
          id: action.payload?.data?.id,
          firstName: action.payload?.data?.firstName,
          lastName: action.payload?.data?.lastName,
          image: action.payload?.data?.image,
          username: action.payload?.data?.username,
          email: action.payload?.data?.email,
          gender: action.payload?.data?.gender,
          lastUpdate: new Date().toLocaleString(),
          newUser: action.payload?.data?.newUser,
        };

        state.users = state.users.map((user: any) => {
          if (user.id === data.id) {
            return data;
          }
          return user;
        });
      })
      .addCase(deleteUser.pending, (state) => {
        state.isDeleteUserLoading = true;
      })
      .addCase(deleteUser.rejected, (state: any, action) => {
        state.isDeleteUserLoading = false;
        state.deleteUserError = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state: any, action) => {
        // console.log(action.payload);
        state.isDeleteUserLoading = false;
        state.deleteUserSuccess = action.payload?.data?.message;
        state.users = state.users.filter(
          (user: any) => user.id !== action.payload?.data?.id,
        );
      });
  },
});

export const { clearUsersManagement } = userManagementSlice.actions;
export const selectUserManagement = (state: any) => state.userManagement;
export const userManagementReducer = userManagementSlice.reducer;
