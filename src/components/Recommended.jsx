import React from 'react'
import { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Recommended = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
            const data = await api.json();

            //console.log(data.meals);
            setData(data.meals);

        }
        fetchData();

    }, [])

    var settings = {
        //dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <>
            <div className="recommend " style={{
                height: '50vh',
                width: '90%',
                margin: 'auto'
            }
            }>
                <Slider {...settings} style={{
                    margin: '1rem'
                }
                }>
                    {data.map((d) => {
                        return (
                            <Link to={`/${d.idMeal}`}>
                                <div className='slider'>
                                    <img src={d.strMealThumb} alt="" style={{ width: '18rem', height: '16rem', borderRadius: '20px' }} />
                                </div>
                            </Link>
                        )
                    })}
                </Slider>
            </div>

        </>
    )
}
export default Recommended
