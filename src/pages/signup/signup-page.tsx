"use client";
import Image from "next/image";
import SignUpPage from "./signup-form";
import React, { useState } from "react";
import Button from "@/components/ui/button";
import SignInPage from "./signin-form";
import { cn } from "@/lib/utils";


const SignupPage = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={cn(`min-w-screen flex min-h-screen`, toggle ? "flex-row" : "flex-row-reverse")}>
            <div className="xl:py-0 py-24 xl:px-16 px-4 xl:basis-1/2 basis-full flex justify-center items-center flex-col">
                {!toggle ? (
                    <SignUpPage />
                ) : (
                    <SignInPage />
                )}
            </div>
            <div className="basis-1/2 relative min-h-screen h-full xl:flex hidden">
                <Image
                    src={"/login-page-image.jpg"}
                    width={1500}
                    height={3000}
                    className={cn("w-full object-top grayscale brightness-125 h-screen object-cover", !toggle ? "scale-x-[-1]" : "")}
                    alt="Signin/Signup page image"
                ></Image>
                <div className="w-full bg-primary h-screen absolute top-0 mix-blend-multiply" />
                <div className={cn("w-full bg-gradient-to-r h-screen absolute top-0", toggle ? "from-background to-transparent": "to-background from-transparent"  )}/>
                <div className="flex justify-center items-center flex-col gap-8 absolute mx-auto left-0 right-0 top-0 bottom-0 h-fit w-fit my-auto  ">
                    <h1 className="text-5xl text-center tracking-tight">
                        Welcome To <br />
                        <span className="text-primary">Website{"'"}s Name</span>
                    </h1>
                    <Button onClick={() => {setToggle(!toggle)}}  className="scale-105">
                        {!toggle ? "Sign In Instead" : "Sign Up Instead"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
