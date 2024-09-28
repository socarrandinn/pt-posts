import { Box, Grid2 } from '@mui/material';
import { FormEventHandler, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from '../../../../components/Form/Form';
import FormTextField from '../../../../components/Form/input/text/FormTextField';
import { SelectUsers } from '../../../users/components/SelectUsers';

type PostFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  includeApp?: boolean;
  onSubmit: FormEventHandler | undefined;
};

const PostForm = ({ control, isLoading, onSubmit }: PostFormProps) => {
  const { t } = useTranslation('posts');


  return (
    <Box sx={{ mt: 2 }}>
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'post-form'} noValidate>
        <Grid2 container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid2 size={12}>
            <FormTextField
              autoFocus
              required
              name='title'
              label={t('fields.title')}
              placeholder={t('helperText.title')}
            />
          </Grid2>
          <Grid2 size={12}>
            <FormTextField
              autoFocus
              required
              multiline
              rows={4}
              name='body'
              label={t('fields.body')}
              placeholder={t('helperText.body')}
            />
          </Grid2>
          <Grid2 size={12}>
            <SelectUsers name='userId' label={t('fields.userId')} placeholder={t('helperText.userId')} />
          </Grid2>

        </Grid2>
      </Form>
    </Box>
  );
};

export default memo(PostForm);
