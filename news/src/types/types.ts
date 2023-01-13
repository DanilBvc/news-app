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
    source: {
        id: string | null,
        name: string
    },
    author: string | null,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
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