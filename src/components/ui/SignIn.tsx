import React, {useEffect} from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./button";
export type signUpFormType ={
    name : string,
   email:string,
   password:string
   }


const SignIn =()=> {
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitSuccessful}
    }=useForm();

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                email:"",
                Password:"",                
            })
        }
    },[reset,isSubmitSuccessful]);

    const signInform : SubmitHandler<FieldValues> = async(data,event) => {
        console.log("Logging data", data);
        console.log(event)
        try{
            console.log(data)
        }
        catch(error){
    
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit(signInform)}>
                <div className="mx-auto flex flex-col justify-center gap-4">
                    {/* email */}
                    <div className="flex flex-col w-full gap-2 ">
                            <label htmlFor='email' className="text-bold text-xl text-white" >Email</label>
                            <input  
                                type="email" 
                                placeholder="Write Your Email"
                                className="text-black rounded-lg p-2 w-full"
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
                    <div className="flex flex-col gap-2">
                            <label htmlFor='Password' className="text-bold text-xl text-white" >Password</label>
                            <input  
                                type="Password" 
                                placeholder="Password"
                                className="text-black rounded-lg p-2 w-full"
                                {...register("Password", {required: true})}
                            />
                            {errors.Password && (
                                <span>
                                    enter your correct Password
                                </span>
                            )} 
                    </div>
                    {/* Button */}
                    <Button className="flex justify-center " type="submit" >
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn