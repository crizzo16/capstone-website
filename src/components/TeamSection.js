import React from 'react';
import { Linkedin } from 'lucide-react';
import MarcImage from '../images/Marc.png';
import BrianImage from '../images/Brian.png';
import DavidImage from '../images/David.png';
import MonicaImage from '../images/Monica.jpeg';
import CeliaImage from '../images/Celia.jpg';

const teamMembers = [
  {
    name: "Marc Kleyman",
    role: "",
    bio: "Data Collection, Machine Learning Engineer",
    image: MarcImage,
    linkedin: "https://www.linkedin.com/in/marc-kleyman/"
  },
  {
    name: "David Lee",
    role: "",
    bio: "Machine Learning Engineer, Product Manager",
    image: DavidImage,
    linkedin: "https://www.linkedin.com/in/david-lee-9b386815a/"
  },
  {
    name: "Monica Napoles",
    role: "",
    bio: "Backend Data Engineer, Subject Matter Expert",
    image: MonicaImage,
    linkedin: "https://www.linkedin.com/in/monica-j-napoles/"
  },
  {
    name: "Celia Rizzo",
    role: "",
    bio: "Frontend Application Developer, Subject Matter Expert",
    image: CeliaImage,
    linkedin: "https://www.linkedin.com/in/cecilia-rizzo/"
  },
  {
    name: "Brian Williams",
    role: "",
    bio: "Machine Learning Engineer, Model Evaluation",
    image: BrianImage,
    linkedin: "https://www.linkedin.com/in/brianmwilliams315/"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-[var(--color-background)]">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-square w-full relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover member-image"
                />
                <div className='img-overlay'></div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-primary)]">{member.name}</h3>
                <p className="text-[var(--color-accent)] text-sm sm:text-base font-medium mb-1 sm:mb-2">{member.role}</p>
                <p className="text-[var(--color-secondary)] text-xs sm:text-sm mb-2 sm:mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors text-sm"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
