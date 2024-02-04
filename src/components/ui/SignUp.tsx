import React from "react";
import { FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./button";
export type signUpFormType ={
    name : string,
   email:string,
   password:string
   }

const SignUp =()=>{
  const {
    register,
    handleSubmit,
    reset,
    formState:{errors,isSubmitSuccessful}
}=useForm();


const signupform : SubmitHandler<FieldValues> = async(data,event) => {
    console.log("Logging data", data);
    console.log(event);
    if(isSubmitSuccessful){
        reset({
            UserName:'',
            email:"",
            Password:"",                
        })
    }
    try{
        console.log(data)
    }
    catch(error){

    }
}
return(
    <div>
        <form onSubmit={handleSubmit(signupform)}>
            <div className="flex flex-col mx-auto gap-4">
                {/* UserName */}
                <div className="flex flex-col gap-3 w-full ">
                    <label htmlFor='UserName' className="text-bold text-xl text-white">UserName</label>
                    <input  
                        type="text" 
                        placeholder="Write Your UserName"
                        className="text-black rounded-lg p-2"
                        {...register("UserName", {required: true})}
                    />
                    {errors.UserName && (
                        <span>
                            enter your correct UserName
                        </span>
                    )} 
                </div>
                    {/* email */}
                <div className="flex flex-col gap-3 w-full">
                    <label htmlFor='email' className="text-bold text-xl text-white">Email</label>
                    <input  
                        type="email" 
                        placeholder="Write Your Email"
                        className="text-black rounded-lg p-2"
                        {...register("email", { 
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Email address is not valid.",
                            }
                        })}
                    />
                    {errors.email && (
                        <span>
                            enter your correct email
                        </span>
                    )} 
                </div>
                {/* Password */}
                <div className="flex flex-col gap-3 w-full">
                    <label htmlFor='Password' className="text-bold text-xl text-white" >Password</label>
                    <input  
                        type="Password" 
                        
                        placeholder="Password"
                        className="text-black rounded-lg p-2"
                        {...register("Password", {required: true})}
                    />
                    {errors.Password && (
                        <span>
                            enter your correct Password
                        </span>
                    )} 
                </div>
                {/* Button */}
                <Button className="flex justify-center"  type = "submit" >
                    Sign Up
                </Button>
            </div>
            
        </form>
    </div>
)
}
 
export default SignUp