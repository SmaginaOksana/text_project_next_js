import { notFound } from "next/navigation";

import {
  FetchSettings,
  FetchStatus,
  UserData,
  FetchResponse,
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

  const getUsers = async (id: number | null = null): Promise<FetchResponse> => {
    if (id) {
      const userData = await request<UserData>({
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
      });
      return { usersData: userData, status: FetchStatus.Success };
    } else {
      const usersData = await request<UserData[] | []>({
        url: `https://jsonplaceholder.typicode.com/users/`,
      });
      return { usersData: usersData, status: FetchStatus.Success };
    }
  };

  return { getUsers };
}
