import { FieldTypes, IField, IFieldExtends } from '@/shared/types';

import {
  FormInput,
  FormTextarea,
} from './Fields';

interface IFieldByType extends IFieldExtends {
  field: IField;
}

export function FieldByType({
  field,
  errors,
  register,
}: IFieldByType) {
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
          errors={errors}
          required={required}
          register={register}
        />
      );
    case FieldTypes.Textarea:
      return (
        <FormTextarea
          name={name}
          label={label}
          errors={errors}
          required={required}
          register={register}
        />
      );
    default:
      return null;
  }
}
