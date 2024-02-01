import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const Experience = ({state}) => {
    const [education,setEducation]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEducationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    },[state])
    return (
        <section className="exp-section">
            

            <div className="container">
                {/* experience */}
                <div className="education">
                    <h1 className="edu-title">Education</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> December 2021 - Present
                        </p>
                        <h3 className="card-text2">NITK</h3>
                        <p className="card-text3">Studying BTech in CSE</p>
                        <p className="card-text4">
                            3rd Year
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 2015 - 2019
                        </p>
                        <h3 className="card-text2">PSBB LLA</h3>
                        <p className="card-text3">Highschool</p>
                        <p className="card-text4">
                            95.4%
                        </p>
                    </div>
                    {/* card3 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 2019-2021
                        </p>
                        <h3 className="card-text2">NSVK</h3>
                        <p className="card-text3">Pre-University</p>
                        <p className="card-text4">
                            80.2%
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
//export default education