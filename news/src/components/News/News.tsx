import React, {useContext, useEffect} from 'react'
import { CardComponent } from '../Card/Card'
import './news.scss'
import { useInfiniteScroll } from '../../customHooks/useInfiniteScroll'
import { NewsProps } from '../../types/types'
import { StoreContext } from '../../App'
function News({loading, error}: NewsProps) {
  const {getNewsLength, getNews} = useContext(StoreContext)
  let newsCounter = useInfiniteScroll()
  if(getNewsLength() < 50) {
    newsCounter = getNewsLength()
  }
  return (
    <div className='news__wrapper'>
      <div className='news__result'>
      Results: {getNewsLength()}
      </div>
     <div className='news__container'>
      {error && getNews() === undefined ? <div>Something went wrong</div> : null}
     {loading ? <div>Loading...</div> : getNews().slice(0, newsCounter).map((item) => (
        <CardComponent key={item.title + item.url + item.author} title={item.title} describtion={item.description} date={item.publishedAt} img={item.urlToImage} id={item.title}/>
      ))}
     </div>
    </div>
  )
}

export default News