/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  FieldValues,
  FormProvider,
  Resolver,
  useForm,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';

import { IFormProps } from '@/shared/types';

import { FieldByType } from './components';

export const Form = <T extends FieldValues>({
  fields,
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: React.PropsWithChildren<IFormProps<T>>) => {
  const form = useForm<T>({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: yupResolver<T>(validationSchema) as unknown as Resolver<T>,
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <FormProvider {...form}>
          <Grid container spacing={1}>
            {fields.map((field) => (
              <Grid item xs={12} key={field.name}>
                <FieldByType field={field} />
              </Grid>
            ))}
          </Grid>

          {children}

          <Grid
            container
            mt={3}
            justifyContent="end"
          >
            <Button
              color="primary"
              variant="outlined"
              onClick={form.handleSubmit(onSubmit)}
              sx={{ textTransform: 'none' }}
            >
              Send Message
            </Button>
          </Grid>
        </FormProvider>
      </Grid>
    </Grid>
  );
};
