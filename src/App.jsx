import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Recommended from './components/Recommended';
import DetailedPage from './components/DetailedPage';
import Category from './components/Category';
import SearchElement from './components/SearchElement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <h2 className='fw-bold fs-4 text-start mx-5' style={{ fontFamily: 'Times New Roman'}}>Recommended Recipes</h2>
            <Recommended />
            <h2 className='fw-bold fs-4 text-start mx-5' style={{ fontFamily: 'Times New Roman'}}>All Recipes</h2>
            <Home />
          </>
        } />
        <Route path="/:idMeal" element={<DetailedPage />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/search/:searchTerm" element={<SearchElement />} />
      </Routes>
    </Router>
  );
}

export default App;
