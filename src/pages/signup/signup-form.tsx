"use client";
import React, { ComponentProps } from "react";
import { useForm, SubmitHandler, FormProps } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button  from "@/components/ui/button";
import {
    Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters." }),
    name: z
        .string()
        .min(3, { message: "Name must be at least 3 characters." })
        .max(200, { message: "Name must be at most 200 characters." }),
    email: z
        .string()
        .email({ message: "Email must be in a valid email format." }),
    password: z
        .string()
        .min(8, { message: "Password must be atleast 8 characters." }),
});

interface SignupFormProps {
    className?: string;
}

const SignupForm: React.FunctionComponent<SignupFormProps> = (
    props: SignupFormProps
) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            name: "",
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        // TODO: register user here using the "values"
        console.log(values);
    }
    return (
        <>
        <Form onSubmit=
            {()=>{

            }}
        >
            <h1></h1>
        </Form>
    </>
    );
};

export default SignupForm;
