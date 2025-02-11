import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer id="contact" className="w-auto h-full">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Connect with me for engaging{" "}
          <span className="text-purple">professional </span>
          collaboration
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me today to discuss how my skills and expertise can support
          your objectives.
        </p>
        <a href="mailto:paulaferreyra.dev@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Paula Ferreyra
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-4 md:mt-0 lg:mt-0"
            >
              <a href={info.link}>
                <img src={info.img} alt="icons" width={25} height={25} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
