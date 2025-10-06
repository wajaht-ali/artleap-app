"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Common/Navbar";

export default function ClientLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const hideNavFooterRoutes = ["/auth/login", "/auth/signup"];
    const shouldHideNavFooter = hideNavFooterRoutes.includes(pathname);

    return (
        <>
            {!shouldHideNavFooter && <Navbar />}
            <main className="min-h-[calc(100vh-200px)]">{children}</main>
        </>
    );
}
