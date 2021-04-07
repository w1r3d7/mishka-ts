import React from 'react';
import { motion } from 'framer-motion';
import Catalog from '../components/catalog';
import { pageVariants } from '../constants';
import Production from '../components/production';


const CatalogPage: React.FC = () => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
  >
    <Catalog/>
    <Production />
  </motion.div>
);

export default CatalogPage;
