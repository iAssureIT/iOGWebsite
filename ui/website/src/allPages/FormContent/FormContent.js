import React,{Component}  from 'react';
import axios              from "axios";
import swal               from 'sweetalert';
import $                  from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './FormContent.css';

class FormContent extends Component{
  constructor(){
    super();
     this.state={
      "action"        :'Submit',
      "formContent"   : [],
      "fields"        : {},
      "errors"        : {},
      "name"          : "",
      "companyName"   : "",
      "designation"   : "",
      "country"       : "",
      "contactNumber" : "",
      "email"         : "",
      "position"      : "",
      "experience"    : "",
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

  handleChange(event){

    this.setState({
      "name"             : this.refs.name.value,
      "companyName"      : this.refs.companyName.value,
      "designation"      : this.refs.designation.value,
      "country"          : this.refs.country.value,
      "email"            : this.refs.email.value,
      "contactNumber"    : this.refs.contactNumber.value,
      "position"         : this.refs.position.value,
      "experience"       : this.refs.experience.value,
    });
       let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields
    });
    if (this.validateForm()) {
      let errors = {};
      errors[event.target.name] = "";
      this.setState({
        errors: errors
      });
    }

  }
  Submit(event){
    event.preventDefault();
    if (this.validateForm() && this.validateFormReq()) {
     
      var dataArray={
       "name"            : this.refs.name.value,
      "companyName"      : this.refs.companyName.value,
      "designation"      : this.refs.designation.value,
      "country"          : this.refs.country.value,
      "email"            : this.refs.email.value,
      "contactNumber"    : this.refs.contactNumber.value,
      "position"         : this.refs.position.value,
      "experience"       : this.refs.experience.value,
/*      "enquiry"          : this.refs.enquiry.value,
*/     
    }
      let fields = {};
      fields["name"]            = "";
      fields["companyName"]     = "";
      fields["designation"]     = "";
      fields["country"]         = "";
      fields["email"]           = "";
      fields["contactNumber"]   = "";
      fields["position"]        = "";
      fields["experience"]      = "";

      swal({
          title : "Congratulation....!",
          text  : "Your response submitted sucessfully"
        });
      this.setState({
        "name"             : "",
        "companyName"      : "",
        "designation"      : "",
        "country"          : "",
        "email"            : "",
        "position"         : "",
        "contactNumber"    : "",
        "experience"       : "",
        "fields"           : fields
      });
    }

  }
   validateFormReq() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "This field is required.";
      }     
      if (!fields["companyName"]) {
        formIsValid = false;
        errors["companyName"] = "This field is required.";
      }
      if (!fields["designation"]) {
        formIsValid = false;
        errors["designation"] = "This field is required.";
      }
      if (!fields["country"]) {
          formIsValid = false;
          errors["country"] = "This field is required.";
      }
      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "This field is required.";
      }          
      if (!fields["position"]) {
        formIsValid = false;
        errors["position"] = "This field is required.";
      }          
    
       if (!fields["contactNumber"]) {
        formIsValid = false;
        errors["contactNumber"] = "This field is required.";
      }
       if (!fields["experience"]) {
        formIsValid = false;
        errors["experience"] = "This field is required.";
      }          
      this.setState({
        errors: errors
      });
      return formIsValid;
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "Please enter valid email-ID.";
        }
      }
      if (typeof fields["contactNumber"] !== "undefined") {
        if (!fields["contactNumber"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["contactNumber"] = "Please enter valid mobile no.";
        }
      }
     
      this.setState({
        errors: errors
      });
      return formIsValid;
  }
  isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)  && (charCode < 96 || charCode > 105))
    {
    evt.preventDefault();
      return false;
    }
    else{
      return true;
    }
  }
  isTextKey(evt)  {
   var charCode = (evt.which) ? evt.which : evt.keyCode;
   if (charCode!=189 && charCode > 32 && (charCode < 65 || charCode > 90) )
   {
    evt.preventDefault();
      return false;
    }
    else{
      return true;
    }
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
                                      <input className="form-control nameSpaceUpper" id="name" type="text" name="name" ref="name" value={this.state.name} onKeyDown={this.isTextKey.bind(this)} placeholder="Enter Your Name" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                   <div className="errorMsg">{this.state.errors.name}</div>
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label htmlFor="companyName">Company Name<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon"><i className="fa fa-industry" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="companyName" type="text" name="companyName" ref="companyName" value={this.state.companyName} onKeyDown={this.isTextKey.bind(this)}  placeholder="Enter Company Name" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.companyName}</div>
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label htmlFor="designation">Designation<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon"><i className="fa fa-briefcase" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="designation" type="text" name="designation" ref="designation"  value={this.state.designation} placeholder="Enter Designation" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                   <div className="errorMsg">{this.state.errors.designation}</div>
                                  </div>
                                  <div className="formcontent col-lg-6">
                                    <label htmlFor="country">Country<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon"><i className="fa fa-globe" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="country" type="text" name="country" ref="country" value={this.state.country} placeholder="Enter Country" onKeyDown={this.isTextKey.bind(this)} onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.country}</div>
                                  </div>
                                  <div className="formcontent col-lg-6">
                                    <label htmlFor="contactNumber">Contact Number<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon"><i className="fa fa-mobile" aria-hidden="true"></i></span>
                                      <input className="form-control" id="contactNumber" type="text" name="contactNumber" ref="contactNumber"value={this.state.contactNumber} onKeyDown={this.isNumberKey.bind(this)}   placeholder="Enter Contact Number" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.contactNumber}</div>
                                  </div>
                                  <div className="formcontent col-lg-6">
                                    <label htmlFor="email">Email<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                      <input className="form-control" id="email" type="text" name="email" ref="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.email}</div>
                                  </div>
                                    <div className="formcontent col-lg-6 formht">
                                      <div className="form-group">
                                          <label htmlFor="position">Position<span className="redFont">*</span></label>
                                          <div className="input-group">
                                          <span className="input-group-addon"><i className="fa fa-handshake-o" aria-hidden="true"></i></span>

                                          <select title="Please select district." className="inputBox-main distSelected  areaStaes form-control" ref="position" value={this.state.position} name="position" id="position"  onChange={this.handleChange.bind(this)} >
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
                                          <div className="errorMsg">{this.state.errors.position}</div>
                                      </div>  
                                    </div>


                                    <div className="formcontent col-lg-6 formht">
                                      <div className="form-group">
                                          <label htmlFor="experience">Experience<span className="redFont">*</span></label>
                                          <div className="input-group">
                                          <span className="input-group-addon"><i className="fa fa-handshake-o" aria-hidden="true"></i></span>

                                          <select title="Please select district." className="inputBox-main distSelected  areaStaes form-control" ref="experience" value={this.state.experience} name="experience" id="experience" onChange={this.handleChange.bind(this)} >
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
                                          <div className="errorMsg">{this.state.errors.experience}</div>
                                      </div>  
                                    </div>
                              <div className="col-lg-12">
                                <div className="col-lg-2 col-lg-offset-10">
                                  <button className="btn bgiogblue contactformbtn buttonhover" onClick={this.Submit.bind(this)}>Submit</button>
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


