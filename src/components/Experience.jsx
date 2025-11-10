import React from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Prime Solution",
      period: "Jun 2023 - Jul 2023",
      role: "Web Developer Intern",
      description:
        "Developed responsive user interfaces using React and Tailwind CSS, improving user interaction and accessibility.",
    },
    {
      company: "Fifty Web Technology",
      period: "May 2024 - Jun 2024",
      role: "Backend Developer Intern",
      description:
        "Built and tested RESTful APIs with Node.js and Express, ensuring efficient data handling and smooth integration.",
    },
    {
      company: "River World Technology",
      period: "Aug 2025 - Sep 2025",
      role: "Software Engineer Intern",
      description:
        "Assisted in developing scalable web solutions and automation tools using JavaScript and AWS cloud services.",
    },
    {
      company: "River World Technology",
      period: "Oct 2025 - Present",
      role: "Software Engineer",
      description:
        "Leading full-stack development initiatives integrating robust APIs, secure cloud deployments, and modern UI designs.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#0F172A] text-gray-200 py-14 px-4 sm:px-6 md:px-20 flex flex-col items-center justify-center"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          My <span className="text-[#F97316]">Work Experience</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-xl mx-auto px-2">
          A timeline of my professional journey showcasing growth across
          development and engineering roles.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full border-l-2 border-dashed border-[#F97316]/50 pointer-events-none z-0"></div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row md:justify-between items-center md:items-stretch text-center md:text-left bg-[#1E293B]/70 border border-[#1E293B]/60 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Company + Period */}
              <div className="md:w-[45%] flex flex-col justify-center text-center md:text-right md:pr-8">
                <h3 className="text-lg sm:text-xl font-semibold text-[#F97316]">
                  {exp.company}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  {exp.period}
                </p>
              </div>

              {/* Dot */}
              <div className="relative flex items-center justify-center my-4 md:my-0">
                <div
                  className={`w-5 h-5 rounded-full border-4 ${
                    index % 2 === 0
                      ? "border-[#F97316] bg-[#0F172A]"
                      : "border-[#0F172A] bg-[#F97316]"
                  }`}
                ></div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-[150%] border-l-2 border-dashed border-[#F97316]/40"></div>
              </div>

              {/* Role + Description */}
              <div className="md:w-[45%] flex flex-col justify-center text-center md:text-left md:pl-8">
                <h3 className="text-gray-300 text-sm sm:text-base font-medium">
                  {exp.role}
                </h3>
                <p className="text-gray-400 mt-2 text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
