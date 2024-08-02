import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
      const data = await api.json();

      setData(data.meals);
    }
    fetchData();
  }, []);

  if (!data) return <div className="spinner-border m-5" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>;

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {data.map((d, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <div className="card">
                <img src={d.strMealThumb} alt={d.strMeal} style={{ width: '100%' }} className="card-img-top" />
                <div className="card-body p-2 p-sm p-md p-lg">
                  <h5 className="card-title fw-bold fs-6 fs-sm-5 fs-md-4">{d.strMeal}</h5>
                  <h5 className="card-subtitle mb-2 text-muted fs-6">{d.strArea}, {d.strCategory}</h5>
                  <Link to={`/${d.idMeal}`}>
                    <button type="button" className="btn btn-outline-info btn-sm btn-md btn-lg">Recipe</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer" id='footer'>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section about">
              <h3>About Us</h3>
              <p>
                We are a passionate team committed to bringing you the best recipes from around the world. Discover new tastes and culinary adventures with us!
              </p>
            </div>
            <div className="footer-section contact">
              <h3>Contact Info</h3>
              <p>Address: 123 Food St, Flavor Town, USA</p>
              <p>Phone: +1 234 567 8901</p>
              <p>Email: <a href="mailto:info@foodrecipes.com">info@foodrecipes.com</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Food Recipes. All rights reserved By Mr. Abdulla.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home;
