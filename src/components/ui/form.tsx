import React, { useState } from 'react';
import Button from './button';
interface FormFields {
  [key: string]: string;
}

interface FormProps<T extends FormFields> {
  fields: string[];
  onSubmit: (formData: T) => void;
  submitButtonText?: string;
}

const FormComponent = <T extends FormFields>({ fields, onSubmit, submitButtonText = 'Submit' }: FormProps<T>) => {
  const initialState: T = fields.reduce((acc, field) => {
    acc[field as keyof T] = '' as T[keyof T];
    return acc;
  }, {} as T);

  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((fieldName) => (
        <div key={fieldName}>
          <label htmlFor={fieldName}>{fieldName}</label>
          <input
            type={fieldName === 'password' ? 'password' : 'text'}
            id={fieldName}
            name={fieldName}
            value={formData[fieldName as keyof T]}
            onChange={handleChange}
          />
        </div>
      ))}
      <Button type="submit">{submitButtonText}</Button>
    </form>
  );
};

export default FormComponent;
