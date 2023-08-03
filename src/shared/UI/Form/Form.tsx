import {
  DefaultValues,
  FieldValues,
  useForm,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import * as Yup from 'yup';

import { IField, IFieldExtends } from '@/shared/types';

import { FieldByType } from './components';

type TestParams<T extends FieldValues> = Parameters<UseFormHandleSubmit<T, T>>;

interface IForm<T extends FieldValues> {
  fields: IField[];
  onSubmit: TestParams<T>[0];
  validationSchema: Yup.ObjectSchema<T>;
  initialValues: DefaultValues<T>;
}

export function Form<T extends FieldValues>({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
}: IForm<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          {fields.map((field) => (
            <Grid item xs={12} sm={12} key={field.name}>
              <FieldByType
                field={field}
                errors={errors}
                register={register as IFieldExtends['register']}
              />
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          mt={3}
          justifyContent="end"
        >
          <Button
            color="primary"
            variant="outlined"
            onClick={handleSubmit(onSubmit)}
            sx={{ textTransform: 'none' }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
