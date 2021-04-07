import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/hero';
import CategoriesList from '../components/categories-list';
import PopularItems from '../components/popular-items';
import Features from '../components/features';
import Reviews from '../components/reviews';
import Contacts from '../components/contacts';
import { pageVariants } from '../constants';

const MainPage: React.FC = () => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
  >
    <main className="page-main">
      <Hero/>
      <CategoriesList/>
      <PopularItems/>
      <Features/>
      <Reviews/>
      <Contacts/>
    </main>
  </motion.div>
);

export default MainPage;
