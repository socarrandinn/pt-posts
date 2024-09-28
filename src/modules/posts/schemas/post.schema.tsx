import * as Yup from 'yup';

export const postSchema = Yup.object().shape({
  title: Yup
    .string()
    .min(4, 'errors:min-4')
    .max(50, 'errors:max-50')
    .required('errors:required')
    .matches(/^[A-Za-z\s]+$/, 'errors:invalidValue'),
    body: Yup
    .string()
    .min(4, 'errors:min-4')
    .max(255, 'errors:max-255')
    .required('errors:required')
    .matches(/^[A-Za-z\s]+$/, 'errors:invalidValue'),
  userId: Yup
    .number()
    .required('errors:required')
    .transform(user => user?.id || user)
    .nullable()
})