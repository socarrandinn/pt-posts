import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { PostService } from '../services';
import { POST_ONE_KEY } from '../constants/query';


export const useFindOnePost = (id: number) => {
  const fetch = useCallback(() => PostService.getPost(id), [id]);
  return useQuery({
    queryKey: [id, POST_ONE_KEY],
    queryFn: fetch,
    enabled: !!id
  });
};
