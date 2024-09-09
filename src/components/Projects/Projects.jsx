import ecommerceImg from '../../assets/e-commerce.webp';
import TaskImage from '../../assets/task.webp';
import WeatherImage from '../../assets/weather.webp';
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white items-center">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-6">Projects</h1>
      <div className="py-12 flex justify-center">
        <div className="flex flex-wrap gap-5 max-w-5xl"> 
          <ProjectCard
            title="E-Commerce App"
            bannerImg={ecommerceImg}
            main="This is an E-Commerce Website for buying products online."
            demoLink="https://react-e-commerce-project-2024.vercel.app/"
            sourceCodeLink="https://github.com/jillur984/React-E-Commerce-Project-2024"
          />
          <ProjectCard
            title="Tasker App"
            bannerImg={TaskImage}
            main="This is a TaskApp. Here we can create, read, update, and delete tasks."
            demoLink="https://task-app-three-steel.vercel.app/"
            sourceCodeLink="https://github.com/jillur984/Task-App"
          />
          <ProjectCard
            title="Weather App"
            bannerImg={WeatherImage}
            main="This is a weather dashboard where we can get all world weather updates."
            demoLink="https://weather-dashboard-eosin-seven.vercel.app/"
            sourceCodeLink="https://github.com/jillur984/weather-dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
