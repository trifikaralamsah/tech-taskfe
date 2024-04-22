import { TRequestApi } from "../types";
import { notification } from "antd";
import { api } from "./api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const endpointSwall = ["users/add"];
const methodSwall = ["put", "delete"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const queryParams = (data: any) => {
  return `?${Object.keys(data)
    .map((key) => `${key}=${data[key]}`)
    .join("&")}`;
};

export const requestApi = async ({
  contentType = "json", //json or formData
  method, //get or post or put or delete or others http method
  endpoint,
  body,
  params,
}: TRequestApi) => {
  try {
    const newParams = params ? queryParams(params) : "";
    const response = await api(contentType)[method](
      `${endpoint}${newParams}`,
      body,
    );
    if (endpointSwall.includes(endpoint) || methodSwall.includes(method)) {
      MySwal.fire({
        title: "Success!",
        // text: "Akun anda telah terdaftar",
        icon: "success",
        confirmButtonText: "OK",
        allowOutsideClick: false,
        timer: 4000,
        timerProgressBar: true,
      });
    }
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    notification.error({
      message: "Failed",
      description: error?.response?.data?.message || error.message,
    });
    throw new Error(error);
  }
};
