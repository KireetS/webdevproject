import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./button";
export type signUpFormType = {
    name: string;
    email: string;
    password: string;
};

const SignIn = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    const signInform: SubmitHandler<FieldValues> = async (data, event) => {
        console.log("Logging data", data);
        console.log(event);
        if (isSubmitSuccessful) {
            reset({
                email: "",
                Password: "",
            });
        }
        try {
            console.log(data);
        } catch (error) {}
    };
    return (
        <div>
            <form onSubmit={handleSubmit(signInform)}>
                <div className="mx-auto flex flex-col justify-center gap-6">
                    {/* email */}
                    <div className="flex flex-col w-full gap-2 ">
                        <label
                            htmlFor="email"
                            className="text-bold text-xl text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Write Your Email"
                            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Email address is not valid.",
                                },
                            })}
                        />
                        {errors.email && <span className="text-destructive text-xs">Enter a valid email.</span>}
                    </div>
                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="Password"
                            className="text-bold text-xl text-white"
                        >
                            Password
                        </label>
                        <input
                            type="Password"
                            placeholder="Password"
                            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            {...register("Password", { required: true })}
                        />
                        {errors.Password && (
                            <span className="text-destructive text-xs">Enter a valid password.</span>
                        )}
                    </div>
                    {/* Button */}
                    <Button className="flex justify-center " type="submit">
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
