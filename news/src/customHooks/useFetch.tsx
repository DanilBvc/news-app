import { useState, useEffect } from "react";
import axios from 'axios';
const useFetch = (searchParams: string = '') => {
    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: undefined
    })
    const apiKey = '27117a47be9c4555a44995e00b4c9032'
   const url = 'https://newsapi.org/v2/everything?' +
  `q=${searchParams}&` +
  `searchIn=title&` +
  'from=2023-01-11&' +
  'sortBy=popularity&' +
  `apiKey=${apiKey}`;

    function fetchNow(url: string){
        setStatus({loading: true, data: undefined, error: undefined})
        axios.get(url).then((res) => {
            setStatus({loading: false, data: res.data.articles, error: undefined})
        }).catch((error) => {
            setStatus({loading: false,data: undefined, error: error})
        })

    }
    useEffect(() => {
        if(url) {
           try {
            fetchNow(url)
           }catch(error : any) {
            setStatus({loading: false,data: undefined, error: error})
           }
        }
    }, [searchParams])
    return {...status, fetchNow}
}
export default useFetch