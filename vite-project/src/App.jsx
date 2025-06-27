// App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar.jsx';
import { About } from './About.jsx';
import { Games } from './Games.jsx';
import { Contact } from './Contact.jsx';
import { Home } from './Home.jsx';
import { PageNotFound } from './PageNotFound.jsx';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}
