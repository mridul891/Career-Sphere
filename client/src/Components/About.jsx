import CareerSphere from "./CareerSphere";
import Info from "./Info";
import { Aboutinfo } from "@/assets/data";
const About = () => {
  return (
    <div className="mt-10 h-full flex justify-center items-center">
      <div className="w-[70vw]  h-full flex flex-col gap-4 text-justify">
        {/* about us */}

        <Info
          title={Aboutinfo[0].title}
          information={Aboutinfo[0].information}
        />

        {/* Our Vision */}
        <Info
          title={Aboutinfo[1].title}
          information={Aboutinfo[1].information}
        />
        {/* Why CareerSphere */}
        <CareerSphere />
        {/* Community */}
        <Info
          title={Aboutinfo[2].title}
          information={Aboutinfo[2].information}
        />
        {/* Contact us */}
        <div>
          <Info
            title={Aboutinfo[3].title}
            information={Aboutinfo[3].information}
          />
          <a
            href="mailto:work.pandey.mridul@gmail.com"
            className="text-blue-400"
          >
            work.pandey.mridul@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
