import { useContext, useEffect, useRef, useState } from 'react';
import navStyle from './navbar.module.css';
import { RiMenuFill } from "react-icons/ri";
import { AppContext } from '../../App';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "motion/react";
function Navbar(){
    const [changeBg,setChangeBg] = useState(window.scrollY > 50 ? true : false);
    const [activeWindow,setActiveWindow] = useState('Home');
    const [navbar,showNavbar] = useState(window.innerWidth > 950);
    const {aboutRef,homeRef,resumeRef,worksRef,blogRef,contactRef} = useContext(AppContext);
    const location = useLocation();

    useEffect(()=>{
        const Observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setActiveWindow(entry.target.getAttribute('name'));
                }
            });
        },{threshold:[.5,.75], rootMargin: "40px", scrollMargin:"40px"});
        [aboutRef,homeRef,resumeRef,worksRef,blogRef,contactRef].forEach(section=>{
            section.current && Observer.observe(section.current);
        });
        return ()=> Observer.disconnect();
    },[aboutRef,homeRef,resumeRef,worksRef,blogRef,contactRef,location.pathname]);

    useEffect(()=>{
        window.onscroll = handleScrollEffect;
        return () => window.removeEventListener('scroll',handleScrollEffect);
    },[]);

    useEffect(() => {
        const handleWindowResize = () => {
            showNavbar(window.innerWidth > 950);
        }
        window.addEventListener('resize',handleWindowResize);
        () => window.removeEventListener('resize',handleWindowResize);
    },[]);

    const scrollEffect = {
        borderBottom :'.1rem solid rgba(255, 255, 255, 0.2)',
        backgroundColor: '#0f172acc',
        backdropFilter: 'blur(8px)'
    }
    const handleScrollEffect = () => {
        window.scrollY > 50 ? setChangeBg(true) : setChangeBg(false);
    }

    const handleMenubar = () => {
        if(window.innerWidth <= 950){
            showNavbar(!navbar);
        }
    }

    const handleNavigation = (reference) => {
        reference.current ? reference.current.scrollIntoView({behavior:"smooth"}) : window.history.back();
    }

    return(
        <header style={changeBg ? scrollEffect : null} className={navStyle.navbar}>
            <h1>Prasanth</h1>
            <AnimatePresence>
                {
                    navbar ? 
                    <nav onClick={handleMenubar}>
                        <motion.ol
                            initial={{x: "300px"}}
                            animate={{x: 0}}
                            exit={{x: "300px"}}
                            transition={{duration: .25,ease: "easeOut"}}
                        >
                            <li className={activeWindow === 'home' ? navStyle.active : null} onClick={()=>handleNavigation(homeRef)}><span>Home</span></li>
                            <li className={activeWindow === 'about' ? navStyle.active : null} onClick={()=>handleNavigation(aboutRef)}><span>About</span></li>
                            <li className={activeWindow === 'resume' ? navStyle.active : null} onClick={()=>handleNavigation(resumeRef)}><span>Resume</span></li>
                            <li className={activeWindow === 'works' ? navStyle.active : null} onClick={()=>handleNavigation(worksRef)}><span>Works</span></li>
                            <li className={activeWindow === 'blogs' ? navStyle.active : null} onClick={()=>handleNavigation(blogRef)}><span>Blog</span></li>
                            <li className={activeWindow === 'contact' ? navStyle.active : null} onClick={()=>handleNavigation(contactRef)}><span>Contact</span></li>
                            <button onClick={()=>handleNavigation(contactRef)}>Hire me</button>
                        </motion.ol>
                    </nav> : null
                }
            </AnimatePresence>
            <button onClick={()=>handleNavigation(contactRef)}>Hire me</button>
            <RiMenuFill className={navStyle.hamburger} onClick={handleMenubar}/>
        </header>
    );
}
export default Navbar;