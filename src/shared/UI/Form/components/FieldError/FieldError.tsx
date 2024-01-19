import React from 'react';
import { FormHelperText } from '@mui/material';

import { IField, IFieldExtends } from '@/shared/types';

interface IFieldError {
  name: IField['name'];
  errors: IFieldExtends['errors'];
}

export const FieldError = ({ name, errors }: IFieldError) => (
  <FormHelperText>
    {errors[name]?.message as React.ReactNode}
  </FormHelperText>
);
