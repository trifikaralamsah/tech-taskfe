/* eslint-disable @typescript-eslint/no-explicit-any */
export type TAsyncThunkPayload = any | undefined;

export type TAuthState = {
  user: any;
  isAppLoading: boolean;

  isRegisterAdminLoading: boolean;
  registerAdminError: any;
  registerAdminSuccess: any;

  isLoginAdminLoading: boolean;
  loginAdminSuccess: any;
  loginAdminError: any;
};
