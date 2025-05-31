export interface RedotPayFormData {
  gmail: string;
  telegram: string;
  comment: string;
}

export interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: "email" | "text";
  optional?: boolean;
}
