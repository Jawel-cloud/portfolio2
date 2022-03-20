const Nav = ({refHeader, refPortfolio, refBlog, refFooter}) => {

    const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
    const navList = [
        {'name':'About me', 'ref':refHeader},
        {'name':'Skills', 'ref':refHeader},
        {'name':'Portfolio', 'ref':refPortfolio},
        {'name':'Blog', 'ref':refBlog},
        {'name':'Footer', 'ref':refFooter}]

    return (
        <div>
            <div className="navigation-wrapper">
            <div className="initial">J.D.</div>
            <div className="navigation">
                <div className="navigation__buttons">
                    {navList.map(el=>{return <button key={el.name} className="navigation__button" onClick={()=>scrollToRef(el.ref)} >{el.name}</button> }) }
                </div>
                <div className="line"></div>
                <div className="navigation__buttons-icons">
                    <a href="https://twitter.com/?lang=en" target="blank"><button className="navigation__button-icon-twitter"></button></a>
                        <a href="https://www.facebook.com/" target="blank"><button className="navigation__button-icon-facebook"></button></a>
                        <a href="https://www.linkedin.com/"target="blank"><button className="navigation__button-icon-linkedin"></button></a>
                </div>
            </div>
        </div>
        </div>
    );}
export default Nav;                   