import resumeStyle from './resume.module.css';
import useTimeCalculator from '../cutomhooks/useTimeCalculator';

const month = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
};

function ResumeItem({orgName,designations}){
    const getTime = useTimeCalculator();
    
    return(
        <section className={resumeStyle.desigWithinOrg} style={{paddingLeft: 0, paddingRight: 0}}>
            <h5 className={resumeStyle.orgName}>{orgName}</h5>
            {
                designations.map((desig,index) => (
                    <div className={resumeStyle.jobInfo} key={`job_${index}`}>
                        <h6 className={resumeStyle.desigName}>{desig.name}</h6>
                        <div className={resumeStyle.duration}>
                            <span>{desig.duration}</span>
                            {
                                month[desig.duration.split(' ')[0]] && 
                                <span>
                                {
                                    getTime(
                                        month[desig.duration.split(' ')[0]],
                                        desig.duration.split(' ')[1],
                                        month[desig.duration.split(' ')[3]],
                                        desig.duration.split(' ')[4]
                                    )
                                }
                                </span>
                            }
                        </div>
                        {
                            (desig.location && desig.locationType) ?
                            <div className={resumeStyle.location}>
                                <p>{desig.location}</p>
                                <span>{desig.locationType}</span>
                            </div>
                            : <p className={resumeStyle.location}>{desig.location}</p>
                        }
                    </div>
                ))
            }
        </section>
    );
}

export default ResumeItem;