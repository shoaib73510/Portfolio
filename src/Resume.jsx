import React, { useState } from 'react'
import './Resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faLinkedinIn,faInstagram} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


function h1
() {


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
    
    { project ? <>  
    
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
             <button onClick={changevalu} class="btn btn-primary btn-lg text-nowrap "> Project</button>
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
                      </div>  </> :  <>
                      
                      <div className="main3 container-fluid">
                                        <div className='r1 rra'>
                                                  <hr class="mini-box2"></hr> 
                                                  <h1 className='ht'>Projects</h1>
                                                  </div>
                                            <p className='pra'>
                                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                                            </p>
                      
                                            <button onClick={changevalu} class="btn btn-primary btn-lg text-nowrap "> Resume</button>
                      
                                            <div className=" row bg-light  la  g-0"  >
                      
                                            <div className="col-12 col-md-8 col-lg-8">
                                            <div class="card-body">
                              <h5 class="card-title">Project name 01</h5>
                              <h5 class="card-texts">Role Title</h5>
                      
                              <p class="card-text"><small class="text-body-secondary">I'm a paragraph. Click here to add your own text and <br />edit me. It’s easy. Just click “Edit Text” or double click <br /> me to add your own content and make changes to the <br /> font. I’m a great place for you to tell a story and let your <br /> users know a little more about you.</small></p>
                            </div>
                                              </div>
                      
                                              <div className="col-12 col-md-4 col-lg-4 fluids bg-info">
                                                  
                                              </div>  
                      
                                            </div>
                      
                                            <div className=" row bg-light  la  g-0"  >
                      
                                            <div className="col-12 col-md-8 col-lg-8">
                                            <div class="card-body">
                              <h5 class="card-title">Project name 01</h5>
                              <h5 class="card-texts">Role Title</h5>
                      
                              <p class="card-text"><small class="text-body-secondary">I'm a paragraph. Click here to add your own text and <br />edit me. It’s easy. Just click “Edit Text” or double click <br /> me to add your own content and make changes to the <br /> font. I’m a great place for you to tell a story and let your <br /> users know a little more about you.</small></p>
                            </div>
                                              </div>
                      
                                              <div className="col-12 col-md-4 col-lg-4 fluids bg-info">
                                                  
                                              </div>  
                      
                                            </div>
                      
                                            <div className=" row bg-light  la bbb g-0"  >
                      
                                            <div className="col-12 col-md-8 col-lg-8">
                                            <div class="card-body">
                              <h5 class="card-title">Project name 01</h5>
                              <h5 class="card-texts">Role Title</h5>
                      
                              <p class="card-text"><small class="text-body-secondary">I'm a paragraph. Click here to add your own text and <br />edit me. It’s easy. Just click “Edit Text” or double click <br /> me to add your own content and make changes to the <br /> font. I’m a great place for you to tell a story and let your <br /> users know a little more about you.</small></p>
                            </div>
                                              </div>
                      
                                              <div className="col-12 col-md-4 col-lg-4 fluids bg-info">
                                                  
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

export default h1
