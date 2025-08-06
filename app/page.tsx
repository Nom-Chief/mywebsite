'use client';

import { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const workProjects = [
  {
    name: "MeetLink",
    description: "MeetLink is an online meeting link generator tool that helps simplify meeting schedules using personalized URL (Landing Page) to track all your meetings and appointments. It provides you a customizable landing page to share when meeting online for all your calendar meetings with personal info, time, scheduling, and links. This leads to one-of-a-kind branding experience. Bid farewell to link chaos, save time, and make a lasting impact with your personal meeting oasis."
  },
  {
    name: "Cliq Fit",
    description: "CliqFit is a fun fitness bingo app where you earn squares by exercising. You can play on your own or challenge your friends to see who can complete their board first. It's a cool way to stay active, stay motivated, and turn workouts into a game!"
  },
  {
    name: "FRM",
    description: "FRM (Fundraiser Relationship Manager) is your fundraising brain — built specifically for fundraisers and nonprofit teams who want to raise more money through relationships. Unlike traditional CRMs that just store donor data, FRM helps you take action. It tells you who to follow up with, when, and why, and even helps you write personalized messages with the help of AI — without ever losing your human touch."
  },
  {
    name: "Nom.Space",
    description: "Nom.space, a name routing service on the Celo blockchain. Was the featured dApp on the chain with over 60,000 names reserved for over 150,000 years. Launched a complimentary NFT selling out 6000 Nomstronauts in 4 minutes. The largest NFT launch on the Celo blockchain."
  },
  {
    name: "The Kosher App",
    description: "The Kosher App, an app that used computer vision and machine learning to identify Kosher symbols and tell the user if they were cRc approved. Created a viral video to promote it resulting in 30,000 views and converted to 7,000 downloads in its first week."
  }
];

const experiments = [
  {
    name: "Hebrew Flash Cards",
    url: "https://hebrewflash.cards/"
  },
  {
    name: "InPoster",
    url: "https://chromewebstore.google.com/detail/inposter/kegpeingogjkabmihjgmkoclebkfdihd"
  },
  {
    name: "Israel Car Inspection",
    url: "https://www.israelcarinspection.com/"
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chaimg/",
    icon: FaLinkedin
  },
  {
    name: "X",
    url: "https://x.com/runchaimrun",
    icon: FaXTwitter
  },
  {
    name: "Email",
    url: "mailto:chaim.y.gross@gmail.com",
    icon: FaEnvelope
  }
];

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (projectName: string) => {
    setExpandedProject(expandedProject === projectName ? null : projectName);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Header */}
        <header className="mb-24">
          <div className="flex items-center gap-8 mb-8">
            <img 
              src="/CG_image.PNG" 
              alt="Chaim Gross Profile" 
              className="w-24 h-24 object-cover"
            />
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground">Chaim Gross</h1>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-20">
          <div className="flex gap-16 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">About</h2>
            </div>
            <div className="flex-1">
              <p className="text-foreground leading-relaxed text-lg">
                I am currently working at <a href="https://zenomedia.com" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Zeno Media</a>, an international streaming and podcasting company, with a background in computer science and design. My passion is to build and grow digital products and businesses that millions of users use and love. I have over 10 years of experience working on my own ideas and others, taking them from the back of a napkin, launch, growth, and then <a href="https://www.prnewswire.com/news-releases/zeno-media-announces-zenofm-a-new-tool-for-broadcasters-to-increase-their-streaming-content-and-worldwide-user-base-300905192.html" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">success</a>. Let's see how we can work together.
              </p>
            </div>
          </div>
        </section>

        {/* Zeno Media Section */}
        <section className="mb-20">
          <div className="flex gap-16 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">Zeno Media</h2>
            </div>
            <div className="flex-1">
              <p className="text-foreground leading-relaxed text-lg">
                Currently leading multiple product initiatives at Zeno Media, with a focus on <a href="https://zenoplus.co" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Zeno Plus</a>, a suite of smart tools designed to help broadcasters produce, edit, distribute, and monetize their radio stations with ease. Being hired as employee number 5 I have led product and growth taking us from 10,000 listeners to now 40 million MAU listeners, 43,000 radio stations and a top 10 streaming company worldwide. I have lead initiatives including <a href="https://zeno.fm" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Zeno.FM</a>, Podcast by Phone, and <a href="https://audioclips.ai" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Audioclips.ai</a> our AI audio generation tool for broadcasters and podcasters.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <div className="flex gap-16 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">Projects</h2>
            </div>
            <div className="flex-1 space-y-8">
              {workProjects.map((project) => (
                <div key={project.name} className="border-b border-border/50 last:border-b-0 pb-8 last:pb-0">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleProject(project.name)}
                      className="text-left group flex-1"
                    >
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-[#E79600] transition-colors duration-200">
                        {project.name}
                      </h3>
                    </button>
                  </div>
                  {expandedProject === project.name && (
                    <div className="mt-6">
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {project.name === "MeetLink" ? (
                          <>
                            <a href="https://meetlink.co/" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">MeetLink</a>
                            {project.description.substring(8)}
                          </>
                        ) : project.name === "Cliq Fit" ? (
                          <>
                            <a href="https://cliqfitapp.com/" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">CliqFit </a>
                            {project.description.substring(8)}
                          </>
                        ) : project.name === "FRM" ? (
                          <>
                            <a href="https://getfrm.com/" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">FRM</a>
                            {project.description.substring(4)}
                          </>
                        ) : project.name === "Nom.Space" ? (
                          <>
                            <a href="https://nom.space/#/" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Nom.space</a>
                            {project.description.substring(10)}
                          </>
                        ) : project.name === "The Kosher App" ? (
                          <>
                            <a href="https://www.youtube.com/watch?v=9oQqiWw2esg" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">The Kosher App</a>
                            {project.description.substring(14)}
                          </>
                        ) : (
                          project.description
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Stuff Section */}
        <section className="mb-20">
          <div className="flex gap-16 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">Other Stuff</h2>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-10">
                {experiments.map((experiment, index) => (
                  <a
                    key={experiment.name}
                    href={experiment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-[#E79600] hover:underline transition-colors duration-200"
                  >
                    {experiment.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section>
          <div className="flex gap-16 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">Get in Touch</h2>
            </div>
            <div className="flex-1">
              <div className="flex gap-10">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-[#E79600] transition-colors duration-200 group"
                      aria-label={link.name}
                    >
                      <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-base font-medium">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 