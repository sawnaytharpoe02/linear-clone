import React, { PropsWithChildren } from "react";
import Container from "@/components/contianer";
import Image from "next/image";

interface HeroTitleProps {
  children: React.ReactNode;
}
export const HeroTitle = ({ children }: HeroTitleProps) => {
  return <div className="text-6xl md:text-8xl text-gradient my-6">{children}</div>;
};

interface HeroSubtitleProps {
  children: React.ReactNode;
}
export const HeroSubtitle = ({ children }: HeroSubtitleProps) => {
  return <div className="text-lg md:text-xl text-primary-text mb-12">{children}</div>;
};

export const Hero = ({ children }: PropsWithChildren) => {
  return <div className="text-center">{children}</div>;
};
