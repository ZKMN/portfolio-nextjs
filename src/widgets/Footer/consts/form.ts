import { FieldTypes } from '@/shared/types';

export const FIELDS = [{
  type: FieldTypes.Text,
  name: 'subject',
  label: 'Subject',
  required: true,
}, {
  type: FieldTypes.Text,
  name: 'email',
  label: 'Email',
  required: true,
}, {
  type: FieldTypes.Textarea,
  name: 'message',
  label: 'Message',
  required: true,
}];
