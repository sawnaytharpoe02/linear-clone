import React from "react";
import Container from "@/components/contianer";
import Link from "next/link";
import { GithubIcon, Logo, SlackIcon, TwitterIcon } from "./icons";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Brand", href: "#" },
      { title: "Customers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-transparent-white py-12">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div className="flex flex-row items-center justify-between lg:flex-col lg:items-start">
          <div className="flex items-center">
            <Logo />
            <span className="text-sm text-grey md:text-md">
              Linear - Designed worldwide
            </span>
          </div>
          <div className="ease flex items-center text-grey [&_svg:hover]:text-white [&_svg]:ml-4 [&_svg]:cursor-pointer [&_svg]:transition-colors [&_svg]:duration-300 [&_svg]:lg:mr-4">
            <TwitterIcon />
            <GithubIcon />
            <SlackIcon />
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((footerLinks, i) => {
            return (
              <div
                key={i}
                className="mt-12 min-w-[50%] text-sm lg:mt-0 lg:min-w-[18rem]"
              >
                <h4 className="mb-2 text-white">{footerLinks.title}</h4>
                <ul className="ease space-y-2 duration-300 [&_a:hover]:text-white [&_a]:text-grey [&_a]:transition-colors">
                  {footerLinks.links.map((item) => {
                    return (
                      <li>
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
