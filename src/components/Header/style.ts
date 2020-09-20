import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  padding: 30px;
`;

export const Icon = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  p {
    font-size: 30px;
    color: #32021F;
    font-weight: bold;
    padding-top: 15px;
    text-shadow: 1px 1px 1px white,
                  -1px -1px 1px white,
                  -2px -2px 1px white;
  }
`;
