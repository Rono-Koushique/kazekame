"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";

interface RadioGroupProps
    extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
    options?: {
        label: string;
        value: string;
        Icon?: React.ComponentType<{}>;
    }[];
}

const AuthRadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    RadioGroupProps
>(({ className, options, onValueChange, value }, ref) => {
    return (
        <FormItem className={cn("space-y-3", className)}>
            <FormControl>
                <RadioGroup
                    onValueChange={onValueChange}
                    defaultValue={value}
                    className="flex flex-col space-y-1"
                    ref={ref}
                >
                    {options &&
                        options.map((option, idx) => {
                            const selected = value === option.value;
                            const { Icon } = option;

                            return (
                                <FormItem key={"role-option-" + idx}>
                                    <FormControl>
                                        <RadioGroupItem
                                            className="hidden"
                                            value={option.value}
                                        />
                                    </FormControl>
                                    <FormLabel>
                                        <div
                                            className={cn(
                                                "h-11 md:h-12 center rounded-sm whitespace-nowrap text-sm font-normal capitalize cursor-pointer center gap-4 transition-all duration-300 ease-in-out",
                                                selected &&
                                                    "bg-primary text-white",
                                                !selected &&
                                                    "bg-white hover:bg-primary hover:text-white"
                                            )}
                                        >
                                            <span className="text-lg">
                                                {Icon && <Icon />}
                                            </span>
                                            <span>{option.label}</span>
                                        </div>
                                    </FormLabel>
                                </FormItem>
                            );
                        })}
                </RadioGroup>
            </FormControl>
            <FormMessage />
        </FormItem>
    );
});

AuthRadioGroup.displayName = "AuthRadioGroup";
export { AuthRadioGroup };
