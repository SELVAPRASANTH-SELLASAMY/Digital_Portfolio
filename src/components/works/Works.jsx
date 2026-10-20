import workStyle from './works.module.css'; 
import { RiInformation2Line, RiCodeSSlashLine } from "react-icons/ri";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import Lazyimage from '../lazyimage/Lazyimage';
import {cgs,M_cgs,alcaline,M_alcaline,zuko,M_zuko,portfolio,M_portfolio} from './workresources';
import { motion } from "motion/react";
function Works(){
    const navigate = useNavigate();
    const {worksRef} = useContext(AppContext);
    const workContent = [
        {
            id: 1,
            image:cgs,
            thumb:M_cgs,
            heading:"Core Green Softwares landing page",
            definition:"Landing page with applicant management system",
            stack:"HTML,CSS,javascript,php,mysql,ajax",
            liveUrl:'https://coregreensoftwares.great-site.net/',
            repoUrl:'https://github.com/SELVAPRASANTH-SELLASAMY/Core-Green-Softwares.git'
        },
        {
            id: 2,
            image:zuko,
            thumb:M_zuko,
            heading:"Zuko coffee",
            definition:"Attractive landing page for coffee shop",
            stack:"ReactJs,CSS,swiperJs",
            liveUrl:'https://selvaprasanth-sellasamy.github.io/zuko_coffee/',
            repoUrl:'https://github.com/SELVAPRASANTH-SELLASAMY/zuko_coffee.git'
        },
        {
            id: 3,
            image:portfolio,
            thumb:M_portfolio,
            heading:"Portfolio",
            definition:"A portfolio with visually appealing animations",
            stack:"ReactJs,CSS,swiperJs",
            liveUrl:'https://selvaprasanth-sellasamy.github.io/portfolio/',
            repoUrl:'https://github.com/SELVAPRASANTH-SELLASAMY/portfolio.git'
        },
        {
            id: 4,
            image:alcaline,
            thumb:M_alcaline,
            heading:"Alcaline technologies landing page",
            definition:"A responsive landing page",
            stack:"HTML,CSS,javascript",
            liveUrl:'https://selvaprasanth-sellasamy.github.io/Alkaline_technologies/',
            repoUrl:'https://github.com/SELVAPRASANTH-SELLASAMY/Alkaline_technologies.git'
        }
    ];

    const [filteredContents,setFilteredContents] = useState(workContent);
    const [activeTab,setActiveTab] = useState('All');
    useEffect(() => {
        if(activeTab === "All"){
            return setFilteredContents(workContent);
        }
        const filterOptions = activeTab.split("&").map(option => option.trim().toLowerCase().replaceAll(' ',''));
        setFilteredContents(workContent.filter((content) => {return content.stack.toLowerCase().trim().replaceAll(' ','').includes(filterOptions)}));
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[activeTab]);

    const redirect = (url) => {
        window.open(url,"_blank","noopener noreferrer");
    }
    const goTo = (name) => {
        navigate(`/work?name=${name}`);
    }

    const tabAnimations = {
        All: {
            initial: { scale: 0 },
            animate: { scale: 1 },
        },
        "HTML & CSS": {
            initial: { x: "100%" },
            animate: { x: 0 },
        },
        "React Js": {
            initial: { scale: 0 },
            animate: { scale: 1 },
        },
        "PHP & MySQL": {
            initial: { x: "-100%" },
            animate: { x: 0 },
        },
        "JavaScript": {
            initial: { y: "100%" },
            animate: { y: 0 },
        }
    };
    
    return(
        <section name='works' ref={worksRef} className={workStyle.works}>
            <h2>My Works <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <ul>
                {
                    ['All','HTML & CSS','React Js','PHP & MySQL','JavaScript'].map((list,index)=>(
                        <li style={{backgroundColor: activeTab === list ? `var(--green)` : `var(--lightGreen)`,color: activeTab === list ? 'black' : `var(--green)`}} key={index} onClick={()=>setActiveTab(list)}>{list}</li>
                    ))
                }
            </ul>
            <div className={workStyle.workList} style={{overflow: "hidden"}}>
                {
                    filteredContents.map((content)=>(
                        <motion.div
                            variants={tabAnimations[activeTab]}
                            initial="initial"
                            animate="animate"
                            exit="initial"
                            transition={{duration: .1, ease: "linear"}}
                            key={content.id} className={workStyle.workDefinition}
                        >
                            <div className={workStyle.figure}>
                                <Lazyimage componentClass={workStyle.img} placeholder={content.thumb} source={content.image}/>
                                <div className={workStyle.hoverContent}>
                                    <RiInformation2Line onClick={()=>goTo(content.heading.toLowerCase())}/>
                                    <HiArrowTopRightOnSquare onClick={() => redirect(content.liveUrl)}/>
                                    <RiCodeSSlashLine onClick={() => redirect(content.repoUrl)}/>
                                </div>
                            </div>
                            <h5>{content.heading}</h5>
                            <p>{content.definition}</p>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    );
}
export default Works;