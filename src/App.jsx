import myPfp from './assets/pfp.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-[#BEE5BF] flex flex-col xl:flex-row items-center xl:justify-center gap-6 xl:gap-10 p-8">
      {/*Left Column*/}
      <div className="flex flex-col gap-2 items-center xl:items-start mb-4 xl:mb-0">
        <img src={myPfp} className="w-48 h-48 xl:w-60 xl:h-60 object-cover rounded-full mb-4"></img>

      {/*Mobile-only heading*/}
      <div className="xl:hidden font-bold text-4xl text-slate-900 mb-2 text-center">
        Hi, I'm Shreya!
      </div>

        <div className="flex flex-row gap-2">
          <h3 className="font-bold text-lg uppercase text-gray-600">Name:</h3>
          <p className="text-lg">Shreya Mahindroo</p>
        </div>

        <div className="flex flex-row gap-2">
          <h3 className="font-bold text-lg uppercase text-gray-600">Pronouns:</h3>
          <p className="text-lg">She/Hers</p>
        </div>

        <div className="flex flex-row gap-2">
          <h3 className="font-bold text-lg uppercase text-gray-600">School:</h3>
          <p className="text-lg">Carnegie Mellon University</p>
        </div>

        <div className="flex flex-row gap-2">
          <h3 className="font-bold text-lg uppercase text-gray-600">Expected Graduation:</h3>
          <p className="text-lg">May 2029</p>
        </div>

        <div className="flex flex-row gap-2">
          <h3 className="font-bold text-lg uppercase text-gray-600">Hometown:</h3>
          <p className="text-lg">Morganville, NJ</p>
        </div>

      </div>
      {/*Right Column*/}
      <div className="flex flex-col gap-6 xl:self-start xl:items-start justify-center items-center xl:pt-40">
        <h1 className="hidden xl:block font-bold text-6xl text-slate-900">Hi, I'm Shreya!</h1>
        <p className="text-center xl:text-left max-w-197">I'm a student at Carnegie Mellon studying Information Systems with minors
          in Human-Computer Interaction (HCI) and AI. I am comfortable coding in Python,
          HTML, CSS, Javascript, React, Java, and R. Outside of classes, I do research
          at CMU's Human-Computer Interaction Institute (HCII) and work at CMU CS Academy 
          as a research assistant.

          I'm also involved in various extracurriculars on campus, including CMU Design
          for America, Mayur SASA (CMU's South Asian Student Association), Doghouse/Booth in the spring,
          and (occasionally) AB Tech.

        </p>
        <button className="flex justify-start bg-[#8bd1ef] w-40 p-3 rounded-xl">Download Resume</button>

        <div class="flex flex-row gap-3">
          <a href="https://linkedin.com/in/shreya-mahindroo-967820273" target="_blank" className="hover:text-[#72cb7e]"><FaLinkedin size="1.5rem"/></a>
          <a href="https://github.com/shreyam79" target="_blank" className="hover:text-[#72cb7e]"><FaGithub size="1.5rem"/></a>
          <a href="mailto:smahindr@andrew.cmu.edu" className="hover:text-[#72cb7e]"><FaRegEnvelope size="1.5rem"/></a>
          
        </div>
      </div>
    </div>
  )
}

export default App