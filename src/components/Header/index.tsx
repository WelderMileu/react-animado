import React from 'react';

import { Container, Icon } from './style';
import { FaPizzaSlice } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <Container>
      <Icon>
        <FaPizzaSlice size={40} color="#fff" />
        <p>Motion Pizza</p>
      </Icon>
    </Container>
  );
}

export default Header;
