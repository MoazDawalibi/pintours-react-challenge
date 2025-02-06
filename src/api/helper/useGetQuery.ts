import { useQuery } from "react-query";
import useAxios from "./useAxios";

function useGetQuery(
  KEY: string | string[],
  url: string,
  params: any = {},
  options: any = {},
) {
  const axios = useAxios();


  return useQuery(
    [KEY,params],
    async () => {
      const response = await axios.get(url, {params:params});
      return response?.data ?? [];
    },
    options,
  );
}

export default useGetQuery;
