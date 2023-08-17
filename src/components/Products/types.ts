export interface ILink {
  label?: string;
  href: string;
  isOpenNewTab?: boolean;
}

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
