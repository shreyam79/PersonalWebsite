import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaGithub } from "react-icons/fa";

//Data dictionary
const PROJECTS_DATA = {
  'Ritual': {
    title: 'Ritual',
    timeline: 'May 2026 | Completed | Creator',
    shortDescription: 'Here is a short description of Ritual',
    motivation: 'Here is the motivation for Ritual here. After completing my freshman year at CMU, I realized how easy it is to lose track of habits due to high workloads and stress.',
    skills: ['Codex', 'Figma', 'Tailwind CSS'],
  },
};

export default function ProjectDetails() {
  const { id } = useParams();

  if (id === 'LockedIN') {
    return (
    <div className="min-h-screen bg-[#8bd1ef]/50 text-white p-8">
      {/* Back button */}
      <HashLink to="/#projects" className="text-black hover:font-bold">← Back to Projects</HashLink>
      
      {/* Title */}
      <div className="flex flex-row">
        <h1 className="text-4xl font-bold text-black mt-6 capitalize">{id.replace('-', ' ')}</h1>
        <a href="https://github.com/shreyam79/LockedIN" target="_blank" className="hover:text-blue-500/40 mt-8.5 ml-5 text-blue-500"><FaGithub size="1.5rem"/></a>
      </div>
      
      <p className="text-black font-light italic">April 2026 - Present | In progress | Project Manager & Developer</p>
      <p className="text-black mt-1">Description goes here. Just a short description</p>
      
      {/* Mobile Wireframes */}
      <p className="text-black text-2xl mt-5">Add mobile wireframes here</p>

      {/* Project Timeline */}
      <h1 className="text-black mt-10 font-bold text-xl">Project Timeline</h1>

      {/* xl version */}
      <div className="hidden xl:block">
      <div className="relative mt-7 mb-3 bg-black h-0.5 flex items-center max-w-274">
        <div className="absolute left-0 w-4 h-4 bg-black border-2 border-black rounded-full"></div>
        <div className="absolute left-74 w-4 h-4 bg-black border-2 border-black rounded-full"></div>
        <div className="absolute left-150 w-4 h-4 bg-black border-2 border-black rounded-full"></div>
        <div className="absolute left-225 w-4 h-4 bg-black border-2 border-black rounded-full"></div>
        <div className="absolute left-274 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
      </div>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col text-black max-w-65">
        <h1 className="text-lg text-blue-500 font-semibold">Ideation</h1>
        <p>Came up with 3-5 ideas each and evaluated each based on feasibility and ___.</p>
      </div>

      <div className="flex flex-col text-black max-w-65">
        <h1 className="text-lg text-blue-500 font-semibold">Solution Components</h1>
        <p>Applied strategic analysis and social theories & proposed a well-designed solution information systems solution</p>
      </div>

      <div className="flex flex-col text-black max-w-65">
        <h1 className="text-lg text-blue-500 font-semibold">Build a website</h1>
        <p>Created wireframes for the website, which shows the problem, solution, strategic analysis, social theories, and team members.</p>
      </div>

      <div className="flex flex-col text-black max-w-65">
        <h1 className="text-lg text-blue-500 font-semibold">Create a poster</h1>
        <p>Download poster here</p>
      </div>

      <div className="flex flex-col text-black max-w-65">
        <h1 className="text-lg text-blue-500 font-semibold">Deployment</h1>
        <p>Some description here.</p>
      </div>
    </div>
      </div>

      {/* mobile version */}

      <div className="xl:hidden flex flex-col mt-6">
        {/* #1 */}
        <div className="relative flex flex-row gap-6">
          <div className="relative flex flex-col items-center w-10">
            <div className="absolute top-5 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-black"></div>
            <div className="relative z-10 w-4 h-4 bg-black border-2 border-black rounded-full mt-2"></div>
          </div>

          <div className="flex-10 pb-10">
            <h1 className="text-lg text-blue-500 font-semibold">Ideation</h1>
            <p className="text-black">Came up with 3-5 ideas each and evaluated each based on feasibility and ___.</p>
          </div>
        </div>

        {/* #2 */}
        <div className="relative flex flex-row gap-6">
          <div className="relative flex flex-col items-center w-10">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-black"></div>
            <div className="relative z-10 w-4 h-4 bg-black border-2 border-black rounded-full mt-2"></div>
          </div>

          <div className="flex-10 pb-10">
            <h1 className="text-lg text-blue-500 font-semibold">Solution Components</h1>
            <p className="text-black">Applied strategic analysis and social theories & proposed a well-designed solution information systems solution</p>
          </div>
        </div>

        {/* #3 */}
        <div className="relative flex flex-row gap-6">
          <div className="relative flex flex-col items-center w-10">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-black"></div>
            <div className="relative z-10 w-4 h-4 bg-black border-2 border-black rounded-full mt-2"></div>
          </div>

          <div className="flex-10 pb-10">
            <h1 className="text-lg text-blue-500 font-semibold">Build a website</h1>
            <p className="text-black">Created wireframes* for the website, which shows the problem, solution, strategic analysis, social theories, and team members.</p>
          </div>
        </div>

        {/* #4 */}
        <div className="relative flex flex-row gap-6">
          <div className="relative flex flex-col items-center w-10">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-black"></div>
            <div className="relative z-10 w-4 h-4 bg-black border-2 border-black rounded-full mt-2"></div>
          </div>

          <div className="flex-10 pb-10">
            <h1 className="text-lg text-blue-500 font-semibold">Create a poster</h1>
            <p className="text-black">Download poster here</p>
          </div>
        </div>

        {/* #5 */}
        <div className="relative flex flex-row gap-6">
          <div className="relative flex flex-col items-center w-10">
            <div className="absolute top-0 bottom-20 left-1/2 -translate-x-1/2 w-[2px] bg-black"></div>
            <div className="relative z-10 w-4 h-4 bg-white border-2 border-black rounded-full mt-2"></div>
          </div>

          <div className="flex-10 pb-10">
            <h1 className="text-lg text-blue-500 font-semibold">Deployment</h1>
            <p className="text-black">Description here</p>
          </div>
        </div>
      </div>

    {/* Motivation */}
      <h1 className="text-black mt-10 font-bold text-xl">Motivation</h1>
      <p className="text-black">Just a little description on why we came up with this and stuff.</p>

    {/* Skills & Technologies */}
      <h1 className="text-black mt-10 font-bold text-xl">Skills & Technologies</h1>
      <div className="bg-[#72cb7e] rounded-full text-black pl-4 pr-4 pt-1 pb-1 mt-2 inline-block mr-5">Skill 1</div>
      <div className="bg-[#72cb7e] rounded-full text-black pl-4 pr-4 pt-1 pb-1 mt-2 inline-block mr-5">Skill 2</div>
      <div className="bg-[#72cb7e] rounded-full text-black pl-4 pr-4 pt-1 pb-1 mt-2 inline-block mr-5">Skill 3</div>
    
    {/* Collaborators */}
      <h1 className="text-black mt-10 font-bold text-xl">Collaborators</h1>
      <p className="text-black">Tiffany Liu, Eva Li</p>
    
    {/* Awards */}
      <h1 className="text-black mt-10 font-bold text-xl">Awards!</h1>
      <p className="text-black max-w-205">As part of my Information Systems Milieux (67-250) class, my team presented LockedIN at our
        poster presentation. Out of __ teams, __ recieved awards. We won the People's Choice Award!
      </p>
      <p className="text-black text-2xl mt-3">Add img of us winning here</p>
    
    {/* Website Wireframes */}
    <h1 className="text-black mt-10 font-bold text-xl">*Website Wireframes</h1>
    <p className="text-black text-2xl mt-3">Add website wireframes here</p>
      
    </div>
  );
  }

  const project = PROJECTS_DATA[id];

  if (project == null) {
    return (
      <div className="min-h-screen bg-[#8bd1ef]/50 p-8 text-black flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Project Not Found</h1>
      <HashLink to="/#projects" className="mt-4 underline">Back to Home</HashLink>
    </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#8bd1ef]/50 text-white p-8">
      {/* Back button */}
      <HashLink to="/#projects" className="text-black hover:font-bold">← Back to Projects</HashLink>
      
      {/* Title */}
      <div className="flex flex-row">
        <h1 className="text-4xl font-bold text-black mt-6 capitalize">{project.title}</h1>
        <a href={`https://github.com/shreyam79/${id}`} target="_blank" className="hover:text-blue-500/40 mt-8.5 ml-5 text-blue-500"><FaGithub size="1.5rem"/></a>
      </div>
      
      <p className="text-black font-light italic">{project.timeline}</p>
      <p className="text-black mt-1">{project.shortDescription}</p>

      {/* Mobile Wireframes */}
      <p className="text-black text-2xl mt-5">Add mobile wireframes here</p>

      {/* Motivation */}
      <h1 className="text-black mt-10 font-bold text-xl">Motivation</h1>
      <p className="text-black">{project.motivation}</p>

      {/* Skills & Technologies */}
        {project.skills.map((skill, index) =>
        <div key={index} className="bg-[#72cb7e] rounded-full text-black pl-4 pr-4 pt-1 pb-1 mt-2 inline-block mr-5">
          {skill}
        </div>
      )}
    </div>
  )
  
}