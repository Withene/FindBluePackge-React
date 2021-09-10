/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../contexts/AuthContex';
import { Result } from './types';

export type PaginetedProps = {
  HandleReturnResult: () => void;
  HandleLoadResult: () => void;
  ResultSliced: Result[];
  noReturnPost: boolean;
  noMorePosts: boolean;
};

export default function usePaginate(): PaginetedProps {
  const { PackDates } = useContext(GlobalContext);

  const [ResultSliced, setResultSliced] = useState<Result[]>([]);

  const [ActualDate, setActualDate] = useState<number>(0);

  const [postPerPage] = useState<number>(2);

  const noMorePosts = ActualDate + postPerPage >= PackDates.length;
  const noReturnPost = ActualDate ? ActualDate <= 0 : ActualDate >= 0;

  const handleLoadposts = useCallback(
    async (ActualDate, postPerPage) => {
      //KKKKK sei tipar não tudo da error.

      const Slice: any = PackDates.slice(ActualDate, postPerPage);
      setResultSliced(Slice);
    },
    [PackDates],
  );

  useEffect(() => {
    handleLoadposts(0, postPerPage);
  }, [handleLoadposts, postPerPage]);

  const HandleLoadResult = () => {
    const Nextpage = ActualDate + postPerPage;
    const LoadMore: any = PackDates.slice(Nextpage, Nextpage + postPerPage);
    setResultSliced(LoadMore);
    setActualDate(Nextpage);
  };

  const HandleReturnResult = () => {
    const Nextpage = ActualDate - postPerPage;

    const Teste: any = PackDates.slice(Nextpage, Nextpage + postPerPage);
    setResultSliced(Teste);
    setActualDate(Nextpage);
  };

  return { HandleReturnResult, HandleLoadResult, ResultSliced, noReturnPost, noMorePosts };
}
