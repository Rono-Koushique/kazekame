"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
});

type Props = {};

export default function NewsletterForm({}: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                autoComplete="off"
                className="h-14 xl:h-[4rem] w-full lg:w-1/2 rounded-sm bg-background p-1"
            >
                <div className="h-full flex">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="grow">
                                <FormControl>
                                    <Input
                                        className="h-full px-5 xl:h-full border-none outline-none"
                                        placeholder="Enter your email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="h-full lg:w-[9rem] xl:w-[12rem] rounded-sm bg-purple-950">
                        Subscribe Now
                    </Button>
                </div>
            </form>
        </Form>
    );
}
