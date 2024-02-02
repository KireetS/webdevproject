import { cn } from "@/lib/utils";
import React from "react";


export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  specialProp?: string;
}
export default function Button(props: ButtonProps) {
  const { className, ...rest } = props;
  
  return <button className={cn("py-2 px-6 rounded-lg bg-primary",className)} {...rest} />;
}