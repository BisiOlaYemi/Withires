import React from 'react';
import Hero from './components/Homepage/Hero';
import MainLayout from './components/Layouts/MainLayout';
import OurValue from './components/Homepage/OurValue';


function App() {
  return (
    <>
    <MainLayout>
    <Hero />
    <OurValue />
    </MainLayout>
    </>
  );
}

export default App;
