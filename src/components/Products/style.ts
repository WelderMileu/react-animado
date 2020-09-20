import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #32021F , #4B2E39);
`;

export const List = styled.div`
    width: 50%;
  ul {
    li {
      list-style: none;
      font-size: 1.5rem;
      margin-bottom: 10px;
      padding: 20px 100px;
      cursor: pointer;

      width: 100%;
      display: flex;
      align-items: center;

      svg {
        margin-right: 100px;
      }
    }
  }
`;

export const ButtonP = styled.button`
  width: 200px;
  padding: 20px 10px;
  border: 1px solid #fff;
  border-radius: 50px;
  background-color: transparent;
  color: #fff;
  font-size: 1.5rem;
  margin: 10px;
  cursor: pointer;
`;
export const ButtonPrev = styled.button`
  width: 200px;
  padding: 20px 10px;
  border: 1px solid #fff;
  border-radius: 50px;
  background-color: #fff;
  color: #32021F;
  font-size: 1.5rem;
  margin: 10px;
  cursor: pointer;
`;
export const Options = styled(motion.div)`
  display: flex;
  margin-top: 50px;
`;
