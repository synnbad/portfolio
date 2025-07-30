import Layout from "@/components/Layout";
import { CheckCircle, Clock, ExternalLink, Award } from "lucide-react";

const Certifications = () => {
  const completedCertifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      badgeUrl: "#",
      credlyUrl: "https://www.credly.com/users/your-profile",
      description:
        "Foundational understanding of AWS Cloud services, architecture, security, and pricing models.",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing Models"],
    },
    {
      title: "Google IT Automation with Python",
      issuer: "Google (Coursera)",
      date: "2025",
      badgeUrl: "#",
      credlyUrl: "https://www.credly.com/users/your-profile",
      description:
        "Comprehensive program covering Python automation, Git, troubleshooting, and configuration management.",
      skills: [
        "Python",
        "Automation",
        "Git",
        "Linux",
        "Configuration Management",
      ],
    },
    {
      title: "Data Analysis with Python",
      issuer: "FreeCodeCamp",
      date: "2024",
      badgeUrl: "#",
      credlyUrl: "https://www.freecodecamp.org/certification/your-profile",
      description:
        "Comprehensive data analysis certification covering pandas, NumPy, matplotlib, and statistical analysis with Python.",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Data Analysis",
        "Statistics"
      ],
    },
    {
      title: "IBM Machine Learning with Python",
      issuer: "IBM (Coursera)",
      date: "2024",
      badgeUrl: "#",
      credlyUrl: "https://www.credly.com/users/your-profile",
      description:
        "Machine learning fundamentals using Python including supervised and unsupervised learning, regression, and classification.",
      skills: [
        "Machine Learning",
        "Python",
        "Scikit-learn",
        "Regression",
        "Classification",
        "Data Science"
      ],
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2023",
      badgeUrl: "#",
      credlyUrl: "https://www.freecodecamp.org/certification/your-profile",
      description:
        "Complete responsive web design certification covering HTML, CSS, flexbox, CSS Grid, and responsive design principles.",
      skills: [
        "HTML",
        "CSS",
        "Responsive Design",
        "Flexbox",
        "CSS Grid",
        "Web Design"
      ],
    },
    {
      title: "Python Masterclass",
      issuer: "Udemy",
      date: "2021",
      badgeUrl: "#",
      credlyUrl: "https://www.udemy.com/certificate/your-certificate",
      description:
        "Comprehensive Python programming course covering fundamentals, object-oriented programming, and advanced concepts.",
      skills: [
        "Python",
        "Object-Oriented Programming",
        "Data Structures",
        "Algorithms",
        "Programming Fundamentals"
      ],
    },
  ];

  const inProgressCertifications = [
    {
      title: "AWS Developer Associate",
      issuer: "Amazon Web Services",
      expectedDate: "Q2 2024",
      description:
        "Advanced AWS certification focusing on developing and maintaining applications on AWS platform.",
      skills: [
        "AWS SDK",
        "Lambda",
        "DynamoDB",
        "API Gateway",
        "CloudFormation",
      ],
    },
    {
      title: "AI Practitioner",
      issuer: "Amazon Web Services",
      expectedDate: "Q1 2025",
      description:
        "Comprehensive AI certification covering machine learning fundamentals, AI services, and practical implementation of AI solutions.",
      skills: [
        "Machine Learning",
        "AI Services",
        "AWS Bedrock",
        "Natural Language Processing",
        "Computer Vision",
        "AI Ethics",
      ],
    },
  ];

  const plannedCertifications = [
    {
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      description:
        "Designing distributed systems and architectures on AWS platform.",
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      description:
        "Designing and planning cloud solution architecture using Google Cloud technologies.",
    },
  ];

  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark-text mb-6">
              Professional Certifications
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Continuous learning through industry-recognized certifications
              that validate my expertise in cloud computing, automation, and
              modern development practices.
            </p>
          </div>

          {/* Completed Certifications */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-heading font-semibold text-portfolio-dark-text">
                Earned Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {completedCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl text-portfolio-dark-text mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-portfolio-primary font-medium">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-gray-500">
                        Earned: {cert.date}
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{cert.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-portfolio-primary hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Badge
                    </a>
                    <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">Badge</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* In Progress Certifications */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Clock className="w-6 h-6 text-portfolio-accent mr-3" />
              <h2 className="text-2xl font-heading font-semibold text-portfolio-dark-text">
                Currently Pursuing
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {inProgressCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl text-portfolio-dark-text mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-portfolio-primary font-medium">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-portfolio-accent font-medium">
                        Expected: {cert.expectedDate}
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent/30 rounded-lg flex items-center justify-center">
                      <Clock className="w-8 h-8 text-portfolio-accent" />
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{cert.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-portfolio-accent/10 text-portfolio-accent rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Planned Certifications */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-8">
              Future Learning Goals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plannedCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <h3 className="font-heading font-semibold text-lg text-portfolio-dark-text mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-portfolio-primary font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Credly Profile CTA */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-4">
              View All Certifications
            </h3>
            <p className="text-gray-600 mb-6">
              Visit my Credly profile to see verified digital badges and
              detailed certification information.
            </p>
            <a
              href="https://www.credly.com/users/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-portfolio-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Credly Profile
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certifications;
