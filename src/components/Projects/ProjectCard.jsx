const ProjectCard = ({ title, bannerImg, main, demoLink, sourceCodeLink }) => {
  return (
    <div className="bg-gray-800 w-full text-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={bannerImg}
        alt={title}
        className="w-full h-48 object-contain rounded-t-xl"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{main}</p>
        <div className="flex justify-between">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
