import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IPost } from '../interfaces/post.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { postSchema } from '../schemas/post.schema';
import { PostService } from '../services';
import { POST_LIST_KEY } from '../constants/query';

const initValues: IPost = {
  title: '',
  body: '',
  userId: null
};

const usePostCreateForm = (onClose: () => void, defaultValues: IPost = initValues) => {
  const { t } = useTranslation('posts');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset: resetForm, } = useForm({
    //@ts-ignore
    resolver: yupResolver(postSchema),
    defaultValues
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const {
    mutate,
    reset: resetMutation,
    error,
    isPending,
    isSuccess,
    data,
    // @ts-ignore
  } = useMutation({
    mutationFn: (post: IPost): Promise<IPost> => {
      if (post.id) {
        return PostService.updatePost(post)
      }
      return PostService.createPost(post)
    },
    onSuccess: (_data: IPost, values: IPost) => {
      queryClient.invalidateQueries({ queryKey: [POST_LIST_KEY] });
      toast.success(t(values?.id ? 'successUpdate' : 'successCreated'));
      onClose?.();
      resetForm();
    },
    onError: () => {
      toast.error(t('errors:generalErrorMessage'));
    }
  },
  );

  const reset = useCallback(() => {
    resetForm();
    resetMutation();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    isPending,
    isSuccess,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default usePostCreateForm;
