import { Relative, Animation, Block } from './styled';
import ImgWater from '../../assets/test.svg';
import { FooterProps } from './types';

export function Footer({ height }: FooterProps): JSX.Element {
  return (
    <>
      <Block>
        <Relative height={height}>
          <Animation src={ImgWater} alt="Imagem do Footer" />
        </Relative>
      </Block>
    </>
  );
}
