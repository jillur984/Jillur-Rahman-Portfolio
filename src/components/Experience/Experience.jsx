import { FaBriefcase } from "react-icons/fa";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiNextdotjs } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-6">
        Experience
      </h1>
      <div className="flex flex-wrap items-center justify-center ">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 justify-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNextdotjs color="#FF4438" size={50} />
          </span>
        </div>

        {/* Experience Section */}
        <div className="w-full md:w-3/5">
          <div className="flex gap-8 md:gap-10 bg-slate-950 bg-opacity-50 rounded-lg p-6 items-center shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6">
            <span className="text-white">
              <h2 className="text-xl font-semibold leading-tight mb-2">
                Software Developer, Intern-Wise
              </h2>
              <p className="text-sm text-gray-300 leading-tight font-thin mb-4">
                Oct 2024 - Present
              </p>
              <ul className="text-sm text-gray-200 p-3 list-disc space-y-2">
                <li>
                  Building scalable web applications through collaborative
                  teamwork, ensuring seamless integration of front-end and
                  back-end technologies, optimizing performance, and maintaining
                  high-quality standards while meeting project deadlines and
                  client requirements.
                </li>
              </ul>
            </span>
          </div>

          <div className="flex gap-8 md:gap-10 bg-slate-950 bg-opacity-50 rounded-lg p-6 items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span className="text-white">
              <h2 className="text-xl font-semibold leading-tight mb-2">
                IT Officer, C.P Group
              </h2>
              <p className="text-sm text-gray-300 leading-tight font-thin mb-4">
                March 2019 - May 2024
              </p>
              <ul className="text-sm text-gray-200 p-3 list-disc space-y-2">
                <li>- Worked as Information Technology Officer</li>
                <li>- Senior IT Officer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
