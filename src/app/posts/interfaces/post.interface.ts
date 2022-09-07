export interface IPost {
  id: string;
  description: string;
  images: IPostItem[];
  category?: string;
}
export interface IPostItem {
  src: string;
  description?: string;
}
