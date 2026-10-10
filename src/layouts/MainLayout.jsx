import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Main Layout wrapper providing responsive container, navbar, and footer.
 */
export const MainLayout = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen flex flex-col bg-subtle text-dark antialiased">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
