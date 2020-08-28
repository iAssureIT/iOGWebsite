import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Footer.css';

export default class Footer extends Component {


  render(){
       return(
    <div className="footerText"> 
      <div className="iogfooter col-lg-12 col-md-12 NOpadding hidden-sm hidden-xs">
        <div className="animationoveflow col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="viman">
                <img className="img-responsive" alt="" src="/images/viman.png" />
            </div>
                <figure className="footeranimationtruck">
                  <img alt="" src="/images/foot8.png"/>
                  <img alt="" className="foot8wheel1" src="/images/foot8wheel.png"/>
                  <img alt="" className="foot8wheel2" src="/images/foot8wheel.png"/>
                </figure>
             <div className="footeranimationtruck2">
                <img className="img-responsive" alt="" src="/images/foot6.png" />
                    <img alt="" className="foot6wheel1" src="/images/foot6wheel.png"/>
                    <img alt="" className="foot6wheel2" src="/images/foot6wheel.png"/>
                    <img alt="" className="foot6wheel3" src="/images/foot6wheel.png"/>
            </div>      
            <div className="footeranimation">
                <img className="img-responsive footimg1" alt="" src="/images/foot1.png" />
            <figure className="foot1anim">
                <img alt="" src="/images/foot1anim.png"/>
            </figure>     
            </div> 
            <div className="footeranimation">
                <img className="img-responsive footimg2" alt="" src="/images/foot2.png" />
            </div>      
            <div className="footeranimation">
                <img className="img-responsive  footimg3" alt="" src="/images/foot3.png" />
                <figure className="foot3anim">
                  <img alt="" src="/images/foot3anim.png"/>
                </figure>
            </div>      
            <div className="footeranimation">
                <img className="img-responsive  footimg4" alt="" src="/images/foot4.png" />
            </div>      
            <div className="footeranimation">
                <img className="img-responsive footimg5" alt="" src="/images/foot5.png" />
            </div>      
            <div className="footeranimation">
                <img className="img-responsive footimg7" alt="" src="/images/foot7.png" />
            </div>      
        </div>      
           
         <div className="footoverflow">
            <div id="footer" className="bgiogblue col-lg-12 footer-two">
                <div className=" col-lg-12 col-md-11 col-sm-11 col-xs-11 ">
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-6 footerdiv1">
                            <h6 className="font-montserrat"style={{color:"#ffffff"}}>Menu</h6>
                            <ul className="no-icon-list">
                                <li><a href="/">Home</a></li>
                                <li><a href="/masterpage/about-us">About Us</a></li>
                                <li><a href="/masterpage/expertise-main-page">Expertise</a></li>
                                <li><a href="/masterpage/industries">Industries</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-md-2 col-sm-2 col-xs-6 footerdivs">
                            <h6 className="font-montserrat"style={{color:"#ffffff"}}>Service Arms</h6>
                            <ul className="no-icon-list">
                                <li><a href="/masterpage/iog-study">iOGStudy</a></li>
                                 <li><a href="/masterpage/iog-consult">iOGConsult</a></li>
                                <li><a href="/masterpage/iog-implement">iOGImplement</a></li>
                                <li><a href="/masterpage/iog-train">iOGTrain</a></li>
                               
                            </ul>
                        </div>
                        
                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6 footerdivs">
                            <h6 className="font-montserrat"style={{color:"#ffffff"}}>Resources</h6>
                            <ul className="no-icon-list">
                                <li><a href="/masterpage/careers">Careers</a></li>
                                <li><a href="/blog">Blogs</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div>                        
                        <div className="col-lg-4 col-md-3 col-sm-2 col-xs-6 NOpadding ">
                            <h6 className="font-montserrat col"style={{color:"#ffffff"}}>Address</h6>
                            <p className="fs15"style={{color:"#ffffff"}}>

                                 <i className="fa fa-map-marker" aria-hidden="true"style={{color:"#ffffff"}}></i> iOG Solutions Pvt. Ltd.,
                                 7090,7th Floor,  Marvel Fuego,<br/>Magarpatta Road, Opp Seasons Mall,Hadapsar,<br/>
                                  Pune,India- 411028.<br/>
                                   <i class="fa fa-envelope footermailicon"style={{color:"#ffffff"}}></i>Mail: info@iogsolutions.com<br/>
                                 <i className="fa fa-mobile" aria-hidden="true"style={{color:"#ffffff"}}></i> Phone: +91 2029510500 
                                
                             </p>
                        </div> 
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <h6 className="font-montserrat col"style={{color:"#ffffff"}}>Connect us on</h6>
                            <ul className="no-icon-list socialicon">
                                <li><a href="https://www.linkedin.com/company/iogsolutions/" target="_blank" ><i className="col-lg-12 fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.facebook.com/iOGsolutions/" target="_blank"><i className="facebook col-lg-12 fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://twitter.com/iogsolutions" target="_blank"><i className="col-lg-12 fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href={"https://api.whatsapp.com/send?phone="+ 919822790500} target="_blank"><i className="col-lg-12 fa fa-whatsapp whatsupIcon" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className=" subscribeBox">
                                <h6 className="font-montserrat col"style={{color:"#ffffff"}}>Newsletter Subscription</h6>
                                <div className="NOpadding col-lg-8 col-md-6 col-sm-12 col-xs-12">
                                    <input type="text" className="form-control subscribeMail" placeholder="Enter your Email" />
                                </div>
                                <a href="/Contact-us" className="NOpadding col-lg-1 col-md-3 col-sm-12 col-xs-12"><button className="subscribeBtn btn">Subscribe</button></a>
                            </div>      
                        </div>      
                    </div>
                </div>            
        </div>
                    <div className="darkbluebg col-lg-12 col-md-12 footer-end">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1">
                    <div className="row">

                        <div className="textcolorwhite col-lg-5 col-md-5 col-sm-6 col-xs-12 pull-left pt20">
                            <p style={{color:"#ffffff"}}>Copyright ©2019 <a href="/">iOGSolutions</a>. All rights reserved.</p>
                        </div>

                        <div className="textcolorwhite col-md-5 col-sm-6 col-xs-12 pull-right pt20">
                            <p className="text-right">
                                <a href="/privacypolicy" className="mr20">Privacy Policy</a>
                                <a href="/termsofuse" className="mr20">Terms of Use</a>
                                <a href="/sitemap" className="">Site Map</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

{/*  */}

      <div className="iogfooter col-xs-12 col-sm-12 NOpadding hidden-lg hidden-md">
        <div className="animationoveflow col-sm-12 col-xs-12">
             <div className="viman">
                <img className="img-responsive" alt="" src="/images/viman.png" />
            </div>
                <figure className="footeranimationtruck">
                  <img alt="" src="/images/foot8.png"/>
                  <img alt="" className="foot8wheel1" src="/images/foot8wheel.png"/>
                  <img alt="" className="foot8wheel2" src="/images/foot8wheel.png"/>
                </figure>
             <div className="footeranimationtruck2">
                <img className="img-responsive" alt="" src="/images/foot6.png" />
                    <img alt="" className="foot6wheel1" src="/images/foot6wheel.png"/>
                    <img alt="" className="foot6wheel2" src="/images/foot6wheel.png"/>
                    <img alt="" className="foot6wheel3" src="/images/foot6wheel.png"/>
            </div>      
            <div className="footeranimation">
                <img className="img-responsive footimg1" alt="" src="/images/foot1.png" />
            <figure className="foot1anim">
                <img alt="" src="/images/foot1anim.png"/>
            </figure>     
            </div> 
            <div className="footeranimation">
                <img className="img-responsive footimg2" alt="" src="/images/foot2.png" />
            </div>      
            <div className="footeranimation">
                <img className="img-responsive  footimg3" alt="" src="/images/foot3.png" />
                <figure className="foot3anim">
                  <img alt="" src="/images/foot3anim.png"/>
                </figure>
            </div>      
            <div className="footeranimation">
                <img className="img-responsive  footimg4" alt="" src="/images/foot4.png" />
            </div>      
            <div className="footeranimation">
                <img className="img-responsive footimg5" alt="" src="/images/foot5.png" />
            </div>      
            <div className="footeranimation">
                <img className="img-responsive footimg7" alt="" src="/images/foot7.png" />
            </div>      
        </div>      
           
         <div className="footoverflow">
            <div id="footer" className="bgiogblue responsivefooter col-lg-12 footer-two">
                <div className=" col-sm-12 col-xs-12 pb35">
                    <div className="row">
                        <div className=" col-sm-4 col-xs-4">
                            <h6 className="font-montserrat"style={{color:"#ffffff"}}>Menu</h6>
                            <ul className="no-icon-list">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/masterpage/expertise-main-page">Expertise</a></li>
                                <li><a href="/masterpage/industries">Industries</a></li>
                            </ul>
                        </div>
                        
                        <div className=" col-sm-4 col-xs-4">
                            <h6 className="font-montserrat"style={{color:"#ffffff"}}>Service Arms</h6>
                            <ul className="no-icon-list">
                                 <li><a href="/masterpage/iog-study">iOGStudy</a></li>
                                 <li><a href="/masterpage/iog-consult">iOGConsult</a></li>
                                <li><a href="/masterpage/iog-implement">iOGImplement</a></li>
                                <li><a href="/masterpage/iog-train">iOGTrain</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-sm-4 col-xs-4">
                            <h6 className="font-montserrat"style={{color:"#ffffff"}}>Resources</h6>
                            <ul className="no-icon-list">
                                <li><a href="/careers">Careers</a></li>
                                <li><a href="/blog">Blogs</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div> 
                        <div className="col-sm-12 col-xs-12">                       
                            <h6 className="font-montserrat col"style={{color:"#ffffff"}}>Address</h6>
                            <p className="fs15" style={{color:"#ffffff"}}>
                                 <i className="fa fa-map-marker" aria-hidden="true"style={{color:"#ffffff"}}></i> iOG Solutions Pvt. Ltd.
                                 7090, 7th Floor,<br/>  Marvel Fuego,<br/>Magarpatta Road, Opp Seasons Mall,Hadapsar 
                                  Pune,India- 411028.<br/>
                                 <i className="fa fa-mobile" aria-hidden="true"style={{color:"#ffffff"}}></i> Phone: +91 2029510500
                             </p>
                        </div>
                        <div className="col-sm-12 col-xs-12">
                            <h6 className="font-montserrat col resicons"style={{color:"#ffffff"}}>Connect us on</h6>
                            <ul className="no-icon-list socialicon socialicon1 ">
                                <li><a href="https://www.linkedin.com/company/iogsolutions/" target="_blank" ><i className="col-lg-12 fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.facebook.com/iOGsolutions/" target="_blank"><i className="facebook col-lg-12 fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://twitter.com/iogsolutions" target="_blank"><i className="col-lg-12 fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href={"https://api.whatsapp.com/send?phone="+ 919822790500} target="_blank"><i className="col-lg-12 fa fa-whatsapp whatsupIcon" aria-hidden="true"></i></a></li>
                            </ul>
                        </div> 
                        <div className="col-sm-12 col-xs-12"> 
                         <div className=" subscribeBox subscribeBox1">
                                <h6 className="font-montserrat col"style={{color:"#ffffff"}}>Newsletter Subscription</h6>
                                <div className="NOpadding  col-sm-7 col-xs-7">
                                    <input type="text" className="form-control subscribeMail " placeholder="Enter your Email" />
                                </div>
                                <a href="Contact-us" className="NOpadding  col-sm-1 col-xs-1">
                                 <button className="subscribeBtn   btn">Subscribe</button></a>
                            </div> 
                         </div>
                    </div>
                </div>            
        </div>
            <div className="darkbluebg col-sm-12 col-xs-12 footer-end resfooterend NOpadding">
                <div className="col-sm-12 col-xs-12">
                    <div className="row">
                    <div className="textcolorwhite  col-sm-12 col-xs-12 pull-left pt20">
                        <p style={{color:"#ffffff"}}style={{color:"#ffffff"}}>Copyright ©2019 <a href="/">iOGSolutions</a>. All rights reserved.</p>
                     </div>
                    </div>
                    </div> 
                    <div className="textcolorwhite col-sm-12 col-xs-12 pull-right ">
                    <p className="">
                        <a href="/privacypolicy" className="mr20 resmr20 ">Privacy Policy</a>
                        <a href="/termsofuse" className=" mr20 resmr20">Terms of Use</a>
                        <a href="/sitemap" className="resmr20">Site Map</a>
                    </p>
                  </div>
              </div>
          </div>
       </div> 
   </div> 
                

      );
  } 

}