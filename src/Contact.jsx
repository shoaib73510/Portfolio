import React from 'react'
import './Nav.css'
import h1 from './Resume'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faLinkedinIn,faInstagram} from '@fortawesome/free-brands-svg-icons';


function Contact() {
  return (
    <div className="main4 container-fluid">
          <div className='r1 r4'>
                            <hr class="mini-box2"></hr> 
                            <h1 className=''>Let's talk
                            </h1>
                            </div>

                            <div class="row po  ">
                <div class="col-6">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                    <input type="text" class="form-control border-0  border-bottom border-1 rounded-0 border-dark bg-transparent" id="exampleFormControlInput1"/ >
                    
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                    <input type="text" class="form-control border-0  border-bottom border-1 rounded-0 border-dark bg-transparent" id="exampleFormControlInput1"/ >
                    
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email <sup>*</sup></label>
                    <input type="email" class="form-control border-0  border-bottom border-1 rounded-0 border-dark bg-transparent" id="exampleFormControlInput1"/ >
                    
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Leave us a message...</label>
                    <textarea class="form-control border-0  border-bottom border-1 rounded-0 border-dark bg-transparent" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </div>
                <div class="col-12 ">
                  <button class="btn  py-3 px-5 mx-auto d-block rounded-pill bg-purple text-light " type="submit">Submit</button>
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
  )
}

export default Contact