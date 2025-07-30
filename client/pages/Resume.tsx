import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Linkedin, Calendar, ExternalLink } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "Graduate Assistant",
      company: "Florida State University, Strozier Library",
      period: "August 2024 – Present",
      location: "Tallahassee, FL",
      responsibilities: [
        "Developed a Python-based batch ingest tool for FSU Digital Repository (DigiNole), improving image processing and metadata management for over 10,000 files",
        "Conducted web accessibility audits, achieving 90% compliance with W3C accessibility guidelines using various accessibility tools",
        "Created and implemented a comprehensive Web Accessibility training course, resulting in improved user understanding and content accessibility",
        "Assisted migration for 6000+ records from Omeka Classic to Omeka S using API-driven automation with metadata validation"
      ]
    },
    {
      title: "Assistant Data Manager",
      company: "University of Health and Allied Sciences, Hohoe, Ghana",
      period: "October 2023 – August 2024",
      location: "Globe HPV Project",
      responsibilities: [
        "Administered data collection protocols and managed database management for a Bill and Melinda Gates Funded research Project",
        "Collaborated with an international team to ensure data accuracy, integrity and ethical compliance through regular data validation and cleaning procedures"
      ]
    },
    {
      title: "IT Assistant",
      company: "University of Health and Allied Sciences, Hohoe, Ghana",
      period: "November 2022 – October 2023",
      location: "Hohoe, Ghana",
      responsibilities: [
        "Developed a web-based exam results incubation system and facilitated its integration with university systems",
        "Provided technical support for faculty and helped set up scalable network systems",
        "Led tutorials on web development for undergraduate students, focusing on HTML, CSS, and JavaScript"
      ]
    },
    {
      title: "Computer Lab Assistant (Internship)",
      company: "University of Health and Allied Sciences, Hohoe, Ghana",
      period: "June 2021 – September 2021",
      location: "Hohoe, Ghana",
      responsibilities: [
        "Diagnosed hardware failures and replaced faulty components",
        "Assisted in maintaining software and equipment used by faculty"
      ]
    }
  ];

  const education = [
    {
      degree: "M.S. Information Technology",
      school: "Florida State University",
      period: "August 2024 – Present",
      location: "Tallahassee, United States"
    },
    {
      degree: "B.S. Computer Science and Information Systems",
      school: "Datalink University",
      period: "December 2022",
      location: "Tema, Ghana",
      project: "Capstone Project: Development of an Android Application for Internship Recruitment in Ghana"
    }
  ];

  const technicalSkills = {
    "Languages & Frameworks": ["Python", "JavaScript", "React", "Flask", "HTML/CSS", "Bash"],
    "Data & Visualization": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
    "Cloud & AI Tools": ["AWS (EC2, S3, IAM, Bedrock)", "GitHub Actions", "CI/CD basics"],
    "Databases & CMS": ["SQL", "NoSQL", "RedCap", "WordPress", "Omeka", "Drupal"],
    "Web Accessibility": ["WCAG 2.1", "WAVE", "Axe", "WebAIM"],
    "Tools & Platforms": ["Linux", "Git", "GitHub", "Figma"]
  };

  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark-text mb-6">
              Resume
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Information Technology professional with multidisciplinary focus on data analysis, 
              software development, and web accessibility.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-4">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-portfolio-primary" />
                <span>(+850) 443-9182</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-portfolio-primary" />
                <span>adjuiksinbad@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-portfolio-primary" />
                <a href="#" className="text-portfolio-primary hover:underline">LinkedIn Profile</a>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-8">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-portfolio-dark-text">
                        {exp.title}
                      </h3>
                      <p className="text-portfolio-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mt-2 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-8">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-portfolio-dark-text">
                        {edu.degree}
                      </h3>
                      <p className="text-portfolio-primary font-medium">{edu.school}</p>
                    </div>
                    <div className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  {edu.project && (
                    <p className="text-gray-600 italic">{edu.project}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-8">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-heading font-semibold text-lg text-portfolio-dark-text mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-portfolio-primary/10 text-portfolio-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-xl p-6 text-white">
            <h2 className="text-2xl font-heading font-semibold mb-4">Summary of Qualifications</h2>
            <p className="text-white/90 leading-relaxed">
              I am an experienced Information Technology professional with a multidisciplinary focus 
              on data analysis, software development, and web accessibility. I have proven expertise in 
              Python programming, web development, digital repository management, and web 
              accessibility audits. I am skilled in system design prototyping and software development 
              pipelines. I am also adept at building automated systems to solve logical problems using 
              software design principles.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
