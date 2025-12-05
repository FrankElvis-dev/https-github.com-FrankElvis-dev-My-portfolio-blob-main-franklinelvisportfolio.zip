import React from 'react';
import { Globe, ArrowRight, ArrowRight as ArrowRightIcon, Palette, Code, Cpu, Linkedin, Mail, Github, ExternalLink, Workflow, Sun, Moon } from 'lucide-react';

interface LandingPageProps {
  onLoginClick: () => void;
  onAgentToggle: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick, isDarkMode, onThemeToggle }) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-zinc-100 dark:bg-neutral-950 relative transition-colors duration-300">
       {/* Navigation */}
       <nav className="flex flex-wrap md:px-12 z-30 bg-stone-100 dark:bg-neutral-950 pt-6 pr-6 pb-6 pl-6 relative gap-x-20 gap-y-6 items-center justify-between transition-colors duration-300">
        <div className="flex items-center gap-3 group cursor-pointer mr-8">
          <div className="flex text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 w-9 h-9 rounded-lg relative items-center justify-center transition-colors">
            <Code className="w-5 h-5 text-slate-50 dark:text-neutral-900" />
          </div>
          <div className="flex flex-col">
            <span className="uppercase leading-none text-2xl font-medium tracking-tight font-oswald text-neutral-900 dark:text-white">
              FRANKLIN
              <span className="text-orange-400">.DEV</span>
            </span>
            <span className="text-[0.6rem] uppercase text-neutral-700 dark:text-neutral-400 tracking-widest font-space">
              UI/UX & AI Engineer
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 mr-auto">
          <a href="#about" className="uppercase hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-xs font-semibold text-neutral-600 tracking-widest">
            About
          </a>
          <a href="#skills" className="uppercase hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-xs font-semibold text-neutral-600 tracking-widest">
            Skills
          </a>
          <a href="#projects" className="uppercase hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-xs font-semibold text-neutral-600 tracking-widest">
            Projects
          </a>
          <a href="#contact" className="uppercase hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-xs font-semibold text-neutral-600 tracking-widest">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <button 
            onClick={onThemeToggle}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-800 transition-colors cursor-pointer z-50 text-neutral-700 dark:text-neutral-300"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-800 transition-colors cursor-pointer z-50 text-neutral-900 dark:text-neutral-200">
            <Globe className="w-4 h-4" />
            <span className="text-xs font-medium uppercase tracking-wide">
              Lagos, NG
            </span>
          </button>

          <button 
            onClick={onLoginClick} 
            className="uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex shadow-neutral-900/10 text-xs font-semibold text-white dark:text-neutral-900 tracking-wider bg-neutral-900 dark:bg-white rounded-full pt-2 pr-6 pb-2 pl-6 shadow-lg gap-x-2 gap-y-2 items-center"
          >
            <span>Client Login</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="md:px-12 md:pb-10 bg-zinc-100 dark:bg-neutral-950 max-w-[90rem] mx-auto pt-12 pr-6 pb-24 pl-6 w-full transition-colors duration-300">
          <div className="flex flex-col gap-x-12 gap-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-x-0 gap-y-8 items-start">
              <div className="lg:col-span-7 flex flex-col gap-x-8 gap-y-8">
                <div className="flex gap-4 animate-fade-in-up gap-x-4 gap-y-4 items-center">
                  <div className="h-px w-12 bg-neutral-400 dark:bg-neutral-600"></div>
                  <span className="uppercase text-sm font-medium text-neutral-500 dark:text-neutral-400 tracking-widest">
                    Available for New Opportunities
                  </span>
                </div>

                <h1 className="md:text-8xl lg:text-9xl leading-[0.9] uppercase text-6xl font-medium text-neutral-900 dark:text-white tracking-tight font-oswald pt-8 pb-6 transition-colors">
                  Franklin Elvis
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 to-neutral-900 dark:from-neutral-400 dark:to-white text-4xl md:text-6xl lg:text-7xl">
                    UI/UX Designer & <br /> Web + AI Developer
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-5 group h-full mt-1 relative">
                <div className="absolute inset-0 bg-neutral-900 dark:bg-neutral-800 rounded-2xl rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[27.5rem] lg:h-[34.375rem] w-full bg-neutral-900">
                  <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" alt="Abstract AI Art" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 opacity-80" />
                  <div className="bg-gradient-to-t from-neutral-900 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[0.65rem] uppercase tracking-widest font-space">
                        Current Status
                      </span>
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    </div>
                    <div className="text-sm font-medium">Building intelligent digital solutions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row mt-4 gap-x-12 gap-y-12 items-start">
              <div className="max-w-2xl">
                <h2 className="md:text-2xl leading-tight -mt-6 md:-mt-12 text-xl font-medium text-neutral-800 dark:text-neutral-300 tracking-tight font-space mb-6 transition-colors">
                  Crafting modern, user-centered experiences and building intelligent digital solutions from Lagos, Nigeria.
                </h2>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#projects" className="group relative px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-neutral-500/20">
                    <span className="z-10 flex items-center gap-2 uppercase text-sm font-semibold tracking-widest relative">
                      View My Work
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  <a href="#contact" className="group relative px-8 py-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-lg overflow-hidden transition-all hover:bg-neutral-50 dark:hover:bg-neutral-700">
                    <span className="z-10 flex items-center gap-2 uppercase text-sm font-semibold tracking-widest relative">
                      Get in Touch
                    </span>
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-5/12 ml-auto overflow-hidden bg-neutral-950 border-neutral-200 dark:border-neutral-800 border rounded-2xl pt-6 pr-6 pl-6 relative shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <div className="w-[7.5rem] h-[7.5rem] rounded-full border-4 border-orange-400"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 transition-colors">
                    <div className="uppercase text-xs text-neutral-400 font-space mb-1">
                      Experience
                    </div>
                    <div className="text-3xl font-medium text-neutral-900 dark:text-white font-oswald">
                      1+ Year
                    </div>
                    <div className="text-[0.6rem] text-green-600 mt-2 flex items-center gap-1">
                      <ArrowRightIcon className="w-2.5 h-2.5 -rotate-45" />
                      Continuous Learning
                    </div>
                  </div>
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-100 dark:border-neutral-800 transition-colors">
                    <div className="text-xs font-space uppercase text-neutral-400 mb-1">
                      Projects
                    </div>
                    <div className="text-3xl font-oswald font-medium text-neutral-900 dark:text-white">
                      10+
                    </div>
                    <div className="text-[0.6rem] text-green-600 mt-2 flex items-center gap-1">
                      <ArrowRightIcon className="w-2.5 h-2.5 -rotate-45" />
                      Delivered
                    </div>
                  </div>
                  <div className="col-span-2 text-white bg-neutral-900 dark:bg-neutral-800 rounded-xl pt-4 pr-4 pb-4 pl-4 transition-colors">
                    <div className="flex justify-between items-center mb-4">
                      <span className="uppercase text-xs text-orange-500 tracking-widest font-space">
                        Tech Stack
                      </span>
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    </div>
                    <div className="space-y-2 font-geist-mono text-[0.65rem] text-neutral-400">
                      <div className="flex justify-between">
                        <span>&gt; Frontend</span>
                        <span className="text-white">React, TypeScript</span>
                      </div>
                      <div className="flex justify-between">
                        <span>&gt; Design</span>
                        <span className="text-white">Figma, Prototyping</span>
                      </div>
                      <div className="flex justify-between">
                        <span>&gt; AI Ops</span>
                        <span className="text-emerald-400">LLM Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & SKILLS */}
        <section className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 border-top pt-14 pb-10 w-full transition-colors duration-300" id="about">
          <div className="md:px-12 max-w-7xl mx-auto pr-6 pl-6">
            <div className="flex flex-col md:flex-row mb-16 gap-x-8 gap-y-8 items-end justify-between">
              <div className="max-w-xl">
                <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest mb-2 block">
                  About Me
                </span>
                <h3 className="md:text-5xl text-4xl font-medium text-neutral-900 dark:text-white tracking-tight font-oswald">
                  Merging Creativity with Computational Logic
                </h3>
                <p className="leading-relaxed text-neutral-600 dark:text-neutral-400 mt-4">
                  Hi, I’m Franklin Elvis. Over the past year, I’ve been designing clean, user-friendly interfaces and building responsive websites. My journey began with HTML, CSS, and JavaScript fundamentals, growing quickly into a passion for creating digital experiences that are both functional and beautiful.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="bg-neutral-200 dark:bg-neutral-800 w-12 h-1 rounded-full"></div>
                <div className="w-12 h-1 bg-neutral-900 dark:bg-neutral-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24" id="skills">
              <div className="p-8 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors group">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold font-oswald uppercase mb-3 text-neutral-900 dark:text-white">
                  UI/UX Design
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  Focusing on intuitive user journeys and aesthetic precision.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-[0.65rem] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">Figma</span>
                    <span className="px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-[0.65rem] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">Wireframing</span>
                    <span className="px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-[0.65rem] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">Prototyping</span>
                </div>
              </div>

              <div className="p-8 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors group">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold font-oswald uppercase mb-3 text-neutral-900 dark:text-white">
                  Web Development
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                   Building responsive, performant, and accessible web applications.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-[0.65rem] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">React</span>
                    <span className="px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-[0.65rem] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">JavaScript</span>
                    <span className="px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-[0.65rem] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">Tailwind</span>
                </div>
              </div>

              <div className="p-8 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors group">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold font-oswald uppercase mb-3 text-neutral-900 dark:text-white">
                  AI & Automation
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  Leveraging AI APIs and automation for smarter workflows.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-[0.65rem] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">Prompt Eng.</span>
                    <span className="px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-[0.65rem] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">API Integration</span>
                    <span className="px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-[0.65rem] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">Workflows</span>
                </div>
              </div>
            </div>

            <div className="md:p-12 overflow-hidden text-white bg-neutral-900 dark:bg-neutral-800 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative transition-colors">
              <div className="blur-[6.25rem] bg-blue-500/10 w-96 h-96 rounded-full absolute top-0 right-0"></div>

              <div className="relative z-10 mb-12">
                <span className="uppercase block text-xs font-semibold text-blue-400 tracking-widest mb-2">
                  My Philosophy
                </span>
                <h3 className="md:text-5xl text-3xl font-medium tracking-tight font-oswald">
                  Design isn't just visuals — it's about seamless, intuitive interaction.
                </h3>
                <p className="mt-6 max-w-2xl text-neutral-400 leading-relaxed">
                  I’m deeply enthusiastic about AI and automation. I love exploring how artificial intelligence can enhance design and development, from smarter workflows to intelligent applications that solve real-world problems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 border-neutral-700 border-t">
                 {/* Methodology Table */}
                <div className="hidden md:contents text-xs font-space uppercase tracking-widest text-neutral-500">
                  <div className="col-span-3 text-gray-50 dark:text-neutral-400 border-neutral-800 border-b pt-4 pr-4 pb-4">
                    Discipline
                  </div>
                  <div className="col-span-3 text-gray-50 dark:text-neutral-400 border-neutral-800 border-b border-l px-4 py-4">
                    Focus Area
                  </div>
                  <div className="col-span-6 text-gray-50 dark:text-neutral-400 border-neutral-800 border-b border-l pt-4 pl-4">
                    Outcome
                  </div>
                </div>
                
                {/* Row 1 */}
                <div className="col-span-1 md:col-span-3 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-4">
                  <span className="font-medium text-white">UI/UX Design</span>
                </div>
                <div className="col-span-1 md:col-span-3 md:px-4 md:border-l flex border-neutral-800 border-b pt-6 pb-6 gap-x-3 gap-y-3 items-center">
                  <Palette className="w-5 h-5 text-neutral-500" />
                  <span className="font-space text-neutral-300">User Centricity</span>
                </div>
                <div className="col-span-1 md:col-span-6 md:pl-4 md:border-l text-sm font-normal text-neutral-400 border-neutral-800 border-b pt-6 pb-6 pl-4">
                  Creating interfaces that feel natural and empowering to the user.
                </div>

                {/* Row 2 */}
                <div className="col-span-1 md:col-span-3 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-4">
                  <span className="font-medium text-white">Development</span>
                </div>
                <div className="col-span-1 md:col-span-3 md:px-4 md:border-l flex border-neutral-800 border-b pt-6 pb-6 gap-x-3 gap-y-3 items-center">
                  <Code className="w-5 h-5 text-neutral-500" />
                  <span className="font-space text-neutral-300">Clean Architecture</span>
                </div>
                <div className="col-span-1 md:col-span-6 md:pl-4 md:border-l text-sm font-normal text-neutral-400 border-neutral-800 border-b pt-6 pb-6 pl-4">
                  Writing maintainable, scalable code that performs well on any device.
                </div>

                 {/* Row 3 */}
                 <div className="col-span-1 md:col-span-3 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-4">
                  <span className="font-medium text-white">AI Integration</span>
                </div>
                <div className="col-span-1 md:col-span-3 md:px-4 md:border-l flex border-neutral-800 border-b pt-6 pb-6 gap-x-3 gap-y-3 items-center">
                  <Workflow className="w-5 h-5 text-neutral-500" />
                  <span className="font-space text-neutral-300">Automation</span>
                </div>
                <div className="col-span-1 md:col-span-6 md:pl-4 md:border-l text-sm font-normal text-neutral-400 border-neutral-800 border-b pt-6 pb-6 pl-4">
                  Building intelligent systems that reduce manual effort and solve complex problems.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="md:px-12 max-w-7xl mx-auto pt-24 pr-6 pb-24 pl-6 w-full transition-colors duration-300" id="projects">
          <div className="mb-16">
            <span className="uppercase block text-xs font-semibold text-neutral-500 dark:text-neutral-400 tracking-widest mb-2">
              My Portfolio
            </span>
            <h3 className="md:text-6xl text-4xl font-medium text-neutral-900 dark:text-white tracking-tight font-oswald max-w-3xl">
              Recent Projects & Case Studies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
              <div>
                <div className="text-sm font-space uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">Web Development</div>
                <h4 className="text-3xl font-oswald font-medium mb-2 text-neutral-900 dark:text-white">Personal Portfolio</h4>
                <div className="text-lg font-space font-medium text-neutral-900 dark:text-neutral-200 mb-6">Responsive Design</div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  A high-performance portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean aesthetic.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-[10px] uppercase border dark:border-neutral-600 px-2 py-1 rounded bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-300">React</span>
                    <span className="text-[10px] uppercase border dark:border-neutral-600 px-2 py-1 rounded bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-300">Tailwind</span>
                </div>
              </div>
              <button className="w-full py-4 border border-neutral-900 dark:border-neutral-400 text-neutral-900 dark:text-neutral-300 font-medium uppercase tracking-widest text-xs hover:bg-neutral-900 dark:hover:bg-neutral-700 hover:text-white dark:hover:text-white transition-colors flex items-center justify-center gap-2">
                View Project <ExternalLink className="w-3 h-3" />
              </button>
            </div>
            
            {/* Project 2 */}
            <div className="bg-neutral-900 dark:bg-neutral-950 text-white border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between transform md:-translate-y-4 shadow-2xl relative overflow-hidden transition-colors">
               <div className="absolute top-0 right-0 bg-white text-neutral-900 text-[0.6rem] font-semibold uppercase px-3 py-1">Featured</div>
              <div>
                <div className="text-sm font-space uppercase tracking-widest text-neutral-400 mb-4">UI/UX Design</div>
                <h4 className="text-3xl font-oswald font-medium mb-2">Bistro Concept</h4>
                <div className="text-lg font-space font-medium text-white mb-6">Mobile App Design</div>
                <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                  A complete concept for a restaurant booking app, including user research, wireframes, and high-fidelity prototypes.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-[10px] uppercase border border-neutral-700 px-2 py-1 rounded bg-neutral-800">Figma</span>
                    <span className="text-[10px] uppercase border border-neutral-700 px-2 py-1 rounded bg-neutral-800">Prototyping</span>
                </div>
              </div>
              <button className="w-full py-4 bg-white text-neutral-900 font-medium uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                 View Design <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
              <div>
                <div className="text-sm font-space uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">AI Integration</div>
                <h4 className="text-3xl font-oswald font-medium mb-2 text-neutral-900 dark:text-white">Content Genie</h4>
                <div className="text-lg font-space font-medium text-neutral-900 dark:text-neutral-200 mb-6">AI-Powered Tool</div>
                 <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  A web application that helps creators generate content ideas using OpenAI's API and custom prompt engineering.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-[10px] uppercase border dark:border-neutral-600 px-2 py-1 rounded bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-300">Node.js</span>
                    <span className="text-[10px] uppercase border dark:border-neutral-600 px-2 py-1 rounded bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-300">OpenAI API</span>
                </div>
              </div>
              <button className="w-full py-4 border border-neutral-900 dark:border-neutral-400 text-neutral-900 dark:text-neutral-300 font-medium uppercase tracking-widest text-xs hover:bg-neutral-900 dark:hover:bg-neutral-700 hover:text-white dark:hover:text-white transition-colors flex items-center justify-center gap-2">
                View Code <Github className="w-3 h-3" />
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="md:px-12 text-neutral-400 bg-neutral-900 dark:bg-neutral-950 border-neutral-800 border-t pt-12 pr-6 pb-12 pl-6 transition-colors duration-300" id="contact">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-white">
                <span className="font-oswald text-lg font-medium tracking-tight uppercase">
                  FRANKLIN ELVIS
                </span>
              </div>
              <p className="text-base max-w-xs leading-relaxed mb-6">
                Let’s build something amazing together. Reach out for collaborations or just to say hi.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
                    <Linkedin className="w-5 h-5" />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
                    <Github className="w-5 h-5" />
                 </a>
                 <a href="mailto:contact@franklinelvis.com" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
                    <Mail className="w-5 h-5" />
                 </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 text-base">
              <div className="flex flex-col gap-3">
                <span className="text-white font-medium uppercase tracking-widest text-xs">Navigation</span>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#projects" className="hover:text-white transition-colors">Work</a>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white font-medium uppercase tracking-widest text-xs">Contact</span>
                <span className="text-neutral-500">Lagos, Nigeria</span>
                <a href="mailto:hello@franklin.dev" className="hover:text-white transition-colors">hello@franklin.dev</a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 text-xs flex justify-between">
            <span>© 2024 Franklin Elvis. All rights reserved.</span>
            <div className="flex gap-4">
               {/* Optional Links */}
            </div>
          </div>
        </footer>
    </div>
  );
};

export default LandingPage;