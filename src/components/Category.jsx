import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './NavBar';

const Category = () => {
    const { name } = useParams();
    //console.log(useParams())

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
                const data = await api.json();

                // console.log(data);
                setData(data.meals);

                // console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, [name]);
    if (!data) return <div class="spinner-border m-5" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>;

    return (
        <>
            <Navbar />
            <div className="mt-4 mx-4">
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
           
        </>
    )
}

export default Category
