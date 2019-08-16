import React,{Component}      from 'react';
import swal                   from 'sweetalert';
import $                      from 'jquery';
// import { render } from 'react-dom';
import Select                 from 'react-select-nested';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



import './Contactpage.css';
class Contactpage extends Component{
  constructor(){
    super();
     this.state={
      "userName"      : "",
      "companyName"   : "",
      "designation"   : "",
      "country"       : "",
      "contactNumber" : "",
      "email"         : "",
      "subject"       : "",
      "enquiry"       : "",
      "message"       : "",
      "fields"        : {},
      "errors"        : {},
     }

  }
    handleChange(event){
    event.preventDefault();
    this.setState({
      "userName"         : this.refs.userName.value,
      "companyName"      : this.refs.companyName.value,
      "designation"      : this.refs.designation.value,
      "country"          : this.refs.country.value,
      "email"            : this.refs.email.value,
      "message"          : this.refs.message.value,
      "contactNumber"    : this.refs.contactNumber.value,
      "subject"          : this.refs.subject.value,
      "enquiry"          : this.state.enquiry,
     
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

  handleChangeSelect(itemValue){

    console.log("selectValue",itemValue)
    var itemLabel = itemValue.label;
    this.setState({
       "enquiry" :  itemLabel,
    });
    
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
  Submit(event){
    event.preventDefault();
    if (this.validateForm() && this.validateFormReq()) {
     
      var dataArray={
      "userName"         : this.refs.userName.value,
      "companyName"      : this.refs.companyName.value,
      "designation"      : this.refs.designation.value,
      "country"          : this.refs.country.value,
      "email"            : this.refs.email.value,
      "message"          : this.refs.message.value,
      "contactNumber"    : this.refs.contactNumber.value,
      "subject"          : this.refs.subject.value,
      "enquiry"          : this.state.enquiry,
     
    }
      let fields = {};
      fields["userName"]      = "";
      fields["companyName"]   = "";
      fields["designation"]   = "";
      fields["country"]       = "";
      fields["email"]         = "";
      fields["message"]       = "";
      fields["contactNumber"] = "";
      fields["subject"]       = "";
/*      fields["enquiry"]       = "";
*/
      swal({
          title : "Congratulation....!",
          text  : "Your response submitted sucessfully"
        });
      this.setState({
        "userName"         : "",
        "companyName"      : "",
        "designation"      : "",
        "country"          : "",
        "email"            : "",
        "message"          : "",
        "contactNumber"    : "",
        "subject"          : "",
        "enquiry"          : "",
        "fields"           : fields
      });
    }
  }
  validateFormReq() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
      if (!fields["userName"]) {
        formIsValid = false;
        errors["userName"] = "This field is required.";
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
      if (!fields["message"]) {
        formIsValid = false;
        errors["message"] = "This field is required.";
      }          
      if (!fields["subject"]) {
        formIsValid = false;
        errors["subject"] = "This field is required.";
      }  
       if (!fields["contactNumber"]) {
        formIsValid = false;
        errors["contactNumber"] = "This field is required.";
      }
    /*   if (!fields["enquiry"]) {
        formIsValid = false;
        errors["enquiry"] = "This field is required.";
      } */         
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
    const fruit = [
          {
              val: 0,
              label: 'Services',
              items: [{parentVal: 1, val: 7, label: 'Upstream'},{parentVal: 1, val: 8, label: 'Downstream'},{parentVal: 1, val: 9, label: 'Health safty & Environment '},{parentVal: 1, val: 10, label: 'Asset Management'},{parentVal: 1, val: 11, label: 'Digital Services'}]
          },
          {
              val: 1,
              label: 'Sales'
          },  {
              val: 2,
              label: 'Support'
          },  {
              val: 3,
              label: 'Consulting'
          },
        /*  {
              val: 2,
              label: 'Sales',
              items: [{parentVal: 2, val: 5, label: 'sub item 3'}, {parentVal: 2, val: 6, label: 'sub item 4'}]
          },
          {
              val: 3,
              label: 'Pomegranate',
              items: [{parentVal: 3, val: 9, label: 'sub item 5'}, {parentVal: 3, val: 10, label: 'sub item 6'}]
          },
          {
              val: 4,
              label: 'Strawberry',
          }*/
      ];
 
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
                                      <a href="https://www.linkedin.com/company/iogsolutions/" target="_blank" ><i className="fa fa-linkedin contacticon2"></i></a>
                                  </div>
                                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                      <a href="https://twitter.com/iogsolutions" target="_blank"><i className="fa fa-twitter contacticon2"></i></a>
                                  </div>
                                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                      <a href="https://www.facebook.com/iOGsolutions/" target="_blank"><i className="fa fa-facebook contacticon21"></i></a>
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
                                         <label htmlFor="userName">Name<span className="redFont">*</span></label>
                                          <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
                                            <input className="form-control nameSpaceUpper" id="userName" type="text" name="userName"  ref="userName" value={this.state.userName} onChange={this.handleChange.bind(this)} onKeyDown={this.isTextKey.bind(this)}  placeholder="Enter Your Name"/>
                                          </div>
                                          <div className="errorMsg">{this.state.errors.userName}</div>
                                        </div>
                                        <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                          <label htmlFor="companyName">Company Name<span className="redFont">*</span></label>
                                          <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-industry" aria-hidden="true"></i></span>
                                            <input className="form-control nameSpaceUpper" id="companyName" type="text" name="companyName" value={this.state.companyName} onChange={this.handleChange.bind(this)} onKeyDown={this.isTextKey.bind(this)} ref="companyName" placeholder="Enter Company Name"/>
                                          </div>
                                          <div className="errorMsg">{this.state.errors.companyName}</div>
                                        </div>
                                        <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                          <label htmlFor="designation">Designation<span className="redFont">*</span></label>
                                          <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-briefcase" aria-hidden="true"></i></span>
                                            <input className="form-control nameSpaceUpper" id="designation" type="text" name="designation" value={this.state.designation} onChange={this.handleChange.bind(this)}  ref="designation" placeholder="Enter Designation"/>
                                          </div>
                                          <div className="errorMsg">{this.state.errors.designation}</div>
                                        </div>
                                        <div className="formcontent col-lg-6">
                                          <label htmlFor="country">Country<span className="redFont">*</span></label>
                                          <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-globe" aria-hidden="true"></i></span>
                                            <input className="form-control nameSpaceUpper" id="country" type="text" name="country" ref="country" value={this.state.country} onChange={this.handleChange.bind(this)}  placeholder="Enter Country"/>
                                          </div>
                                          <div className="errorMsg">{this.state.errors.country}</div>
                                        </div>
                                        <div className="formcontent col-lg-6">
                                          <label htmlFor="contactNumber">Contact Number<span className="redFont">*</span></label>
                                          <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-mobile" aria-hidden="true"></i></span>
                                            <input className="form-control" id="contactNumber" type="text" name="contactNumber" value={this.state.contactNumber}  onKeyDown={this.isNumberKey.bind(this)} onChange={this.handleChange.bind(this)}  ref="contactNumber" placeholder="Enter Contact Number"/>
                                          </div>
                                          <div className="errorMsg">{this.state.errors.contactNumber}</div>
                                        </div>
                                        <div className="formcontent col-lg-6">
                                          <label htmlFor="email">Email<span className="redFont">*</span></label>
                                          <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                            <input className="form-control" id="email" type="text" name="email" ref="email"  value={this.state.email} onChange={this.handleChange.bind(this)}  placeholder="Enter Email"/>
                                          </div>
                                          <div className="errorMsg">{this.state.errors.email}</div>
                                        </div>
                                        <div className="formcontent col-lg-6">
                                      <div className="form-group">
                                          <label htmlFor="enquiry">Enquiry<span className="redFont">*</span></label>
                                          <div className="input-group">
                                          <span className="input-group-addon"><i className="fa fa-handshake-o" aria-hidden="true"></i></span>
                                               <Select
                                                    placeholder="-- Select Option --"
                                                    className="NOPadding"
                                                    id="enquiry"
                                                    value={this.state.enquiry}

                                                    list={fruit}
                                                    onChange ={this.handleChangeSelect.bind(this)}
                                                    onSelectChange={this.handleChangeSelect.bind(this)}
                                                />                                          
                                            </div>
                                          <div className="errorMsg">{this.state.errors.enquiry}</div>
                                      </div>  
                                    </div>
                                      {/* <div className="formcontent col-lg-6">
                                          <label htmlFor="enquiry">Enquiry<span className="redFont">*</span></label>
                                          <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-handshake-o" aria-hidden="true"></i></span>
                                            <div className="dropdown">
                                          </div>
                                            <button className="text-left fullwidth btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">-Select Enquiry-
                                            <div className="caret adjustcaret"></div></button>
                                            <ul className="dropdown-menu">
                                              <li className="dropdown-submenu">
                                                <a className="test" tabIndex="-1" href="/">Services<span className="caret adjustcaret"></span></a>
                                                <ul className="dropdown-menu">
                                                  <li><a tabIndex="-1" href="/">Upstream</a></li>
                                                  <li><a tabIndex="-1" href="/">Downstream</a></li>
                                                </ul>
                                              </li>
                                              <li><a tabIndex="-1" href="/">Sales</a></li>
                                              <li><a tabIndex="-1" href="/">Support</a></li>
                                              <li><a tabIndex="-1" href="/">Consulting</a></li>
                                            </ul>
                                          </div>
                                          <div className="errorMsg">{this.state.errors.enquiry}</div>

                                        </div>*/}
                                        <div className="formcontent col-lg-6">
                                          <label htmlFor="subject">Subject<span className="redFont">*</span></label>
                                          <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                                            <input className="form-control nameSpaceUpper" id="subject" type="text" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this)}  ref="subject" placeholder="Enter Subject"/>
                                          </div>
                                          <div className="errorMsg">{this.state.errors.subject}</div>
                                        </div>
                                        <div className="formcontent1 col-lg-12">
                                          <label htmlFor="message">Note<span className="redFont">*</span></label>
                                          <textarea rows="5" cols="1" className="form-control" id="message" name="message" value={this.state.message} onChange={this.handleChange.bind(this)}  ref="message"></textarea>
                                          <div className="errorMsg">{this.state.errors.message}</div>
                                        </div>
  {/*                                            <div className="checkbox">
                                      <label><input type="checkbox" name="remember"/>I agree that my submitted data is being collected and stored.

                                      </label>
                                    </div>*/}
                                    <div className="col-lg-12">
                                      <div className="col-lg-2 col-lg-offset-10">
                                        <button className="btn bgiogblue contactformbtn buttonhover" onClick={this.Submit.bind(this)}> Submit</button>
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



