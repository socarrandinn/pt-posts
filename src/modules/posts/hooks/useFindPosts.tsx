import { useQuery } from "@tanstack/react-query";

import { PostService } from "../services";
import { POST_LIST_KEY } from "../constants/query";
import { useCallback } from "react";

export const useFindPosts = () => {
  const fetch = useCallback(() => PostService.getAllPosts(), []);

  const { data, isLoading, error } = useQuery({
    queryKey: [POST_LIST_KEY],
    queryFn: fetch
  },);

  return { data, isLoading, error };
};