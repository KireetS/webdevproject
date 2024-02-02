"use client";
import React, { ComponentProps } from "react";
import { useForm, SubmitHandler, FormProps } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import  Button  from "@/components/ui/button";
import {
    Form,
  
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    email: z
        .string()
        .email({ message: "Email must be in a valid email format." }),
    password: z
        .string()
        .min(8, { message: "Password must be atleast 8 characters." }),
});

interface SigninFormProps {
    className?: string;
}

const SigninForm: React.FunctionComponent<SigninFormProps> = (
    props: SigninFormProps
) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        // TODO: login user here using the form values
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

export default SigninForm;
