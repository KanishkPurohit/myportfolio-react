import React, {useState}  from 'react'
import "./qualifications.css"

const Qualifications = () => {
    const [toggleState , setToggleState] = useState(2);
    
    const toggleTab = (index) => {
       setToggleState(index); 
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey
        </span>

        <div className="qualiffication__container container">
            <div className="qualification__tabs">
                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i   className="uil uil-briefcase-alt qualification__icon"></i>{""}Experience
                </div>
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i  className="uil uil-graduation-cap qualification__icon"></i>{""}Education
                </div>
               
            </div>
            <div className="qualification__sections">

            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
               
               >
                   <div className="qualification__data">
                       <div className='abc'>
                           <h3 className="qualification__title">Product design</h3>
                           <span className="qulaification__subtitle"></span>
                           <div className="qualification__calender">
                               <i className="uil uil-calendar-alt"></i>2022-Present
                           </div>
                       </div>
                       <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>   
                       </div>
                   </div>

                   <div className="qualification__data">
                       <div>

                       </div>
                       <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>   
                       </div>
                       <div>
                           <h3 className="qualification__title">UX Designer</h3>
                           <span className="qulaification__subtitle">Indore - Acropolis Institute</span>
                           <div className="qualification__calender">
                               <i className="uil uil-calendar-alt"></i>2022-Present
                           </div>
                       </div>
                       
                   </div>

                   <div className="qualification__data">
                       <div className='abc'>
                           <h3 className="qualification__title">Figma Development</h3>
                           <span className="qulaification__subtitle"></span>
                           <div className="qualification__calender">
                               <i className="uil uil-calendar-alt"></i>2022-Present
                           </div>
                       </div>
                       <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>   
                       </div>
                   </div>

                 
               </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
                
                >
                    <div className="qualification__data">
                        <div className='abc'>
                            <h3 className="qualification__title">Intern at <a href="https://www.intouchsoftware.co.in/">InTouch softwares,Indore</a></h3>
                            <span className="qulaification__subtitle"></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2023-Present
                            </div>
                        </div>
                        <div>
                         <span className="qualification__rounder"></span>
                         <span className="qualification__line"></span>   
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>

                        </div>
                        <div>
                         <span className="qualification__rounder"></span>
                         <span className="qualification__line"></span>   
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qulaification__subtitle">Indore - Acropolis Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2022-Present
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div className='abc'>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qulaification__subtitle"></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2022-Present
                            </div>
                        </div>
                        <div>
                         <span className="qualification__rounder"></span>
                         <span className="qualification__line"></span>   
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>

                        </div>
                        <div>
                         <span className="qualification__rounder"></span>
                         <span className="qualification__line"></span>   
                        </div>
                        <div>
                            <h3 className="qualification__title">B.tech(CSE)</h3>
                            <span className="qulaification__subtitle">Indore - Acropolis Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2020-Present
                            </div>
                        </div>
                        
                    </div>
                </div>

                
            </div>
        </div>
    </section>
  )
}

export default Qualifications
