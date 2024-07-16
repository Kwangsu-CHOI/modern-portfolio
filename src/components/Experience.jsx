import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, check } from "../assets";
import {
  brainwaveServices,
  brainwaveServicesIcons,
  sticksServices,
  internServices,
} from "../constants";
import {
  Gradient,
  VideoBar,
  VideoChatMessage,
  PhotoChatMessage,
} from "./design/Experience";

import Generating from "./Generating";
import TagLine from "./Tagline";

const Services = () => {
  const experienceDates = [
    "Jul 2020 to Present",
    "Feb 2017 to May 2018",
    "Nov 2016 to Dec 2016",
  ];
  return (
    <Section id="experience">
      <div className="container">
        <Heading
          title="EXPERIENCES."
          text="Working experiences and others..."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[35rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-[80%] h-full object-cover md:object-right opacity-70"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
              <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
            </div>

            <div className="relative z-1 max-w-[21rem] ml-auto">
              <TagLine>{experienceDates[0]}</TagLine>
              <h4 className="h4 mt-4 mb-4">SJC Cooperation</h4>
              <p className="body-2 mb-[3rem] md:text-n-3 lg:text-n-3 sm:text-white">
                Managing inventory. Promoting and assisting events. Managing
                online-based sales platforms in Korea (Naver market and Coupang.
              </p>

              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="lg:py-12 md:py-12 px-4 xl:px-8 sm:py-0">
                <TagLine>{experienceDates[1]}</TagLine>
                <h4 className="h4 mt-4 mb-4">STICK Interactive</h4>
                <ul className="body-2">
                  {sticksServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[15rem] bg-n-8 rounded-xl overflow-hidden md:h-[13rem]">
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>

            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover opacity-30"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <TagLine>{experienceDates[2]}</TagLine>
                <h4 className="h4 mt-4 mb-4">Ione Property (Internship)</h4>
                <ul className="body-2">
                  {internServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
                <p className="body-2 mb-[3rem] text-n-3"></p>
              </div>
              <PhotoChatMessage />
            </div>
          </div>

          <Gradient />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a
          className="text-xs font-code font-bold tracking-wider uppercase border-b"
          href="#portfolio"
        >
          Move to Portfolio
        </a>
      </div>
    </Section>
  );
};

export default Services;
