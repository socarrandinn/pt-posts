import { useQuery } from "@tanstack/react-query";

import { PostService } from "../services";
import { POST_LIST_KEY } from "../constants/query";
import { useCallback } from "react";

export const useFindPosts = () => {
  const fetchPosts = useCallback(() => PostService.getAllPosts(), []);


  // Hook useQuery para cargar los posts
  const { data, isLoading, error } = useQuery({
    queryKey: [POST_LIST_KEY],
    queryFn: fetchPosts,

  },);

  return { data, isLoading, error };
};