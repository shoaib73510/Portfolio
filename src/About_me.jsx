import React, { useState } from 'react'
import  myImage from '../src/pass.jpg'
import './about me.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faAppleAlt,faAnchor} from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook,faTwitter,faLinkedinIn,faInstagram} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
function About_me() { 
  const [resume, setresume] = useState (true)
  let changeval = ()=>{
        if(resume){
          setresume (false)
        }
        else{
            setresume(true)
        }
  }

  const [project, setproject] = useState (true)
  let changevalu = ()=>{
             if(project){
              setproject(false)
             }  
             else{
                setproject(true)
             }    
  }


    AOS.init();
  
  return (
     <>
        { resume ?  <>
        
          <div class="container-fluid text-center main " >
                      <div className='row  w-75 h-50 h ' data-aos="zoom-in-down">
                                  <div class="col-12 col-md-6 col-lg-6 l ">
                                  <div className="contents">
                                                  <img className='img-fluid' src={myImage}   width="40%" height="40%" />
                                                  <br />
                                                  <h1  class="mt">Mohammed 
                                          </h1>
                                          <h1 class="mn">Shoaib</h1>

                                          <hr width="10%" size="2" color="blue"></hr>
                                    
                                          <h5 class="pt">Front end Developer</h5>
    
                                        </div>
                                        <div class="logo ">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faInstagram} />
            </div>
                  
                </div>
                                          <div class="col-12 col-md-6 col-lg-6  bg-light r">
                                          <div ><h1 class="h1t">Hello</h1></div>
                                    <div><h3 class="h3t">Here's who I am & what I do</h3></div>
                                    <div ><div class="bts"> <button  onClick={changeval} class="lt" type="button"> RESUME</button> <button  onClick={changevalu} class="rlt" type="button">PROJECTS</button></div></div>    
                                <div ><p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p></div>   
                                <br/>
                                <div ><p>I’m a great place for you to tell a story and let your users know a little more about you.</p></div>


                      </div>


  
  
              </div>
                                          <div className="container-fluid footer">
                                            
                                                      <div className="row w-100">

                                                      <div className="col-12 col-md-6 col-lg-6 ls">
                                                        
          <p> © 2035 by Mohammed Shoaib. <br/>
           Powered and secured by <a className='cc' href="http://wix.com/?utm_campaign=vir_created_with">wix</a></p>


                                                      </div>
                                                      <div className="col-12 col-md-6 col-lg-6 rr">
                                                        
                                                      <div className="b1">
                                                          <div class="box1">call</div><br />
                                                          <div class="box4">123-456-7890</div>

                                                          </div>

                                                          <div className="b2">
                                                          <div class="box2">write</div> <br />
                                                          <div class="box5"> <a className='cc' href="info@mysite.com"> info@mysite.com</a></div>
                                                          </div>

                                                          <div className="b3">
                                                          <div class="box3">follow

                                                            
                                                                  <div class="logos">
                                                                  <FontAwesomeIcon icon={faFacebook} />
                                                                  <FontAwesomeIcon icon={faTwitter} />
                                                                  <FontAwesomeIcon icon={faLinkedinIn} />
                                                                  <FontAwesomeIcon icon={faInstagram} />
                                                                  </div>
                                                                  </div>
                                                                  </div>
                                                      </div>

                                                      </div>

                                            </div>               

                                </div> </> :  <> 
                                
                                <div className="main2 container-fluid">
                                                            <div className='r1'>
                                                            <hr class="mini-box2"></hr> 
                                                            <h1 className=''>Resume</h1>
                                                            </div>
                                            <div className="row  w-75 w">
                                
                                             <div className="col-12 col-md-6 col-lg-6 qq ">
                                             <h1 className='ee' >Experience</h1>
                                              </div>   
                                             <div className="col-12 col-md-6 col-lg-6  ql">
                                             <button onClick={changeval} class="btn btn-primary btn-lg text-nowrap "> About me</button>
                                              </div>             
                                            </div>
                                
                                            <div className="row w-75 bg-light wt bb h-75  text-center"  data-aos="zoom-in">
                                
                                                <div className="col-12 col-md-6 col-lg-6  ">
                                                <div class="p1">
                                                <h3 class="m3">2035 - Present</h3>
                                                <h6 class="m4">JOB POSITION</h6>
                                                <h6 class="m4">Company Name</h6>
                                                <h6 class="m4">Company Location</h6>
                                            </div>
                                                </div>
                                
                                                <div className="col-12 col-md-6 col-lg-6 ">
                                                <div class="p2 ">
                                                <p class="para">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                                                    “Edit Text” or double click me to add your own content and make changes to the font.
                                                </p>
                                
                                                <p class="para">I’m a great place for you to tell a story and let your users know a little more about
                                                    you.</p>
                                            </div>
                                                </div>
                                
                                            </div>
                                
                                            <div className="row bg-light w-75 wt bb h-75  text-center"  data-aos="fade-right"  data-aos-duration="1000">
                                
                                                <div className="col-12 col-md-6 col-lg-6 ">
                                                <div class="p1">
                                                <h3 class="m3">2035 - Present</h3>
                                                <h6 class="m4">JOB POSITION</h6>
                                                <h6 class="m4">Company Name</h6>
                                                <h6 class="m4">Company Location</h6>
                                            </div>
                                                </div>
                                
                                                <div className="col-12 col-md-6 col-lg-6 ">
                                                <div class="p2 ">
                                                <p class="para">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                                                    “Edit Text” or double click me to add your own content and make changes to the font.
                                                </p>
                                
                                                <p class="para">I’m a great place for you to tell a story and let your users know a little more about
                                                    you.</p>
                                            </div>
                                                </div>
                                
                                            </div>
                                
                                            <div className="ptr">
                                              <h1 >Education
                                              </h1>
                                            </div>
                                
                                
                                                                  <div className="row bg-light w-75 bb h-75  text-center"  data-aos="fade-left" data-aos-duration="1000">
                                
                                                      <div className="col-12 col-md-6 col-lg-6  ">
                                                      <div class="p1">
                                                      <h3 class="m3">2035 - Present</h3>
                                                      <h6 class="m4">UNIVERSITY NAME
                                                      </h6>
                                                      <h6 class="m4">Degree Level</h6>
                                                      <h6 class="m4">University Location</h6>
                                                      </div>
                                                      </div>
                                
                                                      <div className="col-12 col-md-6 col-lg-6  ">
                                                      <div class="p2 ">
                                                      <p class="para">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                                                          “Edit Text” or double click me to add your own content and make changes to the font.
                                                      </p>
                                
                                                      <p class="para">I’m a great place for you to tell a story and let your users know a little more about
                                                          you.</p>
                                                      </div>
                                                      </div>
                                
                                                      </div>
                                
                                                      <div className="row bg-light w-75  h-75 wtt bb text-center"  data-aos="flip-left" data-aos-duration="1000">
                                
                                                      <div className="col-12 col-md-6 col-lg-6  ">
                                                      <div class="p1">
                                                      <h3 class="m3">2035 - Present</h3>
                                                      <h6 class="m4">UNIVERSITY NAME
                                                      </h6>
                                                      <h6 class="m4">Degree Level</h6>
                                                      <h6 class="m4">University Location</h6>
                                                      </div>
                                                      </div>
                                
                                                      <div className="col-12 col-md-6 col-lg-6  ">
                                                      <div class="p2 ">
                                                      <p class="para">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                                                          “Edit Text” or double click me to add your own content and make changes to the font.
                                                      </p>
                                
                                                      <p class="para">I’m a great place for you to tell a story and let your users know a little more about
                                                          you.</p>
                                                      </div>
                                                      </div>
                                
                                                      </div>
                                
                                                      <div className="container ow3 ow bg-light bb h-100 w-75" data-aos="fade-up"data-aos-duration="1000" >
                                                      <div class="tp ">
                                                <h1>Professional skillset</h1>
                                                
                                                <table className='styled'>
                                                    <tr>
                                                        <td><div class="mini-box "></div></td>
                                                        <td>Entrepreneurial Mindset</td>
                                                        <td><div class="mini-box "></div></td>
                                                        <td>Go-to-Market Planning</td>
                                                    </tr>
                                                    <tr>
                                                        <td><div class="mini-box "></div></td>
                                                        <td>Teamwork & Collaboration</td>
                                                        <td><div class="mini-box "></div></td>
                                                        <td>Digital Analytic</td>
                                                    </tr>
                                                </table>
                                
                                            </div>
                                
                                            <div class="bottom-part">
                                                <h1>Language</h1>
                                                <table  className='styled'>
                                                    <tr>
                                                        <td><div class="mini-box "></div></td>
                                                        <td>English (native)</td>
                                                        <td><div class="mini-box "></div></td>
                                                        <td>French (proficient)</td>
                                                    </tr>
                                                    <tr>
                                                        <td><div class="mini-box "></div></td>
                                                        <td>Spanish (proficient)</td>
                                                        
                                                    </tr>
                                                </table>
                                            </div>
                                
                                
                                
                                                      </div>
                                
                                                    <div className="container-fluid footer">
                                                                                                
                                                                                                          <div className="row w-100">
                                                    
                                                                                                          <div className="col-12 col-md-6 col-lg-6 ls">
                                                                                                            
                                                              <p> © 2035 by Mohammed Shoaib. <br />
                                                             Powered and secured by <a className='cc' href="http://wix.com/?utm_campaign=vir_created_with">wix</a></p>
                                                    
                                                    
            </div>
       <div className="col-12 col-md-6 col-lg-6 rr">
                                                                                                            
                       <div className="b1">
                         <div class="box1">call</div><br />
                                                                                                              <div class="box4">123-456-7890</div>
                                                    
                                                                                                              </div>
                                                    
                                                                                                              <div className="b2">
                                                                                                              <div class="box2">write</div> <br />
                                                                                                              <div class="box5"> <a className='cc' href="info@mysite.com"> info@mysite.com</a></div>
                                                                                                              </div>
                                                    
                                                                                                              <div className="b3">
                                                                                                              <div class="box3">follow
                                                    
                                                                                                                
                                                                                                                                                              <div class="logos">
                                                                                                                                                              <FontAwesomeIcon icon={faFacebook} />
                                                                                                                                                              <FontAwesomeIcon icon={faTwitter} />
                                                                                                                                                              <FontAwesomeIcon icon={faLinkedinIn} />
                                                                                                                                                              <FontAwesomeIcon icon={faInstagram} />
                                                                                                                                                              </div>
                                                                                                                                                  </div>
                                                                                                                                                  </div>
                                                    
                                                    
                                                    
                                                    
                                                    
                                                                                                          </div>
                                                    
                                                    
                                                                                                          </div>
                                                    
                                                    
                                                                                                </div> 
                                                      </div>
                                




                                
                                
                                
                                </>





        }

                                              
          










            
            


    

   
    







    </>
    
       
    
    


  )
}

export default About_me