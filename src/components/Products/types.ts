import { ILink } from "../ContactItem/types";

export interface IProduct {
  id: number | string;
  title: string;
  description?: string;
  price: string | number;
  img: string;
  contacts?: {
    title: string;
    links: ILink[];
  };
}
