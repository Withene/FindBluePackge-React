import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import api from '../api';
import { useState } from 'react';
import { DataProps, PackDatesProps } from '../types';

export type UseFindProps = {
  handleLoadPackge: (data: DataProps) => Promise<void>;
  PackDates: Array<PackDatesProps>;
  have: boolean;
};
export default function useFind(): UseFindProps {
  const history = useHistory();
  const [PackDates, setPackDates] = useState<Array<PackDatesProps>>([]);
  const [have, setHave] = useState<boolean>(false);

  async function handleLoadPackge(data: DataProps) {
    try {
      const Pack = await api.post('/find', { data: data });

      const meuArray = Pack.data[0];

      if (meuArray.length <= 0) {
        setHave(false);
        toast.error('Pacote Não localizado!');
        return history.push('/');
      }
      const meuArrayInvertido = meuArray.slice(0).reverse();
      await setPackDates(meuArrayInvertido);
      setHave(true);
      history.push('/result');
    } catch (err) {
      toast.error('Pacote Não localizado!');
      return history.push('/');
    }
  }

  return { handleLoadPackge, PackDates, have };
}
