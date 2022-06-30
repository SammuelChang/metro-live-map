import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './globalStyles';
import Header from './components/Header';
import Home from './pages/Home';
// import Sidebar from './components/Sidebar';
import Live from './pages/Live';
import Collection from './pages/Collection';
import LiveRoute from './pages/LiveRoute';
import LiveCity from './pages/LiveCity';
import LiveNearbyPath from './pages/LiveNearbyPath';
import AdvInfo from './pages/AdvInfo';

function App() {
  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/live/route" element={<LiveRoute />} />
          <Route path="/live/city" element={<LiveCity />} />
          <Route path="/live/nearbyPath" element={<LiveNearbyPath />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/advInfo" element={<AdvInfo />} />
        </Routes>
        {/* <Footer /> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
