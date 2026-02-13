import type { IFieldProps } from '@/shared/types';
import { FieldTypes } from '@/shared/types';

import {
  FormInput,
  FormTextarea,
} from '../Fields';

export const FieldByType = ({ field }: { field: IFieldProps; }) => {
  const {
    name,
    label,
    required,
  } = field;

  switch (field.type) {
    case FieldTypes.Text:
      return (
        <FormInput
          name={name}
          label={label}
          required={required}
        />
      );
    case FieldTypes.Textarea:
      return (
        <FormTextarea
          name={name}
          label={label}
          required={required}
        />
      );
    default:
      return null;
  }
};
