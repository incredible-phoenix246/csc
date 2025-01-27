"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/utils";
import { Call, Location } from "iconsax-react";
const SideNavigation = () => {
  const [isActive, setisActive] = useState("");
  const pathName = usePathname();

  useEffect(() => {
    const currentPath = pathName?.replace(/^\/([^\/]+).*$/, "$1");

    setisActive(currentPath.trim());
  }, [pathName]);

  return (
    <section className="bg-blue-main  z-[50] w-[0px] md:w-[96px] min-[1140px]:w-[270px] hover:w-[270px] transition-all duration-300 py-4  hidden md:flex flex-col gap-y-4 items-center justify-between min-[1140px]:items-start fixed h-screen left-0 top-0 overflow-y-auto border-r border-blue-main  sidebar-scroll overflow-x-hidden group select-none">
      <Link href="/" className="w-full h-[53px] items-center justify-center">
        <Image src="/logo2.webp" alt="Logo" width={155} height={53} />
        <span className="text-base font-medium text-white text-center">
          CSPPP
        </span>
      </Link>
      <ul className="flex flex-col gap-y-4 pt-8 w-full justify-end items-end min-[1140px]:p-4  hover:p-4 ">
        {NAV_LINKS.map((link) => (
          <Link
            href={`/${link.link}`}
            aria-current={isActive === link.link ? "page" : undefined}
            key={link.id}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setisActive(link.link);
                return;
              }
            }}
            tabIndex={0}
            aria-label={link.label}
            className={cn(
              "flex items-end text-end capitalize gap-x-3 py-2 px-3 h-[52px] text-white font-medium text-[24px] leading-[24px]  transition-colors duration-300 cursor-pointer",
              isActive === link.link
                ? "bg-white  text-blue-main rounded outline-none"
                : "hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-main/50"
            )}
            onClick={() => setisActive(link.link)}
          >
            <span className=" max-[1139px]:hidden group-hover:block w-[185px] text-end">
              {link.label}
            </span>
          </Link>
        ))}
        <span className="bg-white w-full max-w-[245px] h-[1px] " />
      </ul>
      <div className="flex flex-col w-full gap-y-6 xl:gap-y-8 pt-4 items-end bg-[#052C42] min-[1140px]:p-4 min-h-[200px]">
        <Link
          href="/contacts"
          role="button"
          tabIndex={0}
          aria-label="contactss"
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setisActive("contactss");
              return;
            }
          }}
          className={cn(
            "flex items-end text-end gap-x-3 py-2 px-3 h-[52px] text-white font-medium text-[24px] leading-[24px]  transition-colors duration-300 cursor-pointer ",
            isActive === "contacts"
              ? "bg-white text-blue-main rounded outline-none"
              : "hover:bg-black/10 dark:hover:bg-color-dark/10  focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
          )}
          onClick={() => setisActive("contacts")}
        >
          <Call />
          <span className=" max-[1139px]:hidden group-hover:block text-end">
            Contact us
          </span>
        </Link>
        <Link
          href="/location"
          role="button"
          tabIndex={0}
          aria-label="location"
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setisActive("location");
              return;
            }
          }}
          className={cn(
            "flex items-end text-end gap-x-3 py-2 px-3 h-[52px] text-white font-medium text-[24px] leading-[24px]  transition-colors duration-300 cursor-pointer ",
            isActive === "location"
              ? "bg-white text-blue-main rounded outline-none"
              : "hover:bg-black/10 dark:hover:bg-color-dark/10  focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
          )}
          onClick={() => setisActive("location")}
        >
          <Location />
          <span className=" max-[1139px]:hidden group-hover:block text-end">
            Location
          </span>
        </Link>
      </div>
    </section>
  );
};

export { SideNavigation };
