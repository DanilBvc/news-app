import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/404/NotFound';
import Main from './pages/Main/Main';
import Description from './pages/Description/Description';
import './styles/global.scss';
import { StateElement, Store } from './types/types';
import { defaultStore } from './store/const';
export const StoreContext = createContext<Store>(defaultStore);
function App() {
  const [storeState, setStore] = useState<StateElement[]>([]);
  const [search, setSearch] = useState<string>('');
  const [inputValueHook, setInputValueHook] = useState<string>('microsoft');
  const [currentCardTitle, setCurrentCard] = useState('');
  let localStoreState = window.localStorage.getItem('storeState')
  let localCurrentCardTitle = window.localStorage.getItem('currentCardTitle')
  if(storeState.length === 0 && localStoreState !== null) {
    setStore(JSON.parse(localStoreState))
  }
  if(currentCardTitle.length === 0 && localCurrentCardTitle !== null) {
    setCurrentCard(JSON.parse(localCurrentCardTitle))
  }
  const setNews = (array: StateElement[]) => {
    setStore(array);
  };
  const getNews = () => {
    return storeState;
  };
  const getNewsLength = () => {
    return storeState.length;
  };
  const getNewsByTitle = (title: string) => {
    return storeState.find((item) => {
      return title.includes(item.title);
    });
  };
  const setInputValue = (text: string) => {
    setInputValueHook(text);
  };
  const getInputValue = () => {
    return inputValueHook;
  };
  const handleSearch = () => {
    setSearch(inputValueHook);
  };
  const handleDescription = (title: string) => {
    setCurrentCard(title);
  };
  useEffect(() => {
    if(storeState.length > 0) {
      window.localStorage.setItem('storeState', JSON.stringify(storeState));
    }
    if(currentCardTitle.length > 0) {
      window.localStorage.setItem('currentCardTitle', JSON.stringify(currentCardTitle));
    }
  }, [storeState, currentCardTitle])
  return (
    <div className="App">
      <StoreContext.Provider
        value={{
          storeState,
          inputValueHook,
          setNews,
          getNewsByTitle,
          setInputValue,
          getNewsLength,
          getInputValue,
          getNews,
          handleSearch,
          search,
          handleDescription,
          currentCardTitle,
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/news-details/:id" element={<Description />} />
        </Routes>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
