import React from "react";
import PageHeader from "../_comps/PageHeader";
import AuthCard from "../_comps/AuthCard";
import RegisterForm from "./_comps/RegisterForm";

type Props = {};

export default function page({}: Props) {
    return (
        <main>
            <PageHeader
                title="Register Page"
                paths={[
                    { label: "home", href: "/" },
                    { label: "register", href: "/register" },
                ]}
            />

            <section>
                <div className="py-20 xl:py-28">
                    <div className="container">
                        <AuthCard title="Register Now" className="mx-auto">
                            <RegisterForm />
                        </AuthCard>
                    </div>
                </div>
            </section>
        </main>
    );
}
