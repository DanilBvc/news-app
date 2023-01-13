import { StateElement, Store } from "../types/types"

export const newsIncrements = 20
export const newsLength = 100
export const defaultStore: Store = {
    storeState: [],
    inputValueHook: '',
    search: '',
    currentCardTitle: '',
    setNews(array: StateElement[]) {
      this.storeState = JSON.parse(JSON.stringify(array))
    },
    getNews() {
      return this.storeState
   },
   getNewsLength() {
    return this.storeState.length
   },
   getNewsByTitle(title: string) {
    return this.storeState.find((item) => {
       return title.toLowerCase().includes(item.title.toLowerCase())
    })
   },
   setInputValue(text: string) {
    this.inputValueHook = text
   },
   getInputValue() {
    return this.inputValueHook
   },
   handleSearch() {
  
   },
   handleDescription(title: string) {

   }
  }
  export const regx = /[^a-zа-я0-9]+/g