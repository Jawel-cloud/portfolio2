import React, { useRef } from 'react';

import circle1 from '../Assets/Pictures/koła_01.png';
import circle2 from '../Assets/Pictures/koła_02.png';
import circle3 from '../Assets/Pictures/koła_03.png';

import components from '../Components';

import '../Styles/style.css';
import '../Styles/style-nav.css';
import '../Styles/style-header.css';
import '../Styles/style-tools.css';
import '../Styles/style-portfolio.css';
import '../Styles/style-blog.css';
import '../Styles/style-footer.css';
import '../Styles/style-media.css';

// import '../Styles/themes/default/theme.scss';

const Homepage = () => {

    const {Nav, Header, Tools, Portfolio, Blog, Footer} = components;
    const refHeader = useRef(null);
    const refPortfolio = useRef(null);
    const refBlog = useRef(null);
    const refFooter = useRef(null);
    return (
        <div>
            <img className="circle1" src= {circle3} alt=""></img>
            <img className="circle2" src= {circle1} alt=""></img>
            <img className="circle3" src= {circle2} alt=""></img>
            <img className="circle4" src= {circle3} alt=""></img>
            <img className="circle5" src= {circle3} alt=""></img>
            <img className="circle6" src= {circle1} alt=""></img>
            <img className="circle7" src= {circle1} alt=""></img>
            <img className="circle8" src= {circle1} alt=""></img>
            <img className="circle9" src= {circle3} alt=""></img>

            <Nav {...{refHeader, refPortfolio, refBlog, refFooter}} />
            <div ref={refHeader}><Header /></div>
            <Tools/>
            <div ref={refPortfolio}><Portfolio/></div>
            <div ref={refBlog}><Blog/></div>
            <div ref={refFooter}><Footer/></div>
            
        </div>
    );
}
 
export default Homepage;

//yarn add node-sass