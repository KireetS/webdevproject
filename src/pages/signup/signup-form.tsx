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
        <Form {...form}>
            <form
                {...props}
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <h1 className="text-2xl tracking-tight">
                    Make a <span className="text-primary font-semibold">New Account</span>
                </h1>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Full Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Your_Username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                    Sign Up
                </Button>
            </form>
        </Form>
    );
};

export default SignupForm;
