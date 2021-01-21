import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LoginPopup from '../LoginPopup/LoginPopup';
import Main from '../Main/Main';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchForm from '../SearchForm/SearchForm';
import SuccessPopup from '../SuccessPopup/SuccessPopup';


function App() {
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

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

  function handleSuccessClick() {
    closeAllPopupups();
    setSuccessPopupOpen(true);
  }

  function closeAllPopupups() {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(false);
    setSuccessPopupOpen(false);
    setMenuOpen(false);
  }

  return (
    <div className="page">
      <SuccessPopup isOpen={isSuccessPopupOpen} onClose={closeAllPopupups} />
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeAllPopupups} onRegisterClick={handleRegClick} />
      <RegisterPopup isOpen={isRegisterPopupOpen} onClose={closeAllPopupups} onSuccessClick={handleSuccessClick} />
      <Route path="/saved-news">
        <Header onAuthClick={handleAuthClick} onMenuClick={handleMenuClick} isOpen={isMenuOpen} onClose={closeAllPopupups} />
        <SavedNewsHeader />
        <SavedNews />
      </Route>
      <Route exact path="/">
        <div className="search">
          <Header onAuthClick={handleAuthClick} onMenuClick={handleMenuClick} isOpen={isMenuOpen} onClose={closeAllPopupups} />
          <SearchForm />
        </div>
        <Main />
      </Route>
      <Footer />
    </div>
  );
}

export default App;