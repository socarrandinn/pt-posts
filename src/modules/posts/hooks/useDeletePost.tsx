import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { POST_LIST_KEY } from '../constants/query';
import { PostService } from '../services';

export const useDeletePost = (id: number, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('posts');

  return useMutation({
    mutationFn: () => PostService.deletePost(id),
    onSuccess: () => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries({ queryKey: [POST_LIST_KEY, id] });
    },
    onError: () => {
      toast.error(t('errors:generalErrorMessage'));
    }
  },
  );
};
