"use client";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps
    extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    label?: string;
}

const AuthCheckbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(({ className, checked, onCheckedChange, label }, ref) => {
    return (
        <FormItem>
            <FormControl>
                <div className={cn("flex items-center gap-3", className)}>
                    <Checkbox
                        className="bg-background border-slate-600"
                        checked={checked}
                        onCheckedChange={onCheckedChange}
                        ref={ref}
                    />
                    <label
                        htmlFor="terms"
                        className="text-xs xl:text-sm font-medium text-slate-500 leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                    </label>
                </div>
            </FormControl>
            <FormMessage className="!text-xs !mt-2 !text-right" />
        </FormItem>
    );
});

AuthCheckbox.displayName = "AuthCheckbox";
export { AuthCheckbox };
