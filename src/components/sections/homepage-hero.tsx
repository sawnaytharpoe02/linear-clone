import React from "react";
import { Hero, HeroTitle, HeroSubtitle } from "@/components/hero";
import Container from "@/components/contianer";
import Image from "next/image";
import Button from "@/components/button";
import { ChevronRight } from "../icons";

const HomePageHero = () => {
  return (
    <Container className="flex flex-col justify-center pt-[6.4rem] mt-navigation-height">
      <Hero>
        <Button size="sm" variant="secondary">
          <span>
            <a href="#">Linear 2022 Release – Built for scale</a>
          </span>
          <span className="highlight">→</span>
        </Button>
        <HeroTitle>
          Linear is a better way <br /> to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standart for modern software development. <br />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <Button size="lg">
          <span>
            <a href="#">Get Started</a>
          </span>
          <span className="highlight">
            <ChevronRight />
          </span>
        </Button>
      </Hero>
      <div className="aspect-video relative w-full mt-[12.8rem]">
        <Image
          src="/hero.webp"
          alt="Hero"
          fill
          sizes="(max-width: 700px) 700px, 100vw"
          priority
          style={{ position: "absolute", objectFit: "cover" }}
        />
      </div>
    </Container>
  );
};

export default HomePageHero;
