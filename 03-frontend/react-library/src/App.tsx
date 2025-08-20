import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBook } from './layouts/HomePage/ExploreTopBook';
import { Carousel } from './layouts/HomePage/Carousel';
import { Heros } from './layouts/HomePage/Heros';
import { LibraryService } from './layouts/HomePage/LibraryServices';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBook/>
      <Carousel/>
      <Heros/>
      <LibraryService/>
    </div>
  );
}

export default App;
