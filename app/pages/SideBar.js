import Link from "next/link";
import React from "react";
import "primeicons/primeicons.css";

const Sidebar = () => {
  return (
    <aside className="text-gray-700 w-3/12 min-h-screen order-last border border-black rounded-lg m-2  <p>غوښتونلیکونه</p>">
      <div className="text-right p-3 m-5 font-sans">
        <Link href={"/"}>
          <p className="mt-1 p-2">
            عمومي کتنه
            <i className="pi pi-list p-2" style={{ color: "#000000" }}></i>
          </p>
        </Link>
        <Link href={"/application"}>
          <p className="mt-6 p-2">
            غوښتنلیکونه
            <i className="pi pi-file p-2" style={{ color: "#000000" }}></i>
          </p>
        </Link>
        <Link href={"/reports"}>
          <p className="mt-6 p-2">
            ریپوټونه
            <i
              className="pi pi-file-check p-2"
              style={{ color: "#000000" }}
            ></i>
          </p>
        </Link>
        <Link href={"/settings"}>
          <p className="mt-6 p-2">
            تنظیمات
            <i className="pi pi-cog p-2" style={{ color: "#000000" }}></i>
          </p>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
