import React from "react";
import { createContext, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

type SidebarContextType = {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarProvider({
    children,
    ...props
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <SidebarContext.Provider value={{ isOpen, setOpen }} {...props}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const sidebar = useContext(SidebarContext);
    if (!sidebar) {
        throw new Error("useSidebar must be used within an SidebarProvider");
    }
    return { ...(sidebar as SidebarContextType) };
}
