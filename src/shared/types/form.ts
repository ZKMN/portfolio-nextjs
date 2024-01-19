import {
  DefaultValues,
  FieldValues,
  UseFormHandleSubmit,
  UseFormProps,
} from 'react-hook-form';
import * as Yup from 'yup';

export enum FieldTypes {
  Text = 'text',
  Textarea = 'textarea'
}

export interface IFieldProps {
  type: FieldTypes;
  name: string;
  label: string;
  required?: boolean;
}

export interface IFormProps<T extends FieldValues> extends UseFormProps<T> {
  fields: IFieldProps[];
  loading?: boolean;
  initialValues: DefaultValues<T>;
  validationSchema: Yup.ObjectSchema<T>;
  onSubmit: SubmitFn<T>;
}

export type SubmitFn<T extends FieldValues> = Parameters<UseFormHandleSubmit<T, T>>[0];
