import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;
