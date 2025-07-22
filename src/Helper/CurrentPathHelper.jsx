'use client';
import { usePathname } from "next/navigation";

export default function isAuthPath() {
    const pathname = usePathname();
    if (pathname === "/auth/login" || pathname === "/auth/register") {
        return <section></section>
    } else {
        return <section className="g-sidenav-show  bg-gray-100"></section>;
    }
}