import React,{Component} from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import $ from 'jquery';


import './Contactpage.css';
class Contactpage extends Component{
  constructor(){
    super();
     this.state={
     }

  }
  
  componentDidMount() {
    $(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });

  }

  render(){
    return(
          <div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contactcontent1-wrap">
                        <div className="row">
                            <div className="contactcontent text-center">
                                <h6>CONTACT INFO</h6>
                                <h3>GET IN TOUCH</h3>
                                <hr/>
                            </div>
                        </div>
                    </div>
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contactcontent2-wrap">
                       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <div className="row">
                                    <div className="contactcontbackimg">
                                    <div className=" contacttextmargin col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                                            <h4><strong></strong></h4>
                                    </div>    
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                      <div className="row">
                                                          <i className="fa fa-circle contacticon1"><i className="fa fa-whatsapp contacticon2"  aria-hidden="true"></i></i>
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                                      <div className="row">
                                                        <h5><strong>WhatsApp</strong></h5>
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                      <div className="row">
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                                      <div className="row">
                                                        <p></p>
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>                                    
                                      </div>
                                      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                      <div className="row">
                                                          <i className="fa fa-circle contacticon1"><i className="fa fa-linkedin contacticon21"></i></i>
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                                      <div className="row">
                                                        <h5><strong>LinkedIn</strong></h5>
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                      <div className="row">
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                                      <div className="row">
                                                        <p></p>
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>                                    
                                      </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                      <div className="row">
                                                          <i className="fa fa-circle contacticon1"><i className="fa fa-twitter contacticon23"></i></i>
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                                      <div className="row">
                                                        <h5><strong>Twitter</strong></h5>
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                      <div className="row">
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>                                    
                                      </div>
                                      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                      <div className="row">
                                                          <i className="fa fa-circle contacticon1"><i className="fa fa-envelope contacticon22"></i></i>
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                                      <div className="row">
                                                        <h5><strong>EMAIL</strong></h5>
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                      <div className="row">
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                                      <div className="row">
                                                        <p>info@iogsolutions.com</p>
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>                                    
                                      </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <div className="row">
                                  <div className="contactpageform">
                                  <div className=" contacttextmargin2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <form id="contactForm">
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="name">Name<span className="redFont">*</span></label>
                                              <input className="form-control" id="name" type="text" name="name" ref="name"/>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="name">Company Name<span className="redFont">*</span></label>
                                              <input className="form-control" id="name" type="text" name="name" ref="name"/>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="name">Designation<span className="redFont">*</span></label>
                                              <input className="form-control" id="name" type="text" name="name" ref="name"/>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="name">Country<span className="redFont">*</span></label>
                                              <input className="form-control" id="name" type="text" name="name" ref="name"/>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="name">Contact Number<span className="redFont">*</span></label>
                                              <input className="form-control" id="name" type="text" name="name" ref="name"/>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="email">Email<span className="redFont">*</span></label>
                                              <input className="form-control" id="email" type="email" name="email" ref="email"/>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="email">Enquiry<span className="redFont">*</span></label>
                                              <div className="dropdown">
                                                <button className="text-left fullwidth btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select
                                                <div className="caret adjustcaret"></div></button>
                                                <ul className="dropdown-menu">
                                                  <li className="dropdown-submenu">
                                                    <a className="test" tabIndex="-1" href="#">Services<span className="caret adjustcaret"></span></a>
                                                    <ul className="dropdown-menu">
                                                      <li><a tabIndex="-1" href="#">Upstream</a></li>
                                                      <li><a tabindex="-1" href="#">Downstream</a></li>
                                                    </ul>
                                                  </li>
                                                  <li><a tabIndex="-1" href="#">Sales</a></li>
                                                  <li><a tabIndex="-1" href="#">Support</a></li>
                                                  <li><a tabIndex="-1" href="#">Consulting</a></li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="subject">Subject<span className="redFont">*</span></label>
                                              <input className="form-control" id="subject" type="text" name="subject" ref="subject"/>
                                            </div>
                                            <div className="formcontent1 col-lg-12">
                                              <label htmlFor="message">Note<span className="redFont">*</span></label>
                                              <textarea rows="5" cols="1" className="form-control" id="message" name="message" ref="message"></textarea>
                                            </div>
{/*                                            <div className="checkbox">
                                              <label><input type="checkbox" name="remember"/>I agree that my submitted data is being collected and stored.

                                              </label>
                                            </div>*/}
                                            <div className="col-lg-12">
                                              <div className="col-lg-2 col-lg-offset-10">
                                                <button className="btn  contactformbtn buttonhover"> Submit</button>
                                              </div>
                                           </div>
                                        </form>
                                   </div>    
                                 </div>
                              </div>
                            </div>

                      </div>
                  </div>
          </div>    
    );
  }
}

export default Contactpage;



