import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

const DetailedPage = () => {
    const { idMeal } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                const result = await response.json();
                if (result.meals) {
                    setData(result.meals[0]);
                } else {
                    console.error('No meals found');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [idMeal]);

    if (!data) return <div class="spinner-border m-5" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>;

    return (
        <>
            <NavBar />
            <div className="card mb-3 mt-3" style={{ maxWidth: '100%' }}>
                <h1 className="card-title fs-1 fw-bold text-center">{data.strMeal}</h1>
                <div className="row g-3">
                    <div className="col-md-4 mt-5">
                        <img
                            src={data.strMealThumb}
                            alt={data.strMeal}
                            style={{ borderRadius: '10px', width: '100%' }}
                        />
                        {data.strYoutube && (
                            <div style={{ marginTop: '30px' }}>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={data.strYoutube.replace('watch?v=', 'embed/')}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title fs-4 fw-bold">Ingredients</h2>
                            <ul className="list-group">
                                {[...Array(10)].map((_, index) => {
                                    const ingredient = data[`strIngredient${index + 1}`];
                                    const measure = data[`strMeasure${index + 1}`];
                                    return ingredient ? (
                                        <li key={index} className="list-group-item">
                                            {ingredient} - {measure}
                                        </li>
                                    ) : null;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body mb-5 mx-3">
                <h2 className='fs-4 fw-bold'>Instructions</h2>
                <p>{data.strInstructions}</p>
            </div>
        </>
    );
};

export default DetailedPage;
