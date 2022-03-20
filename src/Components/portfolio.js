import { computeHeadingLevel } from "@testing-library/dom";
import { useState } from "react";

const Portfolio = () => {

    // const [click6,setClick6] = useState(null);
    // const handleSite6Click = () => {
    //     if(click6===null){
    //         setClick6(
    //             <div className="site6-click" >
    //             <h3>Office Software</h3>
    //             <p> - task management</p>
    //             <p>Tools: React&#47; Redux</p>
    //             <p>Program01&#47; Flexbox</p>
    //             </div>   );   
    //     }else{
    //         setClick6(null);
    //     }}

    const sites = [
        {name:'mysite-site1', content:null},
        {name:'mysite-site2', content:null},
        {name:'mysite-site3', content:null},
        {name:'mysite-site4', content:null},
        {name:'mysite-site5', content:null},
        {name:'mysite-site6', content:null},
        // {name:'mysite-site6', content:click6, click:handleSite6Click},
    ];
    const mySites = sites.map(site=>{
        return(
            <div className="mySite">
                    <div className= {site.name} onClick={site.click ? site.click : null}>{site.content}</div>
                    <button class="squareButton-arrow"></button>
                    <button class="squareButton-git"></button>
                </div>
        )});

    return (
        <div>
             <div class="Portfolio-wrapper">
            <h2>&#47;&#47; My works</h2>
            <p class="description">Portfolio</p>
            <p>Dolor sit amet, consectetur adipisicing elit. Nisi minima aspernatur reiciendis, expedita
                officiis repudiandae quo voluptates minus ipsam iusto. Officiis neque molestiae nulla accusamus
                necessitatibus voluptate! Vitae, doloremque similique.
            </p>
            <div class="mySites">
                {mySites}
            </div>
            </div>
        </div>
    );
}
export default Portfolio;