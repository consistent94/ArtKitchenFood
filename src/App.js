import React, { useState } from 'react';


import { AboutUs, FindUs, Footer, Gallery, Header , SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  const [data, setData] = useState(null)

  React.useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
);
  }

export default App;
