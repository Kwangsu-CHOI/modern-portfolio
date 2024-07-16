import { curve, heroBackground } from "../assets";
import Button from "./Button";
import Section from "./Section";

import { BackgroundCircles, BottomLine } from "./design/Hero";
// import { heroIcons } from "../constants";
// import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
// import Generating from "./Generating";
// import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[5.25rem]">
          <h1 className="h1 mb-6">
            &nbsp;Welcome!!&nbsp;
            <br />I am {` `}
            <span className="inline-block relative">
              Kwangsu CHOI{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mt-12 mb-6 text-n-2 lg:mb-8">
            Experienced professional with a diverse academic background
            encompassing International Finance, Accounting (Master's), and IT
            (Master's). Published a research paper on UX/UI focusing on user
            accessibility during master studies. Possesses 2 years of experience
            as an Online Sales Administrator, adept at managing online-based
            sales platforms such as Naver Market and Coupang. Known for rapid
            learning and fostering effective team communication to drive
            collaborative success.
          </p>
          <Button href="#about" white>
            More About Me
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient"></div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="relative z-10 mt-20 sm:block lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
