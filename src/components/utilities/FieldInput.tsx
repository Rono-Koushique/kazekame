import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import React from "react";

const AuthInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...rest }, ref) => {
        return (
            <FormItem className={className}>
                <FormControl>
                    <Input
                        className="h-11 md:h-14 px-5 text-xs xl:text-sm shadow-[0px_0px_2px] border-none outline-none outline-offset-0 focus:outline focus:outline-purple-500 autofill:bg-white shadow-black/5 transition-all duration-300 ease-in-out"
                        {...rest}
                        ref={ref}
                    />
                </FormControl>
                <FormMessage className="!text-xs !mt-1 !text-right" />
            </FormItem>
        );
    }
);

AuthInput.displayName = "AuthInput";

const BaseInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...rest }, ref) => {
        return (
            <FormItem className={className}>
                <FormControl>
                    <Input
                        className="h-14 xl:h-[4rem] px-6 text-sm shadow-[0px_0px_2px] border-none outline-none outline-offset-0 focus:outline focus:outline-purple-500 shadow-black/5 transition-all duration-300 ease-in-out"
                        {...rest}
                        ref={ref}
                    />
                </FormControl>
                <FormMessage className="!text-xs !mt-1 !text-right" />
            </FormItem>
        );
    }
);

BaseInput.displayName = "BaseInput";

export { AuthInput, BaseInput };
