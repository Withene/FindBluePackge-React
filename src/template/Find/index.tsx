import { Input } from '../../components/Input';
import Logo from '../../assets/BlueState.svg';
import { GlobalContext } from '../../contexts/AuthContex';
import { useContext } from 'react';
import { Button } from '../../components/Button';
import { Formik } from 'formik';
import { TypesOfErros, TypeOfValueState } from './types';
import Find from '../../assets/FindPack.svg';
import {
  GridLayout,
  Formz,
  Person,
  Header,
  SubTitle,
  TitleFirts,
  ContainerText,
  ValidateMessage,
  SecondDiv,
  Wrapper,
  FirtDiv,
  HowWork,
  About,
  How,
  Load,
} from './styled';
import Loading from '../../assets/Loading.svg';
import { Footer } from '../../components/Footer';
import { ToastContainer } from 'react-toastify';

export function FindYour(): JSX.Element {
  const { handleLoadPackge } = useContext(GlobalContext);

  const handleApiLoad = async (values: TypeOfValueState) => {
    const FindValues: string = values.find;
    const Data: Array<string> = [];
    Data.push(FindValues);
    return await handleLoadPackge(Data);
  };

  return (
    <>
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
      <Wrapper>
        <Header>
          <img src={Logo} alt="Logo FindBluePackge" />
        </Header>
        <GridLayout>
          <FirtDiv>
            <Person src={Find} />
          </FirtDiv>
          <SecondDiv>
            <ContainerText>
              <TitleFirts>Rastreie o seu Pacote</TitleFirts>
              <SubTitle>De uma forma fácil e rápida</SubTitle>
            </ContainerText>
            <Formik
              initialValues={{ find: '' }}
              validateOnChange={false}
              validateOnBlur={false}
              validate={(values) => {
                const errors: TypesOfErros = {};
                if (!values.find) {
                  errors.find = 'Campo Necessario';
                }
                if (!/^[A-Z]{2}[1-9]{9}[A-Z]{2}$/.test(values.find)) {
                  errors.find = 'Insira um Codigo valido';
                }
                return errors;
              }}
              onSubmit={(values: TypeOfValueState, { setSubmitting }) => {
                handleApiLoad(values)
                  .then(() => {
                    setSubmitting(false);
                  })
                  .catch(() => {
                    setSubmitting(false);
                  });
              }}
            >
              {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Formz onSubmit={handleSubmit}>
                  <Input
                    inputType={'text'}
                    Mbottom="2"
                    value={values.find}
                    event={handleChange}
                    eventBlur={handleBlur}
                    name={'find'}
                    id="find"
                    placeholder={'Codigo de Rastreio'}
                    maxwidth={'44'}
                  />
                  {errors.find && <ValidateMessage>{errors.find}</ValidateMessage>}

                  {!isSubmitting ? (
                    <Button Center={true} Text={'Rastrear'} type={'submit'} />
                  ) : (
                    <Load alt={'Carregando'} src={Loading} />
                  )}
                </Formz>
              )}
            </Formik>
            <About>
              <HowWork>Como Funciona?</HowWork>
              <How>
                LE314514661SEsit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
                magna fringilla urna, porttitor ectus magna fringilla urnectus magna fLorem ipsum dolor sit amet
              </How>
            </About>
          </SecondDiv>
        </GridLayout>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}
