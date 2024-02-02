"use client";
import React, { ComponentProps } from "react";
import { useForm, SubmitHandler, FormProps } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
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
        <Form {...form}>
            <form {...props} onSubmit={form.handleSubmit(onSubmit)}>
                <h1 className="text-2xl tracking-tight">
                    Sign in to{" "}
                    <span className="text-primary font-semibold">
                        Your Account
                    </span>
                </h1>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="youremail@gmail.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="************"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button variant={"default"} className="w-full" type="submit">
                    Sign In
                </Button>
            </form>
        </Form>
    );
};

export default SigninForm;
