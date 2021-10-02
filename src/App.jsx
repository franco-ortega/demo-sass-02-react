import React from 'react';
import Colors from './components/colors/Colors';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Image from './components/image/Image';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Image />
      <Image />
      <Image />
      <Colors />
    </div>
  )
}

export default App;
