import React from 'react';
import { Route } from 'react-router-dom';
import { getNews } from '../../utils/NewsApi';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LoginPopup from '../LoginPopup/LoginPopup';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchForm from '../SearchForm/SearchForm';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import { checkToken, register, authorize } from '../../utils/Auth';
import * as api from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';

function App() {
  const currentPath = useLocation();
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [newsArr, setNewsArr] = React.useState([]);
  const [resultsCount, setResultsCount] = React.useState(3);
  const [resultButtonHide, setResultButtonHide] = React.useState(false);
  const [loadingShow, setLoadingShow] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [resultShow, setResultShow] = React.useState(false);
  const [loggedIn, setLogged] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: '1234' });
  const [savedNews, setSavedNews] = React.useState([]);
  const [keyword, setKeyword] = React.useState('');
  const [isSearchEmpty, setIsSearchEmpty] = React.useState(false);
  

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      checkToken(jwt)
        .then((res) => {
          setLogged(true);
          setCurrentUser({ name: res.data.name });
          getSavedNews();
        })
        .catch((err) => {
          console.error(`${err} - Переданный токен некорректен`);
        })
    }
    if (localStorage.getItem('news')) {
      const news = JSON.parse(localStorage.getItem('news'));
      setKeyword(localStorage.getItem('keyword'));
      setResultShow(true);
      setNewsArr(news);
    }   
  }, []);

  React.useEffect(() => {
    const newsList = JSON.stringify(newsArr);
    localStorage.setItem('news', newsList);
    if (newsArr.length === 0) {
      localStorage.removeItem('news');
    }
  }, [newsArr]);

  function handleMenuClick() {
    setMenuOpen(true);
  }

  function handleAuthClick() {
    closeAllPopupups();
    setLoginPopupOpen(true);
  }

  function handleRegClick() {
    closeAllPopupups();
    setRegisterPopupOpen(true);
  }

  function closeAllPopupups() {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(false);
    setSuccessPopupOpen(false);
    setMenuOpen(false);
  }

  function handleSearchSubmit(keyword) {
    setIsSearchEmpty(false);
    if (!keyword) {
      setIsSearchEmpty(true);
      return;
    }
    setResultsCount(3);
    setResultShow(false);
    setNotFound(false);
    setLoadingShow(true);
    setKeyword(keyword);
    localStorage.setItem('keyword', keyword);

    getNews(keyword)
      .then((res) => {
        setNewsArr(res);
        if (res.length === 0) {
          setResultShow(false);
          setLoadingShow(false);
          setNotFound(true);
        }
        else {
          setNotFound(false);
          setLoadingShow(false);
          setResultShow(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleDeleteNews(props) {
    if (currentPath.pathname === '/') {
     props = savedNews.find((news) => {
        return props.link === news.link;
      })
    }
    api.deleteSavedNews(props)
      .then((res) => {
        if (res.status !== 200) {
          return Promise.reject(res);
        }
        const newSavedNews = savedNews.filter((n) => n._id !== props._id);
        setSavedNews(newSavedNews);
      })
      .catch((err) => {
        console.error(`${err.status} - ${err.message}`);
      })
  }

  function handleSaveNews(news) {
    api.postSavedNews(news, keyword)
      .then((res) => {
        if (res.status !== 200) {
          return Promise.reject(res);
        }
        getSavedNews();
      })
      .catch((err) => {
        console.error(`${err.status} - ${err.message}`);
      })
  }

  function handleMoreClick() {
    setResultsCount(resultsCount + 3);
    if (newsArr.length <= resultsCount + 3) {
      setResultButtonHide(true);
    }
  }

  function handleRegister(email, password, name) {
    register(email, password, name)
      .then((res) => {
        if (res.status !== 200) {
          return Promise.reject(res);
        }
        setRegisterPopupOpen(false);
        setSuccessPopupOpen(true);
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsError(true);
        }
        console.error(`${err.status} - ${err.message}`);
      })
  }

  function handleLogin(email, password) {
    authorize(email, password)
      .then((res) => {
        if (res.status !== 200) {
          return Promise.reject(res);
        }
        api.getUserInfo()
          .then((res) => {
            if (res.status !== 200) {
              return Promise.reject(res);
            }
            setLogged(true);
            setLoginPopupOpen(false);
            setCurrentUser({ name: res.data.name })
          })
          .catch((err) => {
            console.error(`${err.status} - ${err.message}`);
          })
        getSavedNews();
      })
      .catch((err) => {
        console.error(`${err.status} - ${err.message}`);
      })
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('news');
    setNewsArr([]);
    setResultShow(false);
    setLogged(false);
    setSavedNews([]);
  }

  function getSavedNews() {
    api.getSavedNews()
      .then((res) => {
        if (res.status !== 200) {
          return Promise.reject(res);
        }
        setSavedNews(res.data);
      })
      .catch((err) => {
        console.error(`${err.status} - ${err.message}`);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <SuccessPopup isOpen={isSuccessPopupOpen} onClose={closeAllPopupups} onAuthClick={handleAuthClick} />
        <LoginPopup isOpen={isLoginPopupOpen} onClose={closeAllPopupups} onRegisterClick={handleRegClick} onLogin={handleLogin} />
        <RegisterPopup isOpen={isRegisterPopupOpen} isError={isError} onClose={closeAllPopupups} onAuthClick={handleAuthClick} onRegister={handleRegister} />
        <Route path="/saved-news">
          <ProtectedRoute loggedIn={loggedIn} path="/saved-news" component={Header} isLogged={loggedIn} onSignOut={handleSignOut} onAuthClick={handleAuthClick} onMenuClick={handleMenuClick} isOpen={isMenuOpen} onClose={closeAllPopupups} />
          <ProtectedRoute loggedIn={loggedIn} path="/saved-news" component={SavedNewsHeader} savedNews={savedNews} />
          <ProtectedRoute loggedIn={loggedIn} path="/saved-news" component={SavedNews} savedNews={savedNews} onNewsDeleteClick={handleDeleteNews} onNewsAddClick={handleSaveNews} />
        </Route>
        <Route exact path="/">
          <div className="search">
            <Header isLogged={loggedIn} onSignOut={handleSignOut} onAuthClick={handleAuthClick} onMenuClick={handleMenuClick} isOpen={isMenuOpen} onClose={closeAllPopupups} />
            <SearchForm onSubmit={handleSearchSubmit} isSearchEmpty={isSearchEmpty} />
          </div>
          <Main news={newsArr} savedNews={savedNews} count={resultsCount} isLogged={loggedIn} onMoreClick={handleMoreClick} resultButtonHide={resultButtonHide} loading={loadingShow} notFound={notFound} result={resultShow} onNewsAddClick={handleSaveNews} onNewsDeleteClick={handleDeleteNews} />
        </Route>
        <Footer />
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;