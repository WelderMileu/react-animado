import React from 'react';
import Link from 'next/link';

import { Container, Button, Welcome } from './style';

const WelcomeVariants = {
  hidden: {
    y: 30,
    opacity: 0
  },

  visible: {
    y: 0,
    opacity: 1
  }
}

const ButtonVariants = {
  hidden: {
    y: 30,
    opacity: 0
  },

  visible: {
    y: 0,
    opacity: 1
  },

  hover: {
    scale: 1.1
  }
}

const Home: React.FC = () => {
  return (
    <Container>

      <Welcome
        variants={WelcomeVariants}
        initial="hidden"
        animate="visible"
      > Welcome to the pizzeria </Welcome>

      <Link href="/home">
        <Button
          variants={ButtonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        > Producs </Button>
      </Link>

    </Container>
  );
}

export default Home;
