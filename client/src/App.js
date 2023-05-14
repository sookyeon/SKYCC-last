import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routers/Home';
import Onboarding from './routers/Onboarding';
import Mate from './routers/Mate';
import styled from 'styled-components';
// import SlackLogin from './components/SlackLogin';
import SlackLogin from 'react-slack-login'
import './App.css';
// import SlackLogin from './slackLogin';
// Components for each page
const Navbox = styled.ul`
  background-color : '0D6EFD';
`
const Links = styled.ul`
   display : flex;
   justify-content: space-evenly;
`
function App() {
  return (
    <Router>
        <Navbox>
          <Links>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Onboarding</Link>
            </li>
            <li>
              <Link to="/contact">Mate</Link>
            </li>
            <li>
              <Link to="/login">Signin</Link>
            </li>
          </Links>
        </Navbox>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Onboarding />} />
          <Route path="/contact" element={<Mate />} />
        </Routes>
      </Router>
  );
}

export default App;