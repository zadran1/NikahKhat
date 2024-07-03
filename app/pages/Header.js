import Link from "next/link";
import "primeicons/primeicons.css";
const Header = () => {
  return (
    <nav className=" text-white p-4 flex justify-between items-center m-2  font-sans">
      <div className="">
        <Link href={"/"}>
          {" "}
          <i className="pi pi-user mr-5" style={{ color: "#000000" }}></i>
        </Link>
        <Link href={"/"}>
          {" "}
          <i className="pi pi-bell" style={{ color: "#000000" }}></i>
        </Link>
      </div>

      <h1 className="text-blue-500 font-bold text-2xl">
        د نکاه خط تنظیمونکی سیستم
      </h1>
    </nav>
  );
};

export default Header;
