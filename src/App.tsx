import React from 'react';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Section from './components/Section/Section';
import Sidebar from './components/Layout/Sidebar';

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <Carousel />
      <div className='container'>
        <Section />
        <Sidebar />
      </div>
      <Footer />
    </main>
  );
};

export default App;
