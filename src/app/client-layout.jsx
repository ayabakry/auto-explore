"use client";

import { usePathname } from "next/navigation";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = ["/Login", "/signup"].includes(pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
