import React from 'react';
import { Download } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-12 bg-[var(--color-background)]">
      <div className="container-custom">
        <div className="bg-[var(--color-primary)] rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-background)] mb-4 font-montserrat">
            Download the Chrome Extension
          </h2>
          <p className="text-[var(--color-background)] mb-8 max-w-2xl mx-auto">
            To use the extension, download the zip folder to your computer and follow the tutorial below to set it up.
          </p>
          <a
            href="/DeepBeauty AI Extension.zip"
            download
            className="inline-flex items-center px-6 py-3 bg-[var(--color-background)] text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-light)] transition-colors gap-2 text-lg font-semibold"
          >
            <Download className="h-6 w-6" />
            Download Extension
          </a>
          <p className="mt-4 text-sm text-[var(--color-background)]">
            Version 1.0.0 • ZIP Archive • 1.2MB
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
