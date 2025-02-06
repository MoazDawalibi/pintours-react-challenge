import { useGetAllImages } from '@/api/end-point/items';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useFieldFilterState } from '@/zustand/FieldFilterState';

export const useFetchImages = () => {
  const FilteredData = useFieldFilterState((state) => state.FilteredData);
  const name = FilteredData?.name || 'olive trees';

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetAllImages({ text: name });

  useInfiniteScroll(fetchNextPage, hasNextPage);

  return {
    data,
    isFetchingNextPage,
    isLoading,
  };
};