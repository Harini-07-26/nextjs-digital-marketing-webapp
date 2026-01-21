'use client';

import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
      Navbar
    </motion.nav>
  );
};

export default Navbar;
