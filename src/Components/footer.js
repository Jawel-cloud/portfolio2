import programista2 from '../Assets/Pictures/programista2.png'
import kontakt from '../Assets/Icons/kontakt.png';

const Footer = () => {
    return (
        <div>
                    <div id="footer-wrapper" class="footer-wrapper">
            <div class="footer__contact">
                <h2>&#47;&#47; Contact me</h2>
                <p>If you are willing to work with me, contact me.
                    I can join your conference to serve you with my
                    engeneering experience.
                </p>
                <input type="text" placeholder="   Your e-mail"/>
                <input type="text" placeholder="   Your name"/>
                <input class="bigInput" type="text" placeholder="   How can I help you?"/>
                <button>Send</button>
            </div>
            <div class="footer__picture">
                <img src={programista2} alt="Zdjęcie programisty"/>
                <pre>
                 autor: John Doe <br/>
              username: @johndoe <br/>
  description: Software Engineer <br/>
     homepage: johndoe.github.pl <br/>
    repository type: Open-source <br/>
         url: github.com/johndoe
             </pre>
            </div>
            <div class="footer__phone">
                <img src={kontakt} alt="phone-number"/>
                <pre>
john_doe@gmail.com <br/>
+32 123 345 567
                </pre>
            </div>
    </div>
        </div>
    );
}
 
export default Footer;