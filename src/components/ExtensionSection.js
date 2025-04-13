import React from 'react';

const ExtensionSection = () => {
  return (
    <section id="functionality" className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-8">
          Extension Functionality
        </h2>

        <div className="mt-8 mb-8 text-center">
          <p className="text-lg text-[var(--color-secondary)] max-w-3xl mx-auto">
            <span className="text-bld text-[var(--color-primary-dark)]">DeepBeauty AI </span> brings together Machine Learning with your favorite Sephora products to find dupes and give you more options when shopping. 
            Watch the demo video to see it in action and learn about its capabilities.
          </p>
        </div>

        <div className="grid gap-12 items-center">
          {/* Video Section */}
          <div className="aspect-video w-full bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/4087ba8ad70a4bd292aba010354fb8e9?sid=40c0b827-28a5-421a-a2ca-e5793df47a36" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ExtensionSection;
