import ecommerceImg from "../../assets/e-commerce.webp";
import ClinicImage from "../../assets/clinic.webp";
import WeatherImage from "../../assets/weather.webp";
import LMSImage from "../../assets/lms.webp";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white items-center">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-6">
        Projects
      </h1>
      <div className="py-12 flex justify-center">
        <div className="flex flex-wrap gap-5 max-w-5xl justify-center">
          <ProjectCard
            title="Full Stack Learning Management System MERN Stack APP"
            bannerImg={LMSImage}
            main="This is a system for managing a Clinic."
            demoLink=""
            sourceCodeLink="https://github.com/jillur984/Full-Stack-Learning-Management-System"
          />
          <ProjectCard
            title="Clinic Management Self Build App"
            bannerImg={ClinicImage}
            main="This is a system for managing a Clinic."
            demoLink="https://jillurm-clinic.vercel.app/"
            sourceCodeLink="https://github.com/jillur984/Self-Project-Clinic-Management-Project"
          />
          <ProjectCard
            title="E-Commerce App"
            bannerImg={ecommerceImg}
            main="This is an E-Commerce Website for buying products online."
            demoLink="https://react-e-commerce-project-2024.vercel.app/"
            sourceCodeLink="https://github.com/jillur984/React-E-Commerce-Project-2024"
          />
          <ProjectCard
            title="Weather App"
            bannerImg={WeatherImage}
            main="This is a weather dashboard that shows global weather updates."
            demoLink="https://weather-dashboard-eosin-seven.vercel.app/"
            sourceCodeLink="https://github.com/jillur984/weather-dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
