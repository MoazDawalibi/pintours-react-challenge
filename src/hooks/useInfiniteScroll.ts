import { useEffect } from "react";

const useInfiniteScroll = (fetchNextPage: () => void, hasNextPage?: boolean) => {
  useEffect(() => {
    let isFetching = false;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      // Check if the user is near the bottom and not already fetching
      if (scrollTop + clientHeight >= scrollHeight - 100 && hasNextPage && !isFetching) {
        isFetching = true; // Prevent multiple calls
        fetchNextPage();

        // Reset the flag after the fetch is complete
        setTimeout(() => {
          isFetching = false;
        }, 1000); // Adjust the delay as needed
      }
    };

    // Add a delay to the scroll event using debouncing
    const debouncedScroll = debounce(handleScroll, 300);

    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [fetchNextPage, hasNextPage]);
};

// Debounce utility function
const debounce = (func: () => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
};

export default useInfiniteScroll;