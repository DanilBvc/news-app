import React, {useContext, useEffect} from 'react';
import Search from '../../components/Search/Search';
import News from '../../components/News/News';
import './main.scss'
import useFetch from '../../customHooks/useFetch';
import { StoreContext } from '../../App';
function Main() {
  const {setNews, search} = useContext(StoreContext)
  let {data, loading, error} = useFetch(search.length === 0 ? "microsoft" : search)
  useEffect(() => {
    if(data !== undefined) {
      setNews(data)
    }
  }, [data])
  return (
    <>
   <div className='main-page__container'>
   <Search />
      <News loading={loading} error={error}/>
   </div>
    </>
  );
}

export default Main;
