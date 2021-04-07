import React from 'react';
import Hero from '../components/hero';
import CategoriesList from '../components/categories-list';
import PopularItems from '../components/popular-items';
import Features from '../components/features';
import Reviews from '../components/reviews';
import Contacts from '../components/contacts';

const MainPage: React.FC = () => (
  <main className="page-main">
    <Hero />
    <CategoriesList />
    <PopularItems />
    <Features />
    <Reviews />
    <Contacts />
  </main>
);

export default MainPage;
