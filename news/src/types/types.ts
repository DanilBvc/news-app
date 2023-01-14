export interface CardProps {
    title: string,
    describtion: string,
    date:Date | string,
    img: string | null,
    id: string
}

export interface NewsProps {
    loading: boolean,
    error: undefined | string
}
export interface StateElement {
   id: number,
   imageUrl: string,
   newsSite: string,
   publishedAt: string,
   summary: string,
   title: string,
   updatedAt: string,
   url: string
}
export interface Store {
    storeState: StateElement[] | [],
    inputValueHook: string,
    setNews(array: StateElement[]):void,
    getNewsByTitle(title: string): StateElement | undefined,
    setInputValue(text: string): void,
    getInputValue(): string,
    getNews() : StateElement[],
    getNewsLength(): number,
    handleSearch(): void,
    search: string,
    handleDescription(title: string): void,
    currentCardTitle: string
}