import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #32021F , #4B2E39);
`;

export const Welcome = styled(motion.h1)`
    color: #fff;
    font-weight: 100;
    font-size: 60px;
`;

export const Button = styled(motion.button)`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 100px;
  width: 200px;
  padding: 20px 10px;
  color: #fff;
  font-size: 1.5rem;
  margin-top: 50px;
  transition: .3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #32021F;
    background-color: #fff; 
  }
`;
