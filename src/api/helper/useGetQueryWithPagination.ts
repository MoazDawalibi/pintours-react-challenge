import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import useAxios from "./useAxios";
import { InfiniteQueryResponse } from "@/types/QueryTypes";


function useGetQueryWithPagination(
  KEY: string | string[],
  url: string,
  params: Record<string, any> = {},
  options?: UseInfiniteQueryOptions<InfiniteQueryResponse, Error>,
) {
  const axios = useAxios();

  return useInfiniteQuery<InfiniteQueryResponse, Error>(
    [KEY, params],
    async ({ pageParam = 1 }) => {
      const response = await axios.get<InfiniteQueryResponse>(url, {
        params: { ...params, page: pageParam },
      });
      return response.data;
    },
    {
      ...options,
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.photos.page + 1;
        return nextPage <= lastPage.photos.pages ? nextPage : undefined;
      },
    },
  );
}

export default useGetQueryWithPagination;
