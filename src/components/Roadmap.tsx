import { Milestone, ArrowRight, Target, Rocket } from 'lucide-react';

export const Roadmap = () => {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Platform Development",
      description: "Initial development of the ComplianceAI platform and smart contract deployment",
      icon: <Target className="w-8 h-8 text-crypto-primary" />,
      date: "Q1 2024"
    },
    {
      phase: "Phase 2",
      title: "Token Launch",
      description: "Public token sale and exchange listings",
      icon: <Rocket className="w-8 h-8 text-crypto-primary" />,
      date: "Q2 2024"
    },
    {
      phase: "Phase 3",
      title: "Platform Launch",
      description: "Full platform release with AI-powered compliance features",
      icon: <Milestone className="w-8 h-8 text-crypto-primary" />,
      date: "Q3 2024"
    }
  ];

  return (
    <div className="py-20 bg-crypto-dark/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-crypto-primary to-crypto-secondary">
          Project Roadmap
        </h2>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-crypto-primary/20 -translate-x-1/2 md:hidden" />
          
          {milestones.map((milestone, index) => (
            <div key={milestone.phase} className="relative group">
              <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Milestone Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="p-6 bg-crypto-dark/30 rounded-lg border border-crypto-primary/20 
                    transform transition-all duration-300 hover:scale-105 hover:border-crypto-primary/40
                    group-hover:shadow-lg group-hover:shadow-crypto-primary/20">
                    <h3 className="text-xl font-bold mb-2 text-crypto-primary">{milestone.phase}</h3>
                    <h4 className="text-lg font-semibold mb-2 text-white">{milestone.title}</h4>
                    <p className="text-gray-400">{milestone.description}</p>
                    <div className="mt-2 text-crypto-secondary">{milestone.date}</div>
                  </div>
                </div>

                {/* Icon and Connector */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-crypto-dark/50 border-2 border-crypto-primary/50 
                    flex items-center justify-center transform transition-all duration-300 
                    group-hover:scale-110 group-hover:border-crypto-primary">
                    {milestone.icon}
                  </div>
                  {index < milestones.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -translate-y-1/2 
                      text-crypto-primary/50 w-8 h-8 transition-all duration-300
                      group-hover:text-crypto-primary group-hover:scale-110
                      ${index % 2 === 0 ? 'right-0' : 'left-0'}" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};