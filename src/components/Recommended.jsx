import React from 'react'
import { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import '../App.css'
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
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className="recommend " style={{
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
                                <div className='slider ' style={{ padding: '0 10px 0 0' }}>
                                    <img src={d.strMealThumb} alt="" style={{borderRadius: '20px' }} />
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
