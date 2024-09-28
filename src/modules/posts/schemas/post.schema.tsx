import * as Yup from 'yup';

export const postSchema = Yup.object().shape({
  title: Yup.string().required('errors:required'),
  body: Yup.string().required('errors:required'),
  userId: Yup.number().required('errors.required').positive('errors:positive')
})