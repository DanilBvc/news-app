import { newsLength, newsIncrements } from './../store/const';
import React, { useEffect, useState } from "react";
export const useInfiniteScroll = (): number => {
    const [loading, SetLoading] = useState(false)
    const [count, SetCount] = useState(newsIncrements)
    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 < document.documentElement.scrollHeight || loading) {
            return false
        }
        SetLoading(true)
    }
    useEffect(() => {
        if(!loading) {
            return
        }
        if(count + newsIncrements >= newsLength) {
            SetCount(newsLength)
        }else {
            SetCount(count + newsIncrements)
        }
        SetLoading(false)
    }, [loading])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return count
}