// import React from 'react'
// import data from '../assets/data.js'

// const Home = () => {
//   return (
//     <div>
//         <main>
//             <h1>Featured Products</h1>
//             {data.products.map(product=> ( 
//                <div key={product.name}>
//                 <img src={product.image} alt={product.name} />
//                         <p>{product.name} <span>{product.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span></p>
//                         <p>{product.price}</p>
//                         <p>{product.description}</p>
//                </div>

//             ))
// }
//         </main>
//     </div>
//   )
// }

// export default Home

// import React, { useEffect, useState } from 'react'
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import { Link } from "react-router-dom"
import data from '../../assets/data.js'
// import MovieSearch from '../../components/search/MovieSearch';


export default function Home() {


    return (
        <>
            <h1>Featured Products</h1>
            <div className="featured">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                // dynamicHeight={true}
                >
                    {
                        data.products.map(product => (
                           <div>
                                <div className="posterImage">
                                    <img src={product.image} alt={product.image} />
                                </div>

                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{product.name}</div>
                                    <div className="posterImage__runtime">$ {product.price}</div>
                                    <div className="posterImage__description">
                                        {product.description}
                                    </div> 
                                    </div>
                            </div>                             
                                ))
                    }
                                </Carousel>
                            </div>
        </>


                )

}
//  <div>
//                                 <div className="carousel" key={product.name}>
//                                     <img  src={product.image} alt={product.name} />
//                                     <a href="#"><p>{product.name} <span>{product.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span></p></a>
//                                     <p>$ {product.price}</p>
//                                     <p>{product.description}</p>
//                                 </div>
//                             </div>