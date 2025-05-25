import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CocktailIntro from './components/CocktailIntro';
import CocktailCarousel from './components/CocktailCarousel';
import DrinkFilter from './components/DrinkFilter';
import DrinkCardGrid from './components/DrinkCardGrid';
import cocktailData from './components/cocktailData'; // Adjust the path if needed
import VisitDistillery from './components/VisitDistillery';
import LimitedEdition from './components/LimitedEdition';
import Footer from './components/Footer';
import FooterLegal from './components/FooterLegal';

function App() {
  const [filters, setFilters] = useState({
    product: 'PRODUCT',
    occasion: 'OCCASION',
    tags: [],
  });

  return (
    <>
      <Navbar />
      <CocktailIntro />
      <CocktailCarousel />
      <DrinkFilter onFilterChange={setFilters} />
      <DrinkCardGrid cocktails={cocktailData} filters={filters} />
      <VisitDistillery/>
      <LimitedEdition/>
      <Footer/>
      <FooterLegal/>
    </>
  );
}

export default App;
