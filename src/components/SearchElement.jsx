import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './NavBar';

const SearchElement = () => {
    const { searchTerm } = useParams();

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                const data = await api.json();

                //console.log(data)
                if (data.meals) {
                    setData(data.meals);
                } else {
                    console.error('No meals found');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchTerm]);

    if (!data) return <div class="spinner-border m-5" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>;

    return (
        <>
            <Navbar />
            <div className="mx-4 mt-4">
                <div className="row ">
                    {data.map((d, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                            <div className="card">
                                <img src={d.strMealThumb} alt={d.strMeal} style={{ width: '100%' }} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{d.strMeal}</h5>
                                    <h5 className="card-title ">{d.strArea},{d.strCategory}</h5>
                                    <Link to={`/${d.idMeal}`}>
                                        <button type="button" className="btn btn-outline-info">Show Recipe</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer class="footer" id='footer'>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section about">
                            <h3>About Us</h3>
                            <p>
                                We are a passionate team committed to bringing you the best recipes from around the world. Discover new tastes and culinary adventures with us!
                            </p>
                        </div>
                        <div class="footer-section contact">
                            <h3>Contact Info</h3>
                            <p>Address: 123 Food St, Flavor Town, USA</p>
                            <p>Phone: +1 234 567 8901</p>
                            <p>Email: <a href="mailto:info@foodrecipes.com">info@foodrecipes.com</a></p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2024 Food Recipes. All rights reserved By Mr. Abdulla.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SearchElement
