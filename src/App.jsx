import React from 'react';
import Colors from './components/colors/Colors';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ImageList from './components/image/ImageList';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <ImageList />
      <Colors />
    </div>
  )
}

export default App;
