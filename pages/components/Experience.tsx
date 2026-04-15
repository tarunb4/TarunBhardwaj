import React from "react";
import config from "../index.json";

type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

type ExperienceData = {
  title: string;
  jobs: Job[];
};

const Experience = () => {
  const experience = config.experience as ExperienceData;

  return (
    <div
      id={experience.title}
      className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 min-h-screen"
    >
      <h1 className="pt-16 uppercase font-bold text-center text-white text-4xl">
        {experience.title}
      </h1>

      <div className="mt-12 space-y-8 max-w-5xl mx-auto">
        {experience.jobs.map((job) => (
          <div
            key={`${job.company}-${job.role}`}
            className="rounded-xl bg-white/95 p-6 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-black">{job.role}</h2>
                <p className="mt-1 text-lg font-medium text-neutral-700">
                  {job.company}
                </p>
              </div>

              <div className="text-left md:text-right text-sm md:text-base text-neutral-600">
                <p>{job.period}</p>
                <p>{job.location}</p>
              </div>
            </div>

            <p className="mt-5 text-neutral-700 leading-7">{job.summary}</p>

            <ul className="mt-5 space-y-3 list-disc pl-5 text-neutral-700 leading-7">
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;