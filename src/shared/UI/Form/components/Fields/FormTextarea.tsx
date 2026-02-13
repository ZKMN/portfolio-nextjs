import { useFormContext } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';

import type { IFieldProps } from '@/shared/types';

import { FieldError } from '../FieldError';

export const FormTextarea = ({
  name,
  label,
  required,
}: Omit<IFieldProps, 'type'>) => {
  const { register, formState: { errors } } = useFormContext();

  const { ref, onBlur, onChange } = register(name, { required });

  const error = Boolean(errors[name]);

  return (
    <FormControl
      fullWidth
      error={error}
      required={required}
    >
      <TextField
        multiline
        id={name}
        ref={ref}
        rows={3}
        name={name}
        label={label}
        error={error}
        onBlur={onBlur}
        onChange={onChange}
        required={required}
        variant="standard"
      />

      <FieldError
        name={name}
        errors={errors}
      />
    </FormControl>
  );
};
