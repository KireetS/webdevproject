import React from "react";
import { Children } from 'react';

type CustomTextFieldProps = {
  onSubmit:(event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  
}


export const Form:React.FC<CustomTextFieldProps> =({onSubmit,children})=> {
  return(
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}