import Layout from "@/components/Layout";
import CustomButton from "@/components/ui/custom-button";
import SectionCard from "@/components/ui/section-card";
import { Code, Cloud, Palette, ArrowRight, CheckCircle } from "lucide-react";

function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-portfolio-primary to-portfolio-accent flex items-center justify-center">
              <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Profile Photo</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
              <span className="text-portfolio-dark-text">
                Creative Technologist
              </span>
              <br />
              <span className="bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">
                Cloud & Automation Enthusiast
              </span>
              <br />
              <span className="text-portfolio-dark-text">3D Artist</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bridging code, creativity, and accessibility—I'm a developer,
              designer, and digital problem-solver with a passion for
              automation, GIS innovation, and 3D storytelling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CustomButton
              variant="primary"
              size="lg"
              href="/projects"
              className="text-lg px-8 py-4"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </CustomButton>
            <CustomButton
              variant="outline"
              size="lg"
              href="/contact"
              className="text-lg px-8 py-4"
            >
              Get In Touch
            </CustomButton>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-portfolio-dark-text mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a multidisciplinary technologist with a passion for cloud
                computing, automation, and spatial analysis. Whether I'm building
                Python-based GIS tools, developing accessible web solutions, or
                crafting cinematic 3D renders, I aim to design experiences that
                are as useful as they are beautiful.
              </p>
            </div>

            {/* About Image Placeholder */}
            <div className="lg:order-first">
              <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <p className="text-sm font-medium">Workspace Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-portfolio-dark-text mb-6">
              Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specializing in the intersection of technology, creativity, and
              accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionCard
              title="Tech / DevOps / Python"
              description="I specialize in Python-driven automation and DevOps workflows that power scalable systems."
              icon={<Code className="w-6 h-6 text-white" />}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    Python Automation
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    DevOps Workflows
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    System Integration
                  </span>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              title="GIS / Cloud"
              description="I develop GIS-integrated tools and cloud-native solutions that enhance real-world accessibility."
              icon={<Cloud className="w-6 h-6 text-white" />}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    AWS Cloud Solutions
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    ArcGIS Development
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    Spatial Analysis
                  </span>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              title="Accessibility & Innovation"
              description="I focus on building accessible solutions and exploring emerging technologies to create inclusive digital experiences."
              icon={<Palette className="w-6 h-6 text-white" />}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Web Accessibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    Digital Research
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Innovation Solutions</span>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-portfolio-dark-text mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need cloud automation, GIS solutions, or want to discuss
            the latest in accessibility tech, I'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              variant="primary"
              size="lg"
              href="/projects"
              className="text-lg px-8 py-4"
            >
              Explore My Work
            </CustomButton>
            <CustomButton
              variant="accent"
              size="lg"
              href="/contact"
              className="text-lg px-8 py-4"
            >
              Let's Connect
            </CustomButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Index;
