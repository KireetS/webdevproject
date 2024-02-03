import React from 'react';
import FormComponent from '@/components/ui/form';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const handleSignIn = (formData: SignInFormData) => {
    // Handle sign-in form submission
    console.log('Sign In form submitted:', formData);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <FormComponent fields={['email', 'password']} onSubmit={handleSignIn} submitButtonText="Sign In" />
    </div>
  );
};

export default SignInPage;
