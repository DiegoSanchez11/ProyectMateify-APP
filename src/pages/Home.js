import React from 'react';

// pages
import Mateify from './Mateify';

// components
import Navbar from '../components/Navbar';
import Boton from '../components/Boton';
import Text from '../components/Text';

// css
import './Home.css';

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="box__home-bottom">
                <Text />
                <div className="home__button">
                    <Boton button_variant="outlined" button_color="primary" button_name="Enter the page">
                        
                    </Boton>    
                </div>
                <footer>
                <p className="home__paragraph-bottom"> This page is supported by <a className="home__link-footer" href="https://www.matea.social/"> Matea Agency </a></p>
                </footer>
            </div>
        </div>
    )
}

export default Home;