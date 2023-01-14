import { useState, useEffect } from "react";
import axios from 'axios';
const useFetch = (searchParams: string = '') => {
    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: undefined
    })
   const url = `https://api.spaceflightnewsapi.net/v3/articles/?_limit=100${searchParams.length !== 0 ? '&title_contains=' + searchParams : ''}`.trim()
    function fetchNow(url: string){
        setStatus({loading: true, data: undefined, error: undefined})
        axios.get(url).then((res) => {
            setStatus({loading: false, data: res.data, error: undefined})
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