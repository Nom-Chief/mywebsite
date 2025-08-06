import { useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const workProjects = [
  {
    name: "MeetLink",
    description: "A streamlined meeting scheduling and management platform that simplifies the process of coordinating meetings across teams and organizations. Built with intuitive calendar integration, automated scheduling suggestions, and real-time availability tracking to eliminate the back-and-forth of meeting coordination."
  },
  {
    name: "Cliq Fit",
    description: "A fitness and wellness application that combines personal training with social features. Built user engagement systems and integrated workout tracking with social sharing capabilities, helping users stay motivated through community interaction."
  },
  {
    name: "FRM",
    description: "Financial Risk Management platform designed for modern trading environments. Developed real-time risk assessment tools and portfolio optimization algorithms that help traders make informed decisions while managing exposure across multiple asset classes."
  },
  {
    name: "Nom.Space",
    description: "An innovative food discovery platform that uses location-based services and user preferences to recommend restaurants and culinary experiences. Built recommendation algorithms and social features for food enthusiasts to share and discover new dining experiences."
  },
  {
    name: "The Kosher App",
    description: "A machine learning-powered application that identifies kosher symbols and provides information about different agencies. This project showcases my ability to combine traditional knowledge systems with modern AI technology to serve specific community needs."
  }
];

const experiments = [
  {
    name: "Hebrew Flash Cards",
    url: "https://example.com/hebrew-flashcards"
  },
  {
    name: "InPoster",
    url: "https://example.com/inposter"
  },
  {
    name: "Israel Car Inspection",
    url: "https://example.com/israel-car-inspection"
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: Linkedin
  },
  {
    name: "X",
    url: "https://x.com/yourhandle",
    icon: Twitter
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail
  }
];

export default function App() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (projectName: string) => {
    setExpandedProject(expandedProject === projectName ? null : projectName);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="/CG_image.PNG" 
              alt="Chaim Gross Profile" 
              className="w-24 h-24 rounded-full"
            />
            <h1>Chaim Gross</h1>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-muted-foreground">About</h2>
            </div>
            <div className="flex-1">
              <p className="leading-relaxed">
                I am currently working at Zeno Media, an international streaming and podcasting company, with a background in computer science and design. My passion is to build and grow digital products and businesses that millions of users use and love. I have over 10 years of experience working on my own ideas and others and taking them from the back of a napkin, launch, growth, and then success. Let's see how we can work together.
              </p>
            </div>
          </div>
        </section>

        {/* Zeno Media Section */}
        <section className="mb-16">
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-muted-foreground">Zeno Media</h2>
            </div>
            <div className="flex-1">
              <p className="leading-relaxed">
                Currently leading multiple product initiatives at Zeno Media, a comprehensive media platform focused on broadcast technology and audio advertising. I manage our broadcaster platform that serves content creators and radio stations, develop innovative audio advertising solutions that connect brands with engaged audiences, and oversee Zeno FM's growth and technical infrastructure. My role combines strategic product development with hands-on technical implementation, driving both user experience improvements and backend optimizations that scale across our entire media ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-muted-foreground">Projects</h2>
            </div>
            <div className="flex-1 space-y-4">
              {workProjects.map((project) => (
                <div key={project.name} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                  <button
                    onClick={() => toggleProject(project.name)}
                    className="w-full text-left hover:text-[#E79600] transition-colors"
                  >
                    <h3 className="text-xl">{project.name}</h3>
                  </button>
                  {expandedProject === project.name && (
                    <div className="mt-4 pl-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Stuff Section */}
        <section className="mb-16">
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-muted-foreground">Other Stuff</h2>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-8">
                {experiments.map((experiment, index) => (
                  <a
                    key={experiment.name}
                    href={experiment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-[#E79600] transition-colors"
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
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-muted-foreground">Get in Touch</h2>
            </div>
            <div className="flex-1">
              <div className="flex gap-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-[#E79600] transition-colors"
                      aria-label={link.name}
                    >
                      <Icon className="h-6 w-6" />
                      <span className="text-base">{link.name}</span>
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