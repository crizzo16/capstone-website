import React from 'react';
import { Terminal, Pin, Wrench, ShoppingBag } from 'lucide-react';
import UnZipImage from '../images/Unzip folder.png';
import DeveloperModeImage from '../images/Developer Mode.png';
import SelectFolderImage from '../images/Select Extension.png';
import PinExtensionImage from '../images/Pin Extension.png';
import tempUsageImage from '../images/Screenshot 2025-03-30 at 8.22.10 AM.png';
import productPageImage from '../images/Product Page.png';
import workingExtensionImage from '../images/Working Extension.png';

const TutorialSection = () => {
  return (
    <section id="installation" className="py-12 bg-background">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-6">
          Installation & Use Guide
        </h1>
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-[var(--color-background-secondary)] p-8 rounded-lg border border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-[var(--color-primary)]" />
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Step 1: Download/Extract the ZIP Folder</h2>
            </div>
            <p className="text-[var(--color-secondary)] mb-4">
              Start by downloading the zipped Chrome Extension into a local folder of your choice. From here, extract the folder using the appropriate method for your computer. The Mac option is seen below.
            </p>
            <img className="rounded-md mb-4 tutorial-img" src={UnZipImage} alt="Unzip folder" />
            <p className="text-[var(--color-accent)] text-sm text-bld">
              💡 Tip: If you have trouble opening the ZIP folder, a program like 7Zip can help open it.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[var(--color-background-secondary)] p-8 rounded-lg border border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="h-6 w-6 text-[var(--color-primary)]" />
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Step 2: Turn on Developer Mode</h2>
            </div>
            <p className="text-[var(--color-secondary)] mb-4">
              Open Chrome and navigate to <a href="chrome://extensions" className="important-text">chrome://extensions</a>. Turn on Developer mode in the upper right corner. A new set of options will appear - Load unpacked, Pack extension, and Update.
            </p>
            <img className="rounded-md mb-4 tutorial-img" src={DeveloperModeImage} alt="Developer mode in Chrome" />
            <p className="text-[var(--color-accent)] text-sm text-bld">
              💡 Tip: You can also use this screen to manage any other extensions you might have installed.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[var(--color-background-secondary)] p-8 rounded-lg border border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="h-6 w-6 text-[var(--color-primary)]" />
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Step 3: Load the Extension</h2>
            </div>
            <p className="text-[var(--color-secondary)] mb-4">
              Select <span>Load unpacked</span>, and navigate to the folder where you downloaded and extracted the folder in Step 1. Select the folder of the extension. Once you've selected the folder, you'll see the extension load among your other extensions. You can also see more details, remove the extension, and turn the extension off temporarily on this page.
            </p>
            <img className="rounded-md mb-4 tutorial-img" src={SelectFolderImage} alt="Select Extension Folder" />
            <p className="text-[var(--color-accent)] text-sm text-bld">
              💡 Tip: You don't need to go into the folder and select a specific file - just select the whole folder.
            </p>
          </div>

          {/* Optional Step  */}
          <div className="bg-[var(--color-background-secondary)] p-8 rounded-lg border border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Pin className="h-6 w-6 text-[var(--color-primary)]" />
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Optional Step: Pin the Extension</h2>
            </div>
            <p className="text-[var(--color-secondary)] mb-4">
              To make it easier to find and use the extension when browsing on the Sephora website, you can pin the extension to the top of Chrome. Click on the puzzle piece icon near the top of the browser, find the <span>DeepBeauty AI</span> extension, and click on the pin icon to the right.
            </p>
            <img className="rounded-md mb-4 tutorial-img" src={PinExtensionImage} alt="Pin Extension to Chrome" />
            <p className="text-[var(--color-accent)] text-sm text-bld">
              💡 Tip: This is a great way to keep your most important extensions at your fingertips.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-[var(--color-background-secondary)] p-8 rounded-lg border border-primary">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="h-6 w-6 text-[var(--color-primary)]" />
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Step 4: Find a Product</h2>
            </div>
            <p className="text-[var(--color-secondary)] mb-4">
              Navigate to the <a href="https://www.sephora.com" className="important-text" target="_blank" rel="noopener noreferrer">Sephora website</a> and select a product. Once on the page, please reload to ensure that the extension can properly import the information from the page. Click on the <span>DeepBeauty AI</span> extension icon in the upper right of your web browser to open the extension
            </p>
            <img className="rounded-md mb-4 tutorial-img" src={productPageImage} alt="Extension usage" />
            <p className="text-[var(--color-accent)] text-sm text-bld">
              💡 Tip: Reloading the webpage will ensure that the extension can properly read all information on the webpage.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-[var(--color-background-secondary)] p-8 rounded-lg border border-primary">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="h-6 w-6 text-[var(--color-primary)]" />
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Step 5: Browse Dupes</h2>
            </div>
            <p className="text-[var(--color-secondary)] mb-4">
              After <span>DeepBeauty AI</span> analyzes your selected product, it will return a few matches to explore. Scroll through the images and click on them to see more information about the specific product and how similar it is to your chosen Sephora Product. If you would like to purchase this product, click on the Google Shopping link to see options for where to buy the product.
            </p>
            <img className="rounded-md mb-4 tutorial-img" src={workingExtensionImage} alt="Extension usage" />
            <p className="text-[var(--color-accent)] text-sm text-bld">
              💡 Tip: .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;
