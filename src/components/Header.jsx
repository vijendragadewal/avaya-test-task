import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between bg-white p-10">
      <Image src={Logo} />
      <div>
        <ul className="flex flex-row gap-4">
          <li className="text-gray-900">Solutions</li>
          <li className="text-gray-900">use cases</li>
          <li className="text-gray-900">about</li>
        </ul>
      </div>
      <div className="flex flex-row">
        <button className="request-demo-btn ">Request Demo</button>
      </div>
    </div>
  );
}
