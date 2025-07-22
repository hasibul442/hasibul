import { Suspense } from "react";
import Navbar from "../include/Navbar";

export default function AppLayout({ children }) {
  return (
    <>
        <body className="g-sidenav-show bg-gray-100">
      <Suspense>
          <Navbar />
        {children}
      </Suspense>
        </body>
    </>
  );
}