export type Photo = {
    id: string;
    title: string;
    url_w: string;
  };
  
  export type PhotosPage = {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: Photo[];
  };
  
  export type InfiniteQueryResponse = {
    photos: PhotosPage;
  };
  