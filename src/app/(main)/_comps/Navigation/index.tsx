"use client";
import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "./SidebarContext";

type Props = {};

export default function index({}: Props) {
    return (
        <SidebarProvider>
            <Topbar />
            <Sidebar />
        </SidebarProvider>
    );
}
