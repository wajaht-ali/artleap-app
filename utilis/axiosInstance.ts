import axios, { AxiosResponse, Method } from "axios";

interface CallOptions<TData> {
  method: Method;
  url: string;
  data?: TData;
  headers?: Record<string, string>;
}

const call_method = async <TResponse = unknown, TData = unknown>(
  { method, url, data, headers = {} }: CallOptions<TData>
): Promise<AxiosResponse<TResponse>> => {
  const m = method.toLowerCase() as Method;

  const isFormData =
    typeof FormData !== "undefined" && data instanceof FormData;

  const finalHeaders: Record<string, string> = {
    Accept: "application/json",
    ...headers,
  };

  if (data && !isFormData && m !== "delete") {
    finalHeaders["Content-Type"] = "application/json";
  }

  if (m === "get" || m === "head") {
    return axios({ method: m, url, headers: finalHeaders });
  }

  if (m === "delete" && !data) {
    return axios.delete(url, { headers: finalHeaders });
  }

  return axios({ method: m, url, data, headers: finalHeaders });
};

export default call_method;
