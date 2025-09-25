import axios, { AxiosResponse, Method } from "axios";

type CallMethodOptions<TData = any> = {
  method: Method;
  url: string;
  data?: TData;
  headers?: Record<string, string>;
};

const call_method = async <TResponse = any, TData = any>({
  method,
  url,
  data,
  headers = {},
}: CallMethodOptions<TData>): Promise<AxiosResponse<TResponse>> => {
  const m = method.toLowerCase() as Method;

  // If the payload is FormData, let the browser set headers
  const isFormData =
    typeof FormData !== "undefined" && data instanceof FormData;

  // Base headers (always accept JSON)
  let finalHeaders: Record<string, string> = {
    Accept: "application/json",
    ...headers,
  };

  // Only add Content-Type for non-FormData + body methods
  if (data && !isFormData && m !== "delete") {
    finalHeaders["Content-Type"] = "application/json";
  }

  try {
    // For GET / HEAD → no body
    if (m === "get" || m === "head") {
      return axios({ method: m, url, headers: finalHeaders });
    }

    // For DELETE → usually no body
    if (m === "delete" && !data) {
      return axios.delete(url, { headers: finalHeaders });
    }

    // For POST/PUT/PATCH (or DELETE with body)
    return axios({ method: m, url, data, headers: finalHeaders });
  } catch (error) {
    throw error;
  }
};

export default call_method;
