export type TRequestApi = {
  contentType?: "json" | "formData";
  method: "get" | "post" | "put" | "delete" | "patch" | "options" | "head";
  endpoint: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
};
