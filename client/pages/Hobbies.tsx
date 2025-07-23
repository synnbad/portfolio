import Layout from "@/components/Layout";
import { Palette, Camera, Music, Gamepad2, Mountain, Code } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      title: "3D Modeling & Animation",
      description: "Creating immersive 3D environments and cinematic renders using Blender. I blend realism with imagination to tell visual stories.",
      icon: <Palette className="w-6 h-6 text-white" />,
      skills: ["Blender", "3D Rendering", "Animation", "Texturing"]
    },
    {
      title: "Photography",
      description: "Capturing moments and exploring creative composition, from landscapes to urban architecture.",
      icon: <Camera className="w-6 h-6 text-white" />,
      skills: ["Digital Photography", "Photo Editing", "Composition", "Lighting"]
    },
    {
      title: "Music Production",
      description: "Experimenting with digital audio workstations and creating ambient soundscapes in my spare time.",
      icon: <Music className="w-6 h-6 text-white" />,
      skills: ["DAW", "Sound Design", "Mixing", "Composition"]
    },
    {
      title: "Gaming & Game Development",
      description: "Exploring interactive experiences and occasionally building small game prototypes to understand user engagement.",
      icon: <Gamepad2 className="w-6 h-6 text-white" />,
      skills: ["Game Design", "Unity", "Interactive Design", "User Experience"]
    },
    {
      title: "Outdoor Adventures",
      description: "Hiking, exploring nature, and finding inspiration for creative projects in the great outdoors.",
      icon: <Mountain className="w-6 h-6 text-white" />,
      skills: ["Hiking", "Nature Photography", "Camping", "Adventure Planning"]
    },
    {
      title: "Open Source Contributing",
      description: "Contributing to various open source projects and building tools that help other developers.",
      icon: <Code className="w-6 h-6 text-white" />,
      skills: ["Git", "Collaboration", "Documentation", "Community Building"]
    }
  ];

  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark-text mb-6">
              My Hobbies & Interests
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond my professional work, I'm passionate about creative pursuits that fuel my imagination and keep me inspired. Here's what I love to do in my free time.
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-lg flex items-center justify-center mb-4">
                  {hobby.icon}
                </div>
                
                <h3 className="font-heading font-semibold text-xl text-portfolio-dark-text mb-3">
                  {hobby.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {hobby.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {hobby.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 text-xs bg-portfolio-primary/10 text-portfolio-primary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Gallery Section */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-6 text-center">
              Creative Showcase
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center group hover:bg-gray-300 transition-colors">
                  <div className="text-center text-gray-400">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center group-hover:bg-gray-400 transition-colors">
                      <span className="text-lg">🎨</span>
                    </div>
                    <p className="text-sm font-medium">Creative Work {index}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                A mix of 3D renders, photography, and other creative experiments that inspire my professional work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://sketchfab.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-portfolio-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View 3D Portfolio
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-portfolio-primary text-portfolio-primary rounded-lg hover:bg-portfolio-primary hover:text-white transition-colors"
                >
                  Collaborate on Creative Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hobbies;
