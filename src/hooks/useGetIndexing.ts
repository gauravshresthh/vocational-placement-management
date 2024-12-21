import QueryString from "qs";
import { useSearchParams } from "./useSearchParams";

export const useGetIndexing = () => {
  const { searchParams } = useSearchParams();
  const paginationParams = QueryString.parse(
    searchParams?.get("paginate") as string
  );
  const getIndex = (index: number) => {
    const currentPage = paginationParams.page ?? 1;
    const limit = paginationParams.limit ?? 20;
    const currentIndex = (Number(currentPage) - 1) * Number(limit) + index + 1;

    return currentIndex;
  };
  return { getIndex };
};
