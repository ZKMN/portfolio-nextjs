import type { FieldValues } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

import type { IFieldErrorProps } from '@/shared/types';

export const FieldError = <T extends FieldValues, >({ name, errors }: IFieldErrorProps<T>) => (
  <FormHelperText>
    {errors[name]?.message as React.ReactNode}
  </FormHelperText>
);
