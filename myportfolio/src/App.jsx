import Header from './layouts/Header';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage}/>;
        break;
      case 'about':
        return <About />;
        break;
      case 'projects':
        return <Projects />;
        break;
      case 'contact':
        return <Contact />;  
        break;
      default:
        return <Home />;
        break;
    }
  };

  return (
    <>
      <Header setActivePage={setActivePage} activePage={activePage} />

      {renderPage()}
    </>
  );
}

export default App;