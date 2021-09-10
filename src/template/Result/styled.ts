import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 120px;
  margin-right: 120px;
  @media (max-width: 50rem) {
    margin: 0;
  }
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
  align-items: center;
  max-width: 4160px;
`;
export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 50rem) {
    flex-direction: column;
    margin-bottom: 1rem;
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

export const ContainerText = styled.div`
  margin-top: 1rem;
  text-align: center;
  max-width: 700px;
  width: 100%;
`;

export const TitleFirts = styled.h1`
  /* font-weight: 400; */
  font-weight: normal;
  font-size: clamp(29px, 3vw, 40px);
  line-height: 55px;
  margin-bottom: 5px;
  letter-spacing: 8%;
`;
export const SecondTitle = styled(Link)`
  /* font-weight: 400; */
  font-weight: normal;
  font-size: clamp(16px, 3vw, 18px);
  line-height: 55px;
  color: #0096c7;
  margin-bottom: 20px;
  letter-spacing: 8%;
  text-decoration: none;
`;

export const HowWork = styled.h1`
  /* font-weight: 400; */
  font-weight: normal;
  font-size: clamp(32px, 3vw, 50px);
  line-height: 55px;
  text-align: right;
  margin-bottom: 10px;
`;

export const About = styled.div`
  margin-top: 80px;
  @media (max-width: 50rem) {
    margin-top: 50px;
  }
`;

export const How = styled.p`
  text-align: right;
  display: block;
`;
export const SubTitle = styled.p``;

export const SecondDiv = styled.div`
  /*  overflow-x: none; */
  padding: 1rem;
  max-width: 700px;
`;

export const Person = styled.img`
  width: 100%;
  margin: 0 auto;

  display: block;
  @media (max-width: 50rem) {
    width: 70%;
  }
`;

export const FirtDiv = styled.div`
  min-width: 18.75rem;
  display: block;
`;

export const ValidateMessage = styled.span`
  display: block;
  position: absolute;
  margin: -1.7rem 0 16px 0.5625rem;
  /* text-align: right; */
  color: red;
  font-size: 14.8px;
`;

export const Formz = styled.form``;
