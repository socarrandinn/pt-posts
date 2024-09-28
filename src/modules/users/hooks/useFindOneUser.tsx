import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { USERS_ONE_KEY } from '../constants/query';
import { UserService } from '../services';



export const useFindOneUser = (id: number) => {
  const fetch = useCallback(() => UserService.getUser(id), [id]);
  return useQuery({
    queryKey: [id, USERS_ONE_KEY],
    queryFn: fetch,
    enabled: !!id
  });
};
