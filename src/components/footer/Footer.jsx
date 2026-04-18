import Socialprofiles from '../socialprofile/Socialprofiles';
import footerStyle from './footer.module.css';
function Footer(){
    const domain = process.env.REACT_APP_API_URL;
    return(
        <footer>
            <Socialprofiles/>
            <p className={footerStyle.copyright}>&copy; {new Date().getFullYear()}, All rights reserved <a href={domain.replace('api.','')}>{domain.replace('https://api.','')}</a></p>
        </footer>
    );
}
export default Footer;