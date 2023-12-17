"use client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthInput } from "@/components/utilities/FieldInput";
import { AuthCheckbox } from "@/components/utilities/FieldCheckbox";
import { AuthRadioGroup } from "@/components/utilities/FieldRadioGroup";
import { Employee, Job } from "@/components/icon";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    email: z.string().min(1, "Email cant be empty").email(),
    password: z.string().min(8, "Password min length 8").max(72),
    remember: z.boolean(),
});

type Props = {};

export default function LoginForm({}: Props) {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
                <div className="mt-8 flex flex-col gap-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <AuthInput placeholder="Email" {...field} />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <AuthInput
                                placeholder="Password"
                                type="password"
                                {...field}
                            />
                        )}
                    />
                    <div className="mt-5 flex items-center justify-between">
                        <FormField
                            control={form.control}
                            name="remember"
                            render={({ field }) => {
                                return (
                                    <AuthCheckbox
                                        label="Remember Me"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                );
                            }}
                        />

                        <p
                            className="text-xs xl:text-sm font-medium leading-normal hover:underline text-purple-700 cursor-pointer"
                            onClick={() => router.push("/reset-password")}
                        >
                            Forgot Password?
                        </p>
                    </div>
                </div>
                <Button
                    className="mt-6 h-11 md:h-12 w-full rounded-sm"
                    type="submit"
                >
                    Sign In
                </Button>
                <div className="center mt-6">
                    <p className="text-xs xl:text-sm font-medium text-slate-500 leading-normal">
                        Don&apos;t you have an account?{" "}
                        <span
                            className="hover:underline text-purple-700 cursor-pointer"
                            onClick={() => router.push("/register")}
                        >
                            Register
                        </span>
                    </p>
                </div>
            </form>
        </Form>
    );
}
