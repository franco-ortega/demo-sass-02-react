import React from 'react';
import Colors from './components/colors/Colors';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ImageList from './components/images/ImageList';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <ImageList />
      <Colors />
    </>
  )
}

export default App;
