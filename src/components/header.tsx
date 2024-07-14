import React from "react";
import Link from "next/link";
import { Logo } from "@/components/icons";
import Container from "@/components/contianer";
import Button from "@/components/button";

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
  return (
    <header className="fixed left-0 top-0 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex items-center h-navigation-height">
        <Link className="flex items-center mr-6 text-md bold" href="/">
          <Logo /> Linear
        </Link>

        <nav>
          <ul className="flex items-center space-x-6 [&_a]:text-sm [&_a:hover]:text-grey [&_a]:transition-colors">
            {NavLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex ml-auto">
          <Button variant="transparent">Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
