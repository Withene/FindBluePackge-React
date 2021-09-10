import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Wrapper = styled.div`
  margin-left: 120px;
  margin-right: 120px;
  @media (max-width: 50rem) {
    margin: 0;
  }
`;

export const Header = styled.header`
  img {
    margin-left: 0.5rem;
    margin-top: 3.125rem;
    width: 100%;
    max-width: 9.375rem;
  }
  @media (max-width: 50rem) {
    flex-direction: column;
    position: relative;
    img {
      margin-left: 2.25rem;
      margin-top: 0.925rem;
    }
  }
`;
export const TitleFirts = styled.h1`
  /* font-weight: 400; */
  font-weight: normal;
  font-size: clamp(26px, 3vw, 50px);
  line-height: 55px;
  letter-spacing: 3px;
`;
export const SecondTitle = styled(Link)`
  /* font-weight: 400; */
  font-weight: normal;
  font-size: clamp(17px, 3vw, 25px);
  cursor: pointer;
  color: #0096c7;
  line-height: 55px;
  letter-spacing: 3px;
`;
export const Divz = styled.div`
  width: 98%;
  margin: 0 auto;
  height: 100%;
  text-align: center;
  margin-bottom: 30px;
`;
export const FlexItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    width: 743px;
    height: 386px;
  }
  @media (max-width: 50rem) {
    img {
      width: 250px;
      height: 386px;
    }
  }
`;
