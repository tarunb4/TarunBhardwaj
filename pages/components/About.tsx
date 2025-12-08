import React from "react";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;

  const techStack: { [key: string]: { name: string; emoji: string }[] } = {
    Languages: [
      { name: "Python", emoji: "🐍" },
      { name: "Java", emoji: "☕" },
      { name: "C", emoji: "💻" },
      { name: "React Native", emoji: "⚛️" },
      { name: "JavaScript", emoji: "🟨" },
      { name: "HTML/CSS", emoji: "🌐" },
      { name: "XML", emoji: "📄" },
      { name: "Bash", emoji: "🖥️" },
      { name: "TypeScript", emoji: "🔷" },
      { name: "Verilog", emoji: "🔌" },
      { name: "LaTeX", emoji: "📝" },
      { name: "Git", emoji: "🔗" },
    ],
    Tools: [
      { name: "MySQL", emoji: "🛢️" },
      { name: "VS Code", emoji: "🖊️" },
      { name: "PyCharm", emoji: "🐍" },
      { name: "Pygame", emoji: "🎮" },
      { name: "Git", emoji: "🔗" },
      { name: "Jira", emoji: "📋" },
      { name: "MATLAB", emoji: "📊" },
      { name: "Android Studio", emoji: "🤖" },
      { name: "Figma", emoji: "🎨" },
      { name: "PuTTY", emoji: "🖥️" },
      { name: "AirWatch", emoji: "📱" },
    ],
    Platforms: [
      { name: "Linux", emoji: "🐧" },
      { name: "Windows", emoji: "🪟" },
      { name: "Arduino", emoji: "🔌" },
      { name: "iOS", emoji: "🍎" },
      { name: "Web", emoji: "🌐" },
    ],
  };

  return (
    <div
      id="About"
      className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
    >
      <h1 className="pt-12 uppercase font-bold text-center text-white text-4xl">
        {about.title}
      </h1>

      <div className="mt-16 flex flex-col md:flex-row items-center">
        <div className="w-1/2 flex justify-center">
          <Image
            src={about.image}
            alt="about"
            className="shadow-lg"
            width={400}
            height={300}
          />
        </div>

        <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left">
          <div className="about__primary">
            <span>{about.primary}</span>
          </div>
          <div className="mt-6">
            <span>{about.secondary}</span>
          </div>
          <div className="mt-6 mx-auto md:mx-0 border-2 border-white py-1 px-2 w-36 text-center font-bold">
            <a
              href={"/Tarun_Bhardwaj_Resume_Updated.pdf"}
              target="_blank"
              className="about__resume text-white text-l"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-16 text-center text-white">
        <h2 className="font-bold text-2xl mb-8">💻 Tech Stack</h2>

        {Object.keys(techStack).map((category) => (
          <div key={category} className="mb-8">
            <h3 className="font-semibold text-xl mb-4">{category}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack[category].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-xl px-4 py-2 text-white cursor-default shadow-sm"
                  title={tech.name}
                >
                  <span className="text-2xl">{tech.emoji}</span>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
