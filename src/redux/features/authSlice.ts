/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TAsyncThunkPayload, TAuthState } from "../../types";
import { requestApi, webStorage } from "../../utils";

export const registerAdmin = createAsyncThunk(
  "registerAdmin",
  async (payload: TAsyncThunkPayload, thunkAPI) => {
    try {
      const response = await requestApi({
        method: "post",
        endpoint: `register-admin`,
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

export const loginAdmin = createAsyncThunk(
  "loginAdmin",
  async (payload: TAsyncThunkPayload, thunkAPI) => {
    try {
      const response = await requestApi({
        method: "post",
        endpoint: `auth/login`,
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

const initialState: TAuthState = {
  user: null,
  isAppLoading: true,

  isRegisterAdminLoading: false,
  registerAdminError: null,
  registerAdminSuccess: null,

  isLoginAdminLoading: false,
  loginAdminSuccess: null,
  loginAdminError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAppLoading = action.payload?.isAppLoading;
      state.user = action.payload?.user;
    },
    logout: (state) => {
      state.user = null;
      state.isAppLoading = false;
      webStorage.clear();
    },
    resetRegisterAdmin: (state) => {
      state.isRegisterAdminLoading = false;
      state.registerAdminError = null;
      state.registerAdminSuccess = null;
    },
    resetLoginAdmin: (state) => {
      state.isLoginAdminLoading = false;
      state.loginAdminError = null;
      state.loginAdminSuccess = null;
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(registerAdmin.pending, (state) => {
        state.isRegisterAdminLoading = true;
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.isRegisterAdminLoading = false;
        state.registerAdminError = action.payload;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.isRegisterAdminLoading = false;
        state.registerAdminSuccess = action.payload?.data?.message;
      })
      .addCase(loginAdmin.pending, (state) => {
        state.isLoginAdminLoading = true;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoginAdminLoading = false;
        state.loginAdminError = action.payload;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoginAdminLoading = false;
        state.loginAdminSuccess = action.payload?.data?.message;
        console.log(action.payload);
        state.user = action.payload?.data;
        webStorage.set("user", action.payload?.data);
      });
  },
});

export const { setUser, logout, resetRegisterAdmin, resetLoginAdmin } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
