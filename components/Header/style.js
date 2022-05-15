import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;

export const Content = styled.div`
  width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Title = styled.div`
  font-size: 26px;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  
  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #4a4a50;
    position: fixed;
    height: 100%;
    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;
    margin-top: 35px;
    a {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 18px;
  height: 45px;
  transition: 0.3s;
  border-radius: 8px;
  :hover{
    color: #000;
  }
  
  &.active {
    color: #000;
  }
  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  margin-top: -32px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const SubTitle = styled.span``;