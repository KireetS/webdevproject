import React from "react";
import {
    FieldValue,
    FieldValues,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import Button from "./button";
export type signUpFormType = {
    name: string;
    email: string;
    password: string;
};

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, touchedFields },
    } = useForm();

    const signupform: SubmitHandler<FieldValues> = async (data, event) => {
        console.log("Logging data", data);
        console.log(event);
        if (isSubmitSuccessful) {
            reset({
                UserName: "",
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
            <form onSubmit={handleSubmit(signupform)}>
                <div className="flex flex-col mx-auto gap-6">
                    {/* UserName */}
                    <div className="flex flex-col gap-2 w-full ">
                        <label
                            htmlFor="UserName"
                            className="text-semibold text-base"
                        >
                            UserName
                        </label>
                        <input
                            type="text"
                            placeholder="Write Your UserName"
                            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            {...register("UserName", { required: true })}
                        />
                        {errors.UserName && (
                            <span className="text-destructive text-xs">
                                Enter a valid username.
                            </span>
                        )}
                    </div>
                    {/* email */}
                    <div className="flex flex-col gap-2 w-full">
                        <label
                            htmlFor="email"
                            className="text-semibold text-base"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Write Your Email"
                            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Email address is not valid.",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-destructive text-xs">
                                Enter a valid email.
                            </span>
                        )}
                    </div>
                    {/* Password */}
                    <div className="flex flex-col gap-2 w-full">
                        <label
                            htmlFor="Password"
                            className="text-semibold text-base"
                        >
                            Password
                        </label>
                        <input
                            type="Password"
                            placeholder="Password"
                            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            {...register("Password", { required: true })}
                        />
                        {errors.Password && (
                            <span className="text-destructive text-xs">
                                Enter a valid password.
                            </span>
                        )}
                    </div>
                    {/* Button */}
                    <Button className="flex justify-center" type="submit">
                        Sign Up
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
