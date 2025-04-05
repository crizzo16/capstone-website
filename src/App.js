import React from 'react';
import Layout from './components/Layout.js';
import Header from './components/Header';
import ExtensionSection from './components/ExtensionSection';
import DownloadSection from './components/DownloadSection';
import TutorialSection from './components/TutorialSection';
import TeamSection  from './components/TeamSection';
import './style.css';

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <ExtensionSection />
        <DownloadSection />
        <TutorialSection />
        <TeamSection />
      </main>
    </Layout>
  );
}

export default App;