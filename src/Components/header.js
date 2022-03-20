import programista from '../Assets/Pictures/programista.png';

const Header = () => {
    const skills = [
        {name: 'skills-PHP', content:'PHP 100%'},
        {name: 'skills-JS', content:'JS 90%'},
        {name: 'skills-HTML', content:'HTML 90%'},
        {name: 'skills-NODEJS', content:'NODEJS 60%'},
        {name: 'skills-CSS', content:'CSS 90%'},
        {name: 'skills-GO', content:'GO 60%'}];
    const mySkills = skills.map(skill=>{
        return(
        <div className="skills">
            <div className={skill.name}>{skill.content}</div>
        </div>)})    

    return (
        <div>
            <div id="header-wrapper" className="header-wrapper">
             <div className="header__primary">
                 <img className="myPicture" src={programista} alt="Programista"/>
                 <div className="header__name">
                     <h1>&#47;&#47; Hi, My name is John Doe</h1>
                     <p className="description">Software Engineer</p>
                     <p>Passionate Techy and Tech Author with 3 years of experience within the field.</p>
                     <div className="header__name-buttons">
                         <p className="seeWorks">See my works</p>
                         <button className="squareButton-git"></button>
                         <button className="squareButton-dev"></button>
                        
                     </div>
                 </div>
                 <div className="header__aside">
                     <h2>&#47;&#47; I am a freelancer</h2>
                     <p>Contact me if you want to work with me</p>
                     <div className="header__aside-buttons">
                     <button className="header__button">Hire me</button>
                     <button className="header__button">Dovnload CV</button>
                 </div>
                 </div>
             </div>
             <div className="header__secondary">
                 <div className="header__aboutMe">
                     <h2>&#47;&#47; About me</h2>
                     <p className="description">All about Techy</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere                          laborum aliquid natus vero sed vel! Quae nemo atque magnam! 
                         Consectetur dolores odio recusandae animi inventore accusantium 
                         blanditiis eius amet. At.Quasi, quod. Distinctio dolores dicta 
                         aperiam non minus eius a doloribus adipisci dolorum id est 
                         consequuntur. Illo, sint!</p>
                     <p className="description">My interests</p>
                     <ul>
                         <li>music</li>
                         <li>kitesurfing</li>
                         <li>cycling</li>
                     </ul>
                     {/* <div className="header-cours">
                         <p>Ukończyłem kurs Easy Code</p>
                         <a href="https://easy-code.io/" target="blank"><button className="navigation"></button></a>
                     </div> */}
                 </div>
                 <div id="header__skills" className="header__skills">
                     <h2>&#47;&#47; Skills</h2>
                     <p>Dicta quasi earum animi numquam quo minima. Recusandae ex dolorem dignissimos veritatis libero
                         ut
                         at. Debitis, sit?</p>
                         {mySkills}
                 </div>
             </div>
        </div>
        </div>
    );}
export default Header;