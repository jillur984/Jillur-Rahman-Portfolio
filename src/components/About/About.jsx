import AboutImg from "../../assets/about.webp";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="md:flex flex-wrap flex-col md:flex-row items-center">
        <img className="md:h-80" src={AboutImg} alt="About img" />
        <div className="text-center md:text-left md:ml-8"> {/* Center text on small screens */}
          <h2 className="text-2xl md:text-4xl font-bold ">About</h2>
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Passionate about crafting seamless and interactive user experiences on the web. With a focus on clean design and efficient code, I bring ideas to life through responsive, dynamic websites. Skilled in HTML, CSS, JavaScript, and frameworks like React.js, I strive to build solutions that are both visually appealing and highly functional. I’m always exploring new technologies to create modern, high-performance web applications tailored to users' needs
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I’m a backend developer with expertise in Node.js, Express, and MongoDB, focused on building secure, efficient, and scalable server-side applications. I have a strong track record of designing and implementing RESTful APIs that optimize data handling and ensure seamless performance. My experience spans from schema design and complex queries to enhancing data management, allowing for reliable and efficient database interactions. I also prioritize collaboration with frontend teams to create cohesive applications that provide smooth user experiences. Passionate about problem-solving, I am dedicated to delivering backend solutions that meet real-world needs and am excited to bring my skills to your team.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  IT Support Specialist
                </h1>
                <p className="text-sm md:text-md leading-tight">
                With five years of experience as an IT Support Specialist, I am skilled at providing efficient, high-quality technical support to resolve complex issues and enhance system reliability. My expertise includes troubleshooting, network maintenance, and user support, with a proven track record of ensuring smooth operations and minimizing downtime. Committed to delivering exceptional service, I excel at diagnosing issues quickly and implementing effective solutions to meet both user and business needs.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
