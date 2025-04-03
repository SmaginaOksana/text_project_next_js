import { notFound } from "next/navigation";

import {
  FetchSettings,
  FetchStatus,
  UserData,
  FetchResponseAllUsers,
  FetchResponseUser,
} from "@/interfaces";

export default function useHttp() {
  const request = async <T>({ url, params }: FetchSettings): Promise<T> => {
    try {
      const response = await fetch(url, params);

      if (!response.ok) {
        notFound();
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };

  const getAllUsers = async (): Promise<FetchResponseAllUsers> => {
    const usersData = await request<UserData[] | []>({
      url: "https://jsonplaceholder.typicode.com/users",
    });
    return { usersData: usersData, status: FetchStatus.Success };
  };

  const getUserById = async (id: number): Promise<FetchResponseUser> => {
    const userData = await request<UserData>({
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });
    return { userData: userData, status: FetchStatus.Success };
  };

  return { getAllUsers, getUserById };
}
