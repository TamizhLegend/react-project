import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import Netflix from './pages/Netflix';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import About from './pages/About';
import Todos from './pages/Todos';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="netflix" element={<Netflix />} />
        <Route path="products" element={<Products />} />
        <Route path="users" element={<Users />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App;
