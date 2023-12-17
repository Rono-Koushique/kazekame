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

const formSchema = z
    .object({
        username: z.string().min(1, "Username cant be empty").max(32),
        email: z.string().min(1, "Email cant be empty").email(),
        password: z.string().min(8, "Password min length 8").max(72),
        confirmPassword: z.string(),
        acceptTerms: z
            .boolean()
            .refine((val) => val, "You must agree our terms and conditions"),
        role: z.enum(["jobseeker", "company"], {
            required_error: "Select a user role",
        }),
    })
    .refine(({ confirmPassword, password }) => confirmPassword === password, {
        message: "Passwords dont match",
        path: ["confirmPassword"],
    });

type Props = {};

export default function RegisterForm({}: Props) {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
            role: "jobseeker",
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
                        name="role"
                        render={({ field }) => (
                            <AuthRadioGroup
                                options={[
                                    {
                                        label: "jobseeker",
                                        value: "jobseeker",
                                        Icon: Employee,
                                    },
                                    {
                                        label: "company",
                                        value: "company",
                                        Icon: Job,
                                    },
                                ]}
                                value={field.value}
                                onValueChange={field.onChange}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <AuthInput
                                className="mt-6"
                                placeholder="Username"
                                {...field}
                            />
                        )}
                    />
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
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <AuthInput
                                placeholder="Confirm Password"
                                type="password"
                                {...field}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="acceptTerms"
                        render={({ field }) => {
                            return (
                                <AuthCheckbox
                                    className="mt-5"
                                    label="Accept our terms and conditions and privacy policy"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            );
                        }}
                    />
                </div>
                <Button
                    className="mt-6 h-11 md:h-12 w-full rounded-sm"
                    type="submit"
                >
                    Register Now
                </Button>
                <div className="center mt-6">
                    <p className="text-xs xl:text-sm font-medium text-slate-500 leading-normal">
                        Already have an account?{" "}
                        <span
                            className="hover:underline text-purple-700 cursor-pointer"
                            onClick={() => router.push("/login")}
                        >
                            Login
                        </span>
                    </p>
                </div>
            </form>
        </Form>
    );
}
