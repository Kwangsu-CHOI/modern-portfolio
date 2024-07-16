import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Contact me anytime at wisecks@gmail.com
      </h5>
      <ul className="flex sm:flex-wrap sm:gap-4 sm:flex-auto ">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-auto flex-wrap h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
