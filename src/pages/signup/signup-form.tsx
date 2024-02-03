import React from "react";
import SignUp from "@/components/ui/SignUp";

const SignUpPage = ()=>{
  return(
    <div className="space-y-6 w-full max-w-[380px] border-primary/50 hover:border-primary border hover:shadow-2xl hover:shadow-primary/20 rounded-xl lg:p-12 lg:pt-10 p-6 pt-5 transition-all duration-300 ease-in-out" >
      <h2 className="text-bold text-5xl">Sign Up</h2>
      <SignUp></SignUp>
    </div>
  )
}
export default SignUpPage