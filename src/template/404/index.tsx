import { Wrapper, Header, TitleFirts, FlexItem, SecondTitle, Divz } from './styled';
import Logo from '../../assets/BlueState.svg';
import NotFound from '../../assets/404Page.svg';
import { Footer } from '../../components/Footer';

export function Page404(): JSX.Element {
  return (
    <>
      <Wrapper>
        <Header>
          <img src={Logo} alt="Logo FindBluePackge" />
        </Header>
        <Divz>
          <FlexItem>
            {' '}
            <img src={NotFound} alt="PageNoutFound" />
            <TitleFirts>Ops.. Oque Você está fazendo aqui ?</TitleFirts>
            <SecondTitle to={'/'}>Retornar a Home</SecondTitle>
          </FlexItem>
        </Divz>
      </Wrapper>
      <Footer height={'15'}></Footer>
    </>
  );
}
