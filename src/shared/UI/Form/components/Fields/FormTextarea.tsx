import { FormControl, Input, InputLabel } from '@mui/material';

import { IField, IFieldExtends } from '@/shared/types';

import { FieldError } from '../FieldError';

export function FormTextarea({
  name,
  label,
  errors,
  required,
  register,
}: Omit<IField, 'type'> & IFieldExtends) {
  const registered = register(name);

  return (
    <FormControl
      fullWidth
      error={!!errors[name]}
      variant="standard"
      required={required}
    >
      <InputLabel
        shrink
        htmlFor={name}
        sx={{ color: 'white.main' }}
      >
        {label}
      </InputLabel>

      <Input
        multiline
        rows={3}
        id={name}
        name={name}
        ref={registered.ref}
        onBlur={registered.onBlur}
        onChange={registered.onChange}
      />

      <FieldError
        name={name}
        errors={errors}
      />
    </FormControl>
  );
}
