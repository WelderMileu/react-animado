import React from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

import {
  Container,
  List,
  ButtonP,
  ButtonPrev,
  Options
} from './style';

const ContainerVariants = {
  hidden: {
    x: "-300px",
    opacity: 0
  },

  visible: {
    x: 0,
    opacity: 1
  }
}

const ItemsVariants = {
  hidden: {
    x: "100px",
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1
  }
}

const OptionsVariants = {
  hidden: {
    y: "-30px",
    opacity: 0
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.3
    }
  }
}

const Products: React.FC = () => {
  return (
    <Container>
      <List>
        <motion.ul
          variants={ContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li
            variants={ItemsVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: .5 }}
          >
            <FaAngleRight size={40} color="#fff" />
            Mussarela
          </motion.li>

          <motion.li
            variants={ItemsVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: .7 }}
          >
            <FaAngleRight size={40} color="#fff" />
            Calabresa
          </motion.li>

          <motion.li
            variants={ItemsVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: .9 }}
          >
            <FaAngleRight size={40} color="#fff" />
            Portuquesa
          </motion.li>

          <motion.li
            variants={ItemsVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <FaAngleRight size={40} color="#fff" />
            Combo
          </motion.li>
        </motion.ul>
      </List>

      <Options
        variants={OptionsVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="/">
          <ButtonPrev> Previus </ButtonPrev>
        </Link>

        <Link href="/">
          <ButtonP> Pedido </ButtonP>
        </Link>
      </Options>

    </Container>
  );
}

export default Products;