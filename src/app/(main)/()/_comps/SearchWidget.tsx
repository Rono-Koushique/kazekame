"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Search } from "@/components/icon";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BaseInput } from "@/components/utilities/FieldInput";

const formSchema = z.object({
    title: z.string().max(50).optional(),
    country: z.string().optional(),
    category: z.string().optional(),
});

type Props = {};

export default function SearchWidget({}: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            title: "",
            country: "",
            category: "",
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-3 max-w-screen-sm lg:max-w-screen-lg mx-auto"
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <BaseInput
                            className="lg:col-span-3"
                            placeholder="Job title or keywords"
                            {...field}
                        />
                    )}
                />
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <BaseInput
                            className="lg:col-span-3"
                            placeholder="Choose country"
                            {...field}
                        />
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <BaseInput
                            className="lg:col-span-3"
                            placeholder="Category"
                            {...field}
                        />
                    )}
                />
                <Button className="h-14 xl:h-full rounded-sm" type="submit">
                    <Search className="text-xl" />
                </Button>
            </form>
        </Form>
    );
}
