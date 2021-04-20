import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../constants';
import Order from '../components/order';

const OrderPage = () => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
  >
    <main className="page-main">
      <Order />
    </main>
  </motion.div>
)

export default OrderPage;
