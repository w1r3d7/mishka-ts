import { Variants } from 'framer-motion';

enum Url {
  Catalog = '/catalog',
  Home = '/',
  Order = '/order',
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}



export {
  Url,
  pageVariants
}
