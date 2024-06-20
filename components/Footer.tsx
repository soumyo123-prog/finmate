"use client";

import Image from "next/image";
import React from "react";
import { logout } from "../lib/actions/user.actions";
import { useRouter } from "next/navigation";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    const loggedOut = await logout();
    if (loggedOut) {
      router.push("/login");
    }
  };

  return (
    <footer className="footer">
      <div
        className={`${
          type === "mobile" ? "footer_name-mobile" : "footer_name"
        }`}
      >
        <p className="text-xl font-bold text-gray-700">{user.firstName[0]}</p>
      </div>
      <div
        className={`${
          type === "mobile" ? "footer_email-mobile" : "footer_email"
        }`}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogout}>
        <Image src="/icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};

export default Footer;
