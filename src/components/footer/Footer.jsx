import Socialprofiles from '../socialprofile/Socialprofiles';
import footerStyle from './footer.module.css';
function Footer(){
    const domain = import.meta.env.VITE_API_URL;
    return(
        <footer>
            <Socialprofiles/>
            <p className={footerStyle.copyright}>&copy; {new Date().getFullYear()}, All rights reserved <a href={domain.replace('api.','')}>{domain.replace('https://api.','')}</a></p>
        </footer>
    );
}
export default Footer;