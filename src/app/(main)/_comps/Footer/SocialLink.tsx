import React from "react";

type Props = {
    Icon?: React.ComponentType<{}>;
    href?: string;
};

export default function SocialLink({ Icon, href }: Props) {
    return (
        <div className="h-10 md:h-12 aspect-square rounded-full border-2 border-white center hover:bg-purple-700 hover:border-purple-700 transition-all duration-500 ease-in-out cursor-pointer">
            {Icon && (
                <p className="text-white text-sm">
                    <Icon />
                </p>
            )}
        </div>
    );
}
