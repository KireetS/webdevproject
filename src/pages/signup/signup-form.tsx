import React from 'react';
import FormComponent from '@/components/ui/form';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const handleSignUp = (formData: SignUpFormData) => {
    // Handle sign-up form submission
    console.log('Sign Up form submitted:', formData);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <FormComponent fields={['name', 'email', 'password']} onSubmit={handleSignUp} submitButtonText="Sign Up" />
    </div>
  );
};

export default SignUpPage;
