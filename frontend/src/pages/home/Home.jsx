import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import { Link } from "react-router-dom"
import data from '../../assets/data.js'



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
                           <div key={product.slug}>
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
