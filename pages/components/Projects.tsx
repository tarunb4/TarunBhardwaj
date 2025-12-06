import React from "react";
import config from "../index.json";
import Image from "next/image";

const Projects = () => {
  const projects = config.projects;

  return (
    <div id={projects.title} className="px-8 md:px-16 lg:px-32 pb-16 bg-white">
      <h1 className="pt-12 uppercase font-bold text-center text-black text-4xl">
        {projects.title}
      </h1>

      <div className="projects__menu">
        <ul>
          {projects.projects.map((item) => (
            <li key={item.title} className="flex flex-col lg:flex-row mt-12">
              {/* Project Info */}
              <div className="lg:w-1/3">
                <h2 className="text-2xl">{item.title}</h2>
                <p className="mt-6">{item.description}</p>
                <p className="mt-2">
                  <strong>Tech Stack:</strong> {item.tech}
                </p>
                <div className="flex mt-4">
                  <div className="text-md text-center font-semibold p-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <div className="bg-white">
                        <span className="block py-0.5 px-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                          See Project
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Image */}
              <div className="lg:ml-80 mt-6 lg:mt-0 w-full lg:w-[500px] h-[350px] relative shadow-lg flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
