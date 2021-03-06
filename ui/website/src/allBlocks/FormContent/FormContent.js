import React,{Component} from 'react';
// import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import $ from 'jquery';
import './FormContent.css';

class FormContent extends Component{
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
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contactcontent2-wrap">
                       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 contacticonwrap">
                              <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-lg-offset-2 contactcontbackimg">
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-lg-offset-3 contacticons">
                                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-whatsapp contacticon2"  aria-hidden="true"></i>
                                      </div>
                                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-linkedin contacticon2"></i>
                                      </div>
                                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-twitter contacticon2"></i>
                                      </div>
                                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-envelope contacticon2"></i>
                                      </div>
                                    </div>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 contacttextmargin2">
                              <div className="row">
                                  <div className="contactpageform">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                      <div className="row">
                                          <div className="contactcontent textcolorblue text-center">
                                              <span>Contact</span><span className="us"> Us</span>
                                          </div>
                                      </div>
                                   </div>
                                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <form id="contactForm">
                                            <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                             <label htmlFor="name">Name<span className="redFont">*</span></label>
                                              <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
                                                <input className="form-control" id="name" type="text" name="name" ref="name" placeholder="Enter Your Name"/>
                                              </div>
                                            </div>
                                            <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                              <label htmlFor="name">Company Name<span className="redFont">*</span></label>
                                              <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-industry" aria-hidden="true"></i></span>
                                                <input className="form-control" id="name" type="text" name="name" ref="name" placeholder="Enter Company Name"/>
                                              </div>
                                            </div>
                                            <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                              <label htmlFor="name">Designation<span className="redFont">*</span></label>
                                              <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-briefcase" aria-hidden="true"></i></span>
                                                <input className="form-control" id="name" type="text" name="name" ref="name" placeholder="Enter Designation"/>
                                              </div>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="name">Country<span className="redFont">*</span></label>
                                              <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-globe" aria-hidden="true"></i></span>
                                                <input className="form-control" id="name" type="text" name="name" ref="name" placeholder="Enter Country"/>
                                              </div>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="name">Contact Number<span className="redFont">*</span></label>
                                              <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-mobile" aria-hidden="true"></i></span>
                                                <input className="form-control" id="name" type="text" name="name" ref="name" placeholder="Enter Contact Number"/>
                                              </div>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="email">Email<span className="redFont">*</span></label>
                                              <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                                <input className="form-control" id="name" type="text" name="name" ref="name" placeholder="Enter Email"/>
                                              </div>
                                            </div>
                                            <div className="formcontent col-lg-6">
                                              <label htmlFor="email">Enquiry<span className="redFont">*</span></label>
                                              <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-handshake-o" aria-hidden="true"></i></span>
                                                <div className="dropdown">
                                              </div>
                                                <button className="text-left fullwidth btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">-Select Enquiry-
                                                <div className="caret adjustcaret"></div></button>
                                                <ul className="dropdown-menu">
                                                  <li className="dropdown-submenu">
                                                    <a className="test" tabIndex="-1" href="#">Services<span className="caret adjustcaret"></span></a>
                                                    <ul className="dropdown-menu">
                                                      <li><a tabIndex="-1" href="#">Upstream</a></li>
                                                      <li><a tabIndex="-1" href="#">Downstream</a></li>
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
                                              <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                                                <input className="form-control" id="name" type="text" name="name" ref="name" placeholder="Enter Subject"/>
                                              </div>
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
                                                <button className="btn bgiogblue contactformbtn buttonhover"> Submit</button>
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

export default FormContent;



