import Layout from "@/components/Layout";
import { Phone, Mail, Linkedin, MapPin, Send, MessageCircle, Calendar, Coffee, Lightbulb } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "(+850) 443-9182",
      href: "tel:+8504439182",
      description: "For urgent stuff or if you prefer talking to typing"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "adjuiksinbad@gmail.com",
      href: "mailto:adjuiksinbad@gmail.com",
      description: "My inbox is always open—I actually enjoy good emails"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Professional Profile",
      href: "#",
      description: "Where I pretend to be more professional than I actually am"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Tallahassee, FL",
      href: "#",
      description: "Home of great weather and even better BBQ"
    }
  ];

  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-portfolio-dark-text mb-8">
              Coffee, Code, or Conversation?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm always up for a good chat about tech, accessibility, or that Blender render that's 
              been stuck at 87% for three hours. Whether you want to collaborate on something cool, 
              need accessibility insights, or just want to geek out about AI—let's connect! 
            </p>
            
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 mt-8 px-4 py-2 bg-green-100 text-green-800 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Currently accepting new projects & collaborations</span>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-portfolio-primary/20 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                  {contact.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-portfolio-dark-text mb-2">
                  {contact.title}
                </h3>
                <p className="text-portfolio-primary font-medium mb-2">
                  {contact.value}
                </p>
                <p className="text-gray-600 text-sm">
                  {contact.description}
                </p>
              </a>
            ))}
          </div>

          {/* What I'd Love to Discuss */}
          <div className="bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-2xl p-12 text-white mb-16">
            <h2 className="text-3xl font-heading font-semibold mb-8 flex items-center gap-3">
              <MessageCircle className="w-8 h-8" />
              Things That Get Me Excited
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-3 text-lg">💼 Building Cool Stuff</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Python automation that actually saves time</li>
                  <li>• Making websites accessible (it's surprisingly fun)</li>
                  <li>• Cloud solutions that don't break the bank</li>
                  <li>• Data stories hidden in messy spreadsheets</li>
                  <li>• Research that might change someone's life</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-3 text-lg">🎨 Creative Adventures</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Blender renders (when they don't crash)</li>
                  <li>• Photography walks around Tallahassee</li>
                  <li>• Open source projects with actual users</li>
                  <li>• Teaching moments that click</li>
                  <li>• Music production experiments</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-3 text-lg">🤝 Random But Rewarding</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Career stories from Ghana to FSU</li>
                  <li>• Why AI ethics actually matters</li>
                  <li>• The best ways to fail at debugging</li>
                  <li>• Academic life survival tips</li>
                  <li>• Good books, better coffee recommendations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-portfolio-dark-text mb-2">
              I Actually Read My Messages
            </h3>
            <p className="text-gray-600">
              Usually respond within a day (sometimes faster if it's really interesting). 
              If you don't hear back, my spam filter probably ate it—try again!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
