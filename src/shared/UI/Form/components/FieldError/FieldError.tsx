import { FieldValues } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

import { IFieldErrorProps } from '@/shared/types';

export const FieldError = <T extends FieldValues, >({ name, errors }: IFieldErrorProps<T>) => (
  <FormHelperText>
    {errors[name]?.message as React.ReactNode}
  </FormHelperText>
);
