export interface IPost {
  id: string;
  description: string;
  images: IPostItem[];
}
export interface IPostItem {
  src: string;
}
