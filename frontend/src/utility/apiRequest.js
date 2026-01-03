const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiRequest = async (URL, options = {}) => {
  const response = await fetch(`${BASE_URL}${URL}`, {
    credentials: "include",
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...(options.headers || {}),
    },
    ...options,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};
