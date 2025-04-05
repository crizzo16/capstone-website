import React from 'react';

const ExtensionSection = () => {
  return (
    <section id="functionality" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-8">
          Extension Functionality
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="aspect-video w-full bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Extension Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-[var(--color-secondary)] max-w-3xl mx-auto">
            Our extension provides powerful features to enhance your development workflow. 
            Watch the demo video to see it in action and learn about its capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExtensionSection;
