import React from "react";
import SignIn from "@/components/ui/SignIn";


const SignInPage = ()=>{
  return(
    <div  className="flex-col space-y-6 w-full max-w-[380px] border-primary/50 hover:border-primary border hover:shadow-2xl hover:shadow-primary/20 rounded-xl lg:p-12 lg:pt-10 p-6 pt-5 transition-all duration-300 ease-in-out">
      <h1 className="text-bold text-5xl">Sign In </h1>
      <SignIn></SignIn>
    </div>
  )
}
export default SignInPage