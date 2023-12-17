import React from "react";
import PageHeader from "../_comps/PageHeader";
import AuthCard from "../_comps/AuthCard";
import LoginForm from "./_comps/LoginForm";

type Props = {};

export default function page({}: Props) {
    return (
        <main>
            <PageHeader
                title="Register Page"
                paths={[
                    { label: "home", href: "/" },
                    { label: "login", href: "/login" },
                ]}
            />

            <section>
                <div className="py-20 xl:py-28">
                    <div className="container">
                        <AuthCard title="Sign In" className="mx-auto">
                            <LoginForm />
                        </AuthCard>
                    </div>
                </div>
            </section>
        </main>
    );
}
