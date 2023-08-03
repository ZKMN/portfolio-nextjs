import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export enum FieldTypes {
  Text = 'text',
  Textarea = 'textarea'
}

export interface IField {
  type: FieldTypes;
  name: string;
  label: string;
  required?: boolean;
}

export interface IFieldExtends {
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}
