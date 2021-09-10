import Logo from '../../assets/BlueState.svg';
import Find from '../../assets/Find.svg';

import {
  GridLayout,
  Person,
  Header,
  SecondTitle,
  TitleFirts,
  DivFlex,
  ContainerText,
  SecondDiv,
  Wrapper,
  FirtDiv,
} from './styled';
import { CardsMap } from '../../components/CardsMap';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import usePaginate from './hooks/usePaginate';
import { ToastContainer } from 'react-toastify';

export function ResultFind(): JSX.Element {
  const { HandleReturnResult, HandleLoadResult, ResultSliced, noReturnPost, noMorePosts } = usePaginate();

  return (
    <>
      <Wrapper>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
        />
        <Header>
          <img src={Logo} alt="Logo FindBluePackge" />
        </Header>
        <GridLayout>
          <FirtDiv>
            <Person src={Find} />
          </FirtDiv>
          <SecondDiv>
            <ContainerText>
              <TitleFirts>Localizamos Sua Encomenda!</TitleFirts>
              <SecondTitle to={'/'}>Voltar a Pagina inicial</SecondTitle>
            </ContainerText>
            <CardsMap Result={ResultSliced} />
            <DivFlex>
              <Button
                MBottom={true}
                Text={'Ver mais'}
                Center={true}
                eventClick={HandleLoadResult}
                disabled={noMorePosts}
              />

              <Button
                Text={'Voltar'}
                MBottom={true}
                Center={true}
                eventClick={HandleReturnResult}
                disabled={noReturnPost}
              />
            </DivFlex>
          </SecondDiv>
        </GridLayout>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}
