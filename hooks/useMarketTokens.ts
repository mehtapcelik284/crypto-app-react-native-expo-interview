import { useInfiniteQuery } from "@tanstack/react-query";
import { PER_PAGE, fetchMarketTokens } from "@/services/api/markets";

export const useMarketTokens = () => {
  return useInfiniteQuery({
    queryKey: ["marketTokens"],
    queryFn: ({ pageParam = 1 }) => fetchMarketTokens(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage || lastPage.length < PER_PAGE) {
        return undefined;
      }
      return (lastPageParam as number) + 1;
    },
  });
};
