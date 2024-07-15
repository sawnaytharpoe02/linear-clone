"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HamburgerMenu, Logo } from "@/components/icons";
import Container from "@/components/contianer";
import Button from "@/components/button";
import { cn } from "@/utils";

const NavLinks = [
  { title: "Features", href: "#" },
  { title: "Method", href: "#" },
  { title: "Customers", href: "#" },
  { title: "Changelog", href: "#" },
  { title: "Integrations", href: "#" },
  { title: "Pricing", href: "#" },
  { title: "Company", href: "#" },
];

const Header = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const doc = document.querySelector("html");
    if (doc) doc.classList.toggle("overflow-hidden", hamburgerMenuOpen);
  }, [hamburgerMenuOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height items-center">
        <Link className="bold mr-6 flex items-center text-md" href="/">
          <Logo /> Linear
        </Link>

        <nav
          className={cn(
            "fixed left-0 top-navigation-height z-20 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-300 ease-in",
            "lg:relative lg:top-0 lg:h-auto lg:w-auto lg:bg-transparent lg:opacity-100 lg:transition-none lg:translate-x-0",
            hamburgerMenuOpen ? "translate-x-0 opacity-100" : "translate-x-[100vw] opacity-0",
          )}
        >
          <ul
            className={cn(
              "flex flex-col [&_a:hover]:text-grey [&_a]:ml-6 [&_a]:text-md [&_a]:transition-colors [&_li]:border-b [&_li]:border-transparent-white [&_li]:py-4",
              "lg:flex-row lg:space-y-0 [&_a]:lg:text-sm [&_li]:lg:border-none",
            )}
          >
            {NavLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex md:space-x-2">
          <Button variant="transparent">Log In</Button>
          <Button>Sign Up</Button>
        </div>
        {/* hamburger menu */}
        <div
          className="ml-5 inline-block cursor-pointer lg:hidden"
          onClick={() => setHamburgerMenuOpen((prev) => !prev)}
        >
          <HamburgerMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
