import React from "react";
import { Hero, HeroTitle, HeroSubtitle } from "@/components/hero";
import Container from "@/components/contianer";
import Image from "next/image";
import Button, { HighLight } from "@/components/button";
import { ChevronRight } from "@/components/icons";

const HomePageHero = () => {
  return (
    <Container className="mt-navigation-height flex flex-col justify-center pt-[6.4rem]">
      <Hero>
        <Button size="sm" variant="secondary">
          <span>Linear 2022 Release – Built for scale</span>
          <HighLight>→</HighLight>
        </Button>
        <HeroTitle>
          Linear is a better way <br className="hidden md:block" /> to build
          products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standart for modern software development.{" "}
          <br className="hidden md:block" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <Button size="lg">
          <span>Get Started</span>
          <HighLight>
            <ChevronRight />
          </HighLight>
        </Button>
      </Hero>
      {/* Hero Image */}
      <div className="relative -z-10 mt-[12.8rem] aspect-video w-full">
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
