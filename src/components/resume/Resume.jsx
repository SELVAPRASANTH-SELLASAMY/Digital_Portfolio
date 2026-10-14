import resumeStyle from './resume.module.css';
import { RiBook2Line, RiShoppingBagLine } from "react-icons/ri";
import { AppContext } from '../../App';
import { useContext } from 'react';
import ResumeItem from "./ResumeItem";
function Resume(){
    const {resumeRef} = useContext(AppContext);

    // const educationContent = [
    //     {
    //         year:"2020 - 2024",
    //         field:"Bachelor of Engineering",
    //         org:"Kongu Engineering College",
    //         info:"Erode, Tamil Nadu, India."
    //     },
    //     {
    //         year:"2018 - 2020",
    //         field:"HSC (+2)",
    //         org:"Sri Renugadevi higher secondary school",
    //         info:"Dindigul, Tamil Nadu, India."
    //     },
    //     {
    //         year:"2017 - 2018",
    //         field:"SSLC",
    //         org:"Sri Renugadevi higher secondary school",
    //         info:"Dindigul, Tamil Nadu, India."
    //     }
    // ];
    // const experienceContent = [
    //     {
    //         year:"Mar 2025 - Present",
    //         field:"Associate Application Developer",
    //         org:"Accenture in India",
    //         info:"Coimbatore, Tamil Nadu, India."
    //     },
    //     {
    //         year:"Apr 2024 - May 2024",
    //         field:"Software Engineer Intern",
    //         org:"Applied Materials India Pvt Ltd.",
    //         info:"Chennai, Tamil Nadu, India."
    //     }
    // ];

    const education = [
        {
            instituteName: "Kongu Engineering College",
            degrees: [
                {
                    name: "Bachelor of Engineering",
                    duration: "2020 - 2024",
                    location: "Erode, Tamil Nadu, India"
                }
            ]
        },
        {
            instituteName: "Sri Renugadevi higher secondary school",
            degrees: [
                {
                    name: "HSC (+2)",
                    duration: "2019 - 2020",
                    location: "Dindigul, Tamil Nadu, India"
                },
                {
                    name: "SSLC",
                    duration: "2017 - 2018",
                    location: "Dindigul, Tamil Nadu, India"
                }
            ]
        }
    ];

    const experiences = [
        {
            orgName: "Accenture in India",
            designations: [
                {
                    name: "Associate Software Engineer",
                    duration: "Mar 2025 - Present",
                    location: "Coimbatore, Tamil Nadu, India",
                    locationType: "Hybrid"
                },
                {
                    name: "Trainee",
                    duration: "Nov 2024 - Feb 2025"
                }
            ]
        },
        {
            orgName: "Applied Materials India Pvt Ltd.",
            designations: [
                {
                    name: "Software Engineer Intern",
                    duration: "Mar 2024 - May 2024",
                    location: "Chennai, Tamil Nadu, India",
                    locationType: "Onsite"
                }
            ]
        }
    ];

    return(
        <section name='resume' ref={resumeRef} className={resumeStyle.resume}>
            <h2>My Resume <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={resumeStyle.resumeWrapper}>
                <div className={resumeStyle.education}>
                    <h4><span>{<RiBook2Line/>}</span>Edcational Qualification</h4>
                    {
                        // educationContent.map((education,index)=>(
                        //     <div key={index} className={resumeStyle.timeline}>
                        //         <span className={resumeStyle.year}>{education.year}</span>
                        //         <span className={resumeStyle.activity}>
                        //             <h5 className={resumeStyle.field}>{education.field}</h5>
                        //             <p className={resumeStyle.orgName}>{education.org}</p>
                        //             <p className={resumeStyle.activityInfo}>{education.info}</p>
                        //         </span>
                        //     </div>
                        // ))
                        education.map((edu,index) => (
                            <ResumeItem
                                key = {`education_${index}`}
                                orgName = {edu.instituteName}
                                designations = {edu.degrees}
                            />
                        ))
                    }
                </div>
                <div className={resumeStyle.experience}>
                    <h4><span>{<RiShoppingBagLine/>}</span>Working Experience</h4>
                    {
                        // experienceContent.map((exp,index)=>(
                        //     <div key={index} className={resumeStyle.timeline}>
                        //         <span className={resumeStyle.exp_year}>{exp.year}</span>
                        //         <span className={resumeStyle.activity}>
                        //             <h5 className={resumeStyle.field}>{exp.field}</h5>
                        //             <p className={resumeStyle.orgName}>{exp.org}</p>
                        //             <p className={resumeStyle.activityInfo}>{exp.info}</p>
                        //         </span>
                        //     </div>
                        // ))
                        experiences.map((exp,index) => (
                            <ResumeItem
                                key={`exp_${index}`}
                                orgName = {exp.orgName}
                                designations = {exp.designations}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
export default Resume;