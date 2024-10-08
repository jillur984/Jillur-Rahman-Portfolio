import avatarImg from "../../assets/jillur.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-row w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-10">
          I am a passionate front-end developer, focusing on technologies like
          React.js and Next.js.I currently available for full-time work.
        </p>
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div className="flex-shrink-0">
        <img
          className="rounded-full h-auto w-32 md:h-64 md:w-64 object-cover max-w-full"
          src={avatarImg}
          alt="Jillur Rahman"
        />
      </div>
    </div>
  );
};

export default Home;
