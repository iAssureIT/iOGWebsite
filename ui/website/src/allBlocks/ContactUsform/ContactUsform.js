import React,{Component}      from 'react';
import 'jquery-validation';
import swal                   from 'sweetalert';
import $                      from 'jquery';
// import { render } from 'react-dom';
import Select                 from 'react-select-nested';
import Map from '../../allBlocks/Map/Map.js';
import  '../../allPages/ContactPage/Contactpage.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import './Contactpage.css';
class ContactUsform extends Component{
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
     this.handleChange = this.handleChange.bind(this);

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

    // console.log("selectValue",itemValue)
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

    $.validator.addMethod("regexifsc", function (value, element, regexpr) {
      return regexpr.test(value);
    }, "Special Characters Not Allowed.");

    $("#contactForm").validate({
    rules: {
      userName: {
        required: true,
      },
      userName: {
        required: true,
        regexifsc: /^[A-Za-z0-9 ]+$/,
      },
     
      }
    });
  }

  Submit(event){
    event.preventDefault();
   
      if (this.validateForm()) {
      var dataArray={
      "userName"         : this.refs.userName.value,
      "companyName"      : this.refs.companyName.value,
      "designation"      : this.refs.designation.value,
      "country"          : this.refs.country.value,
      "email"            : this.refs.email.value,
      "message"          : this.refs.message.value,
      "contactNumber"    : this.refs.contactNumber.value,
      "subject"          : this.refs.subject.value,
      "enquiry"          : this.refs.enquiry.value,
     
    }
    console.log("dataArray======>",dataArray);
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
        // var adminEmail = this.getAdminEmail();  //Get email id from company settings. Write API for that.
        var adminEmail = "iogdevelopers@gmail.com";
        const formValues1 = {
            "email"         : this.refs.email.value ,
            "subject"       : "Your Query/Feedback is sent successfully to www..com!",
            "message"       : "",
            "mail"          : 'Dear ' + this.state.userName + ', <br/><br/>'+
                             
                              "<b>Your Email: </b>"  + this.refs.email.value + '<br/><br/>'+
                              "Your following message has been successfully delivered to the admin! We will get back to you shortly. <br/> <br/> " +
                              "===============================  <br/> <br/> " +
                              "<pre> " + this.state.message+ "</pre>" +
                              " <br/> <br/> =============================== " +
                              "<br/><br/> Thank You, <br/> Support Team, <br/> www..com " ,
        };
        // console.log("notification",formValues1);
        
        axios
        .post('/send-email',formValues1)
        .then((res)=>{
            if(res.status === 200){
                swal("Thank you for contacting us. We will get back to you shortly.")
                }
        })
        .catch((error)=>{
          console.log("error = ", error);
         
        })
        const formValues2 = {
            "email"         : adminEmail ,
            "subject"       : "New query/feedback arrived from Website!",
            "message"       : "i",
            "mail"          : 'Dear Admin, <br/>'+
                              "Following new query/feedback came from website! <br/> <br/> " +
                              "============================  <br/> <br/> " +
                              "<b>Client Name: </b>"   + this.state.userName + '<br/>'+
                             
                              "<b>Client Company Name: </b>"  + this.state.companyName + '<br/><br/>'+

                              "<b>Designation: </b>"  + this.state.designation + '<br/><br/>'+

                              "<b>Client Email: </b>"  + this.state.email + '<br/><br/>'+

                              "<pre> " + this.state.message + "</pre>" +
                              "<br/><br/> ============================ " +
                              "<br/><br/> This is a system generated email! " ,
        };
        // console.log("notification",formValues2);
     
        axios
        .post('/send-email',formValues2)
        .then((res)=>{
            if(res.status === 200){
                console.log("Mail Sent TO ADMIN successfully!")
            }
        })
        .catch((error)=>{
          console.log("error = ", error);
        });
      /*swal({
          title : "Thank You....!",
          text  : "",
          buttons: false,
        });*/
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
    }else{
      window.scrollTo(0, 0);
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
      // if (!fields["designation"]) {
      //   formIsValid = false;
      //   errors["designation"] = "This field is required.";
      // }
      // if (!fields["country"]) {
      //     formIsValid = false;
      //     errors["country"] = "This field is required.";
      // }
      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "This field is required.";
      }          
      if (!fields["message"]) {
        formIsValid = false;
        errors["message"] = "This field is required.";
      }          
      // if (!fields["subject"]) {
      //   formIsValid = false;
      //   errors["subject"] = "This field is required.";
      // }  
       if (!fields["contactNumber"]) {
        formIsValid = false;
        errors["contactNumber"] = "This field is required.";
      }
     /*if (!fields["enquiry"]) {
        formIsValid = false;
        errors["enquiry"] = "This field is required.";
      }   */      
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
          errors["email"] = "This field is required";
        }
      }
      if (typeof fields["contactNumber"] !== "undefined") {
        if (!fields["contactNumber"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["contactNumber"] = "This field is required";
        }
      }
       if (typeof fields["userName"] !== "undefined") {
        if (!fields["userName"].match(/^[A-Za-z]/)) {
          formIsValid = false;
          errors["userName"] = "This field is required";
        }
      }
      /* if (typeof fields["companyName"] !== "undefined") {
        if (!fields["companyName"].match(/^[A-Za-z0-9 ]{10}$/)) {
          formIsValid = false;
          errors["companyName"] = "This field is required";
        }
      }*/
        /* if (typeof fields["subject"] !== "undefined") {
        if (!fields["subject"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["subject"] = "This field is required";
        }
      }*/
         if (typeof fields["enquiry"] !== "undefined") {
        if (!fields["enquiry"].match(/^[A-Za-z0-9 ]{10}$/)) {
          formIsValid = false;
          errors["enquiry"] = "This field is required";
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
              items: [{parentVal: 1, val: 7, label: 'iOGImplement'},{parentVal: 1, val: 8, label: 'iOGConsult'},{parentVal: 1, val: 9, label: 'iOGTrain '},{parentVal: 1, val: 10, label: 'iOGStudy'}]
          },
          
          {
              val: 1,
              label: 'Expertise',
              items: [{parentVal: 2, val: 11, label: 'Planning & Scheduling'},{parentVal: 2, val: 12, label: 'Supply & Distribution'},{parentVal: 2, val: 13, label: 'Digital Services '},
                      {parentVal: 2, val: 14, label: 'Manufacturing Execution System'},{parentVal: 2, val: 15, label: 'Health & Safety Environment'},
                      {parentVal: 2, val: 16, label: 'Simulation & Modeling'},{parentVal: 2, val: 17, label: 'Energy Management'},
                      {parentVal: 2, val: 18, label: 'Asset Management'},{parentVal: 2, val: 19, label: 'Other Services'}]
          } ,
          {
              val: 2,
              label: 'Sales',
          }, 
          {
              val: 3,
              label: 'Industries',
              items: [{parentVal: 3, val: 20, label: 'Refinery'},{parentVal: 3, val: 21, label: 'Petrochemicals'},{parentVal: 3, val: 22, label: 'Chemicals '},
                      {parentVal: 3, val: 23, label: 'LNG'},{parentVal: 3, val: 24, label: 'Gas Processing'},{parentVal: 3, val: 25, label: 'Oil & Gas E & P'}]
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
            <form id="contactForm ">
                <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="userName">Name<span className="redFont">*</span></label>
                  <div className="input-group">
                    <span className="input-group-addon addonColor"><i className="fa fa-user mobileIcon" aria-hidden="true"></i></span>
                    <input className="form-control" id="userName" type="text" name="userName" value={this.state.userName} maxLength={30}  onKeyDown={this.isTextKey.bind(this)} onChange={this.handleChange.bind(this)}  ref="userName" placeholder="Enter Your Name"/>
                  </div>
                  <div className="errorMsg">{this.state.errors.userName}</div>
                </div>
              {/*  <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="contactNumber">Name<span className="redFont">*</span></label>
                  <div className="input-group">
                    <span className="input-group-addon addonColor"><i className="fa fa-user mobileIcon" aria-hidden="true"></i></span>
                    <input className="form-control" id="userName" type="text" name="userName" value={this.state.userName} maxLength={30}  onKeyDown={this.isTextKey.bind(this)} onChange={this.handleChange.bind(this)}  ref="userName" placeholder="Enter Your Name"/>
                  </div>
                  <div className="errorMsg">{this.state.errors.userName}</div>
                </div>*/}
                 <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="companyName">Company Name</label>
                  <div className="input-group">
                    <span className="input-group-addon addonColor"><i className="fa fa-industry mobileIcon" aria-hidden="true"></i></span>
                    <input className="form-control" id="companyName" type="text" name="companyName" value={this.state.companyName} maxLength={10}  onChange={this.handleChange.bind(this)}  ref="companyName" placeholder="Enter Company Name"/>
                  </div>
                  <div className="errorMsg">{this.state.errors.companyName}</div>
                </div>
                <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="designation">Designation<span className="redFont"></span></label>
                  <div className="input-group">
                    <span className="input-group-addon addonColor"><i className="fa fa-briefcase" aria-hidden="true"></i></span>
                    <input className="form-control nameSpaceUpper" id="designation" type="text" name="designation" value={this.state.designation} onChange={this.handleChange.bind(this)}  ref="designation" placeholder="Enter Designation"/>
                  </div>
                  <div className="errorMsg"></div>
                </div>
                <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="country">Country<span className="redFont"></span></label>
                  <div className="input-group">
                    <span className="input-group-addon addonColor"><i className="fa fa-globe" aria-hidden="true"></i></span>
                    <input className="form-control nameSpaceUpper" id="country" type="text" name="country" ref="country" value={this.state.country} onChange={this.handleChange.bind(this)}  placeholder="Enter Country"/>
                  </div>
                  {/*<div className="errorMsg">{this.state.errors.country}</div>*/}
                </div>
                <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="contactNumber">Contact Number<span className="redFont">*</span></label>
                  <div className="input-group">
                    <span className="input-group-addon addonColor"><i className="fa fa-mobile mobileIcon" aria-hidden="true"></i></span>
                    <input className="form-control" id="contactNumber" type="text" name="contactNumber" value={this.state.contactNumber} maxLength={10}  onKeyDown={this.isNumberKey.bind(this)} onChange={this.handleChange.bind(this)}  ref="contactNumber" placeholder="Enter Contact Number"/>
                  </div>
                  <div className="errorMsg">{this.state.errors.contactNumber}</div>
                </div>
                <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="email">Email<span className="redFont">*</span></label>
                  <div className="input-group">
                    <span className="input-group-addon addonColor"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    <input className="form-control" id="email" type="text" name="email" ref="email"  value={this.state.email} onChange={this.handleChange.bind(this)}  placeholder="Enter Email"/>
                  </div>
                  <div className="errorMsg">{this.state.errors.email}</div>
                </div>
                <div className="formcontent col-lg-9 col-md-9 col-sm-12 col-xs-12">
                  <div className="form-group">
                      <label htmlFor="enquiry">Enquiry<span className="redFont">*</span></label>
                      <div className="input-group">
                      <span className="input-group-addon addonColor"><i className="fa fa-handshake-o" aria-hidden="true"></i></span>
                           <Select
                                placeholder="-- Select Option --"
                                className="NOPadding"
                                id="enquiry"
                                value={this.state.enquiry}
                                ref="enquiry"
                                list={fruit}
                                onChange ={this.handleChangeSelect.bind(this)}
                                onSelectChange={this.handleChangeSelect.bind(this)}
                            />                                          
                        </div>
                      <div className="errorMsg">{this.state.errors.enquiry}</div>
                  </div>  
                </div>
                <div className="formcontent col-lg-9 col-md-9 col-sm-12 col-xs-12">
                  <label htmlFor="subject">Subject</label>
                  <div className="input-group">
                    <span className="input-group-addon addonColor"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                    <input className="form-control nameSpaceUpper" id="subject" type="text" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this)}  ref="subject" placeholder="Enter Subject"/>
                  </div>
                  <div className="errorMsg">{this.state.errors.subject}</div>
                </div>
                <div className="formcontent1 col-lg-12  col-md-12 col-sm-12 col-xs-12">
                  <label htmlFor="message">Note<span className="redFont"></span></label>
                  <textarea rows="5" cols="1" className="form-control" id="message" name="message" value={this.state.message} onChange={this.handleChange.bind(this)}  ref="message"></textarea>
                  {/*<div className="errorMsg">{this.state.errors.message}</div>*/}
                </div>
                <div className="col-lg-12  col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-2 col-lg-offset-10">
                    <button className="btn lightbluebg contactformbtn buttonhover" onClick={this.Submit.bind(this)}> Submit</button>
                  </div>
               </div>
            </form>
        </div>    
    );
  }
}

export default ContactUsform;

