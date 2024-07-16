import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/About";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="about">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl sm:text-center"
          title="Summary"
        />

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <div className="flex items-center mt-auto mb-10">
                  <img
                    className="mr-5 sm:mr-3"
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />

                  <h5 className="h5">{item.title}</h5>
                </div>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
