import React,{Component} from 'react';
// import { render } from 'react-dom';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import $ from 'jquery';
import './FormContent.css';

class FormContent extends Component{
  constructor(){
    super();
     this.state={
      "action"   :'Submit',
      "formContent" : [],
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


       axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(
        (res)=>{
          console.log(res);
          const postsdata = res.data;
          this.setState({
            BasicInfo : postsdata,
          });
        }
      )
      .catch();
  }

handleChange(event){

    this.setState({
      "Position"   : this.refs.Position.value,
      "Experience" : this.refs.Experience.value,
    });

  }

  newform(event){
      event.preventDefault();    
        var talukavalues = {
        "country"     : this.state.countryval,
        "state"     : this.state.stateval,  
        "district"    : this.state.districtval,
        "blockloctn"  : this.state.blockloctn,
      
      }
      axios
      .get('http://jsonplaceholder.typicode.com/posts',talukavalues)
      .then(
        (res)=>{
          console.log(res);
          const postsdata = res.data;
          this.setState({
            formContent : postsdata,
          });
        }
      )
      .catch();
  }

  render(){
    return(
          <div>    
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contactcontent2-wrap">
                       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            

                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contacttextmargin2">
                              <div className="row">
                                  <div className="contactpageform">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                      <div className="row">
                                          <div className="contactcontent textcolorblue text-center">
                                              <span>Job Forum</span><span className="us"> </span>
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
                                            
                                              
                                            
                                              <div className="formcontent col-lg-6 formht">
                                                <div className="form-group">
                                                    <label htmlFor="email">Position<span className="redFont">*</span></label>
                                                    <div className="input-group">
                                                    <span className="input-group-addon"><i className="fa fa-handshake-o" aria-hidden="true"></i></span>

                                                    <select title="Please select district." className="inputBox-main distSelected  areaStaes form-control" ref="Position" name="Position" id="Position" value={this.state.Position} onChange={this.handleChange.bind(this)} >
                                                      <option >-Select Position-</option>
                                                      <option > Well Engineer</option>
                                                      <option > Reservoir Engineer</option>
                                                      <option > Production Technologist</option>
                                                      <option > Consultant-Geophysicist</option>
                                                      <option > Consultant-Geologist</option>
                                                      <option > Consultant-Data Management</option>
                                                      <option > Supply Chain Consultant(Refinery Planning) </option>
                                                      <option > Supply Chain Consultant(Refinery Scheduling) </option>
                                                      <option > MES Consultant </option>
                                                      <option > Manager-Projects </option>
                                                      <option > Manager Business Developement</option>
                                                      <option > Upstream Production Optimization Consultant </option>
                                                      <option > APC Consultant </option>
                                                  
                                                       {/*} {this.state.district.map((data, index)=>{
                                                                return( 
                                                              <option key={index}>{data.districtName}</option>
                                                            );
                                                            })} */}
                                                    </select>
                                                    </div>
                                                </div>  
                                              </div>


                                              <div className="formcontent col-lg-6 formht">
                                                <div className="form-group">
                                                    <label htmlFor="email">Experience<span className="redFont">*</span></label>
                                                    <div className="input-group">
                                                    <span className="input-group-addon"><i className="fa fa-handshake-o" aria-hidden="true"></i></span>

                                                    <select title="Please select district." className="inputBox-main distSelected  areaStaes form-control" ref="Experience" name="Experience" id="Experience" value={this.state.Experience} onChange={this.handleChange.bind(this)} >
                                                      <option >-Select Experience-</option>
                                                      <option > 1 Year</option>
                                                      <option > 2-3 Years</option>
                                                      <option > 4-5 Years</option>
                                                       {/*} {this.state.district.map((data, index)=>{
                                                                return( 
                                                              <option key={index}>{data.districtName}</option>
                                                            );
                                                            })} */}
                                                    </select>
                                                    </div>
                                                </div>  
                                              </div>



                                               
                                                
                                             
                                          
                                            
                                            
{/*                                            <div className="checkbox">
                                              <label><input type="checkbox" name="remember"/>I agree that my submitted data is being collected and stored.

                                              </label>
                                            </div>*/}
                                            <div className="col-lg-12">
                                              <div className="col-lg-2 col-lg-offset-10">
                                                <button className="btn bgiogblue contactformbtn buttonhover">Submit</button>
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



