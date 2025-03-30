export interface FetchSettings {
  url: UrlType;
  params?: {
    method: string;
    body: string;
    headers: HeadersType;
  };
}

type UrlType = string;

type HeadersType = { "Content-Type": "application/json" };

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export enum FetchStatus {
  Loading = "loading",
  Success = "success",
  Error = "error",
}
