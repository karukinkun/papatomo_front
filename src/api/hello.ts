import instance from "@/api/axios";

export const getHello = async () => {
  const response = await instance.get("/hello");
  return response;
};
