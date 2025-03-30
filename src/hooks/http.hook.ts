import { notFound } from "next/navigation";

import { FetchSettings, FetchStatus, UserData } from "@/interfaces";

export default function useHttp() {
  const request = async ({ url, params }: FetchSettings) => {
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

  const getAllUsers = async () => {
    const usersData: UserData[] = await request({
      url: "https://jsonplaceholder.typicode.com/users",
    });
    return { usersData: usersData, status: FetchStatus.Success };
  };

  const getUserById = async (id: number) => {
    const userData: UserData = await request({
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });
    return { userData: userData, status: FetchStatus.Success };
  };

  return { getAllUsers, getUserById };
}
