import { api } from "~/api";
import { IUser, LoginArgs, RegisterArgs } from "./typings/user";

/** @description = Realizes the request to the api getting the data from the logged user */
export const getUser = async (): Promise<IUser> => {
  const { data } = await api.get<IUser>("/me");
  return data;
};

/** @description = Realizes the request to the api logging the user in */
export const loginUser = async ({
  email,
  password,
}: LoginArgs): Promise<{ token: string }> => {
  const { data } = await api.post<{ token: string }>("/login", {
    email,
    password,
  });
  return data;
};

/** @description = Realizes the request to the api registering the user */
export const registerUser = async ({
  birthDate,
  password,
  name,
  email,
  picture,
}: RegisterArgs): Promise<{ token: string }> => {
  const { data } = await api.post<{ token: string }>("/register", {
    password,
    email,
    birthDate,
    name,
    picture,
  });
  return data;
};
