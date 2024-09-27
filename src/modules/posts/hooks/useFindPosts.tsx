import { useQuery } from "@tanstack/react-query";

import { PostService } from "../services";
import { POST_LIST_KEY } from "../constants/query";
import { useCallback } from "react";
import { IPost } from "../interfaces/post.interface";

export const useFindPosts = () => {
  const fetchPosts = useCallback(() => PostService.getAllPosts(), []);
  const query = useQuery({
    queryKey: [POST_LIST_KEY],
    queryFn: fetchPosts,
  });

  return {
    ...query,
    data: query?.data as unknown as IPost[],
  }
};