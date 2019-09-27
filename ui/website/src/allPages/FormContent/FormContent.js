import React,{Component}  from 'react';
import axios              from "axios";
import swal               from 'sweetalert';
import $                  from 'jquery';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

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
      "city"          : "",
      "state"          : "",
      "country"       : "",
      "education"     : "",
      "college"       : "",
      "year"          : "",
      "experience"    : "",
      "curr_ctc"      : "",
      "exp_ctc"       : "",
      "contactNumber" : "",
      "email"         : "",
      "position"      : "",
      "experience"    : "",
      "shown"         : true,
      positionDataArray       :[],
      "positionlevel" : [],
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
    var positionlevel = [
          {
              value: 0,
              label: 'Well Engineer',
          },
          {
              value: 1,
              label: 'Reservoir Engineer'
          },  
          {
              value: 2,
              label: 'Production Technologist'
          },  {
              value: 3, 
              label: 'Consultant-Geophysicist'
          },
          {
              value: 4,
              label: 'Consultant-Geologist'
          }, 
           {
              value: 5, 
              label: 'Consultant-Data Management'
          },
          {
              value: 6,
              label: 'Supply Chain Consultant(Refinery Planning) '
          }, 
           {
              value: 7, 
              label: 'Supply Chain Consultant(Refinery Scheduling) '
          },
          {
              value: 8,
              label: 'MES Consultant'
          },  
          {
              value: 9, 
              label: 'Manager-Projects'
          },
          {
              value: 10,
              label: 'Manager Business Developement'
          },  
          {
              value: 11, 
              label: 'Upstream Production Optimization Consultant'
          },
          {
              value: 12, 
              label: 'APC Consultant'
          },
      ];
     this.setState({
      "positionlevel" :positionlevel,
    },()=>{
        console.log("positionlevel",positionlevel)
      });

  }

  handleChange(event){
  

    this.setState({
      "name"             : this.refs.name.value,
      "city"             : this.refs.city.value,
      "state"            : this.refs.state.value,
      "country"          : this.refs.country.value,
      "education"        : this.refs.education.value,
      "college"          : this.refs.college.value,
      "year"             : this.refs.year.value,
      "experience"       : this.refs.experience.value,
      "curr_ctc"         : this.refs.curr_ctc.value,
      "exp_ctc"          : this.refs.exp_ctc.value,
      "email"            : this.refs.email.value,
      "contactNumber"    : this.refs.contactNumber.value,
      "position"         : this.refs.position.value,
      "experience"       : this.refs.experience.value,
    });


    /*let fields = this.state.fields;
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
    }*/
  }
    positionhandleChange(event){
      
      var positionDataArray = [];
      event.map((data,index)=>{
        console.log("data",data)
        positionDataArray.push(data.label);
      },()=>{
      })

      this.setState({positionDataArray : positionDataArray});
    }

  Submit(event){
    event.preventDefault();
    if (this.validateForm() && this.validateFormReq()) {
     
      var dataArray={
      "name"            : this.refs.name.value,
      "city"             : this.refs.city.value,
      "state"            : this.refs.state.value,
      "country"          : this.refs.country.value,
      "education"        : this.refs.education.value,
      "college"          : this.refs.college.value,
      "year"             : this.refs.year.value,
      "experience"       : this.refs.experience.value,
      "curr_ctc"         : this.refs.curr_ctc.value,
      "exp_ctc"          : this.refs.exp_ctc.value,
      "email"            : this.refs.email.value,
      "contactNumber"    : this.refs.contactNumber.value,
      "position"         : this.state.positionDataArray,
      "experience"       : this.refs.experience.value,
    }
      let fields = {};
      fields["name"]            = "";
      fields["state"]           = "";
      fields["city"]            = "";
      fields["country"]         = "";

      fields["education"]       = "";
      fields["college"]         = "";
      fields["year"]            = "";
      fields["experience"]      = "";
      fields["curr_ctc"]        = "";
      fields["exp_ctc"]         = "";
      fields["email"]           = "";
      fields["contactNumber"]   = "";
      fields["position"]        = "";
      fields["experience"]      = "";

      axios.post("/api", dataArray)
        .then((response)=>{
          console.log("response",response);
          swal({
            title : "Congratulation....!",
            text  : "Your data added successfully"
          });
         /* swal({
            title : response.data.message,
            text  : response.data.message
          });*/
        })
        .catch(function(error){
          console.log("error", error);
      });
      
      this.setState({
        "name"             : "",
        "city"             : "",
        "state"            : "",
        "country"          : "",
        "education"        : "",
        "college"          : "",
        "year"             : "",
        "experience"       : "",
        "curr_ctc"         : "",
        "exp_ctc"          : "",
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
      if (!fields["city"]) {
        formIsValid = false;
        errors["city"] = "This field is required.";
      }
      if (!fields["state"]) {
        formIsValid = false;
        errors["state"] = "This field is required.";
      }
      if (!fields["country"]) {
          formIsValid = false;
          errors["country"] = "This field is required.";
      }
      if (!fields["education"]) {
        formIsValid = false;
        errors["education"] = "This field is required.";
      }
      if (!fields["college"]) {
        formIsValid = false;
        errors["college"] = "This field is required.";
      }
      if (!fields["year"]) {
          formIsValid = false;
          errors["year"] = "This field is required.";
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

  toglehidden(){   
    this.setState({
     shown: !this.state.shown
    },()=>{
      // console.log('shown', this.state.shown, !this.state.shown);
    });
  }
  render(){
    
    var hidden = {
      display: this.state.shown ? "none" : "block"
    }
    return(
        <div>    
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formcontent-wrap">
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contacttextmargin2">
                  <div className="row">
                      <div className="">
                       
                        <div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 jobpageform">
                            <form id="contactForm" >
                              <div className="col-lg-12">
                                <div className="col-lg-2 col-lg-offset-5">
                                  <div className="line1 col-lg-1 col-lg-offset-2"></div>
                                </div>                    
                              </div> 
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                  <div className="row">
                                      <div className="contactcontent jobformcontent lightbluetext text-center">
                                          <span>Job Form</span><span className="us"> </span>
                                      </div>
                                  </div>
                              </div>
                              <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12 formht">
                                <div className="form-group ">
                                    <label htmlFor="noticePeriod">Positions<span className="redFont">*</span></label>
                                    <div className="input-group dropZindex">
                                       <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                      <ReactMultiSelectCheckboxes placeholderButtonLabel="Select Positions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" margin-top={"40px"} options={this.state.positionlevel} onChange={this.positionhandleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.noticePeriod}</div>
                                </div>  
                              </div>   
                            {/*  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formht" >
                                <div className="row" >
                                  <label className="col-lg-2 col-md-4 col-sm-6 col-xs-12" htmlFor="position">Positions<span className="redFont">*</span></label>
                                </div>
                                <div className="form-group">
                                  <div className="input-group">
                                  <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>

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
                                  </select>
                                  </div>
                                  <div className="errorMsg">{this.state.errors.position}</div>
                                </div>  
                              </div>*/}
                                  
                                  <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                   <label htmlFor="name">Name<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-user" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="name" type="text" name="name" ref="name" value={this.state.name} onKeyDown={this.isTextKey.bind(this)} placeholder="Enter Your Name" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                   <div className="errorMsg">{this.state.errors.name}</div>
                                  </div>
                                  <div className="formcontent col-lg-6">
                                    <label htmlFor="email">Email<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                      <input className="form-control" id="email" type="text" name="email" ref="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.email}</div>
                                  </div>
                                  <div className="formcontent col-lg-6">
                                    <label htmlFor="contactNumber">Contact Number<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-mobile mobileIcon" aria-hidden="true"></i></span>
                                      <input className="form-control" id="contactNumber" type="text" name="contactNumber" ref="contactNumber"value={this.state.contactNumber} onKeyDown={this.isNumberKey.bind(this)}   placeholder="Enter Contact Number" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.contactNumber}</div>
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label htmlFor="city">City<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="city" type="text" name="city" ref="city"  value={this.state.city} placeholder="Enter City" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                   <div className="errorMsg">{this.state.errors.city}</div>
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label htmlFor="state">State<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="state" type="text" name="state" ref="state"  value={this.state.state} placeholder="Enter State" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                   <div className="errorMsg">{this.state.errors.state}</div>
                                  </div>
                                  <div className="formcontent col-lg-6">
                                    <label htmlFor="country">Country<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-globe" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="country" type="text" name="country" ref="country" value={this.state.country} placeholder="Enter Country" onKeyDown={this.isTextKey.bind(this)} onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.country}</div>
                                  </div>
                                  <div className="formcontent col-lg-6">
                                    <label htmlFor="education">Highest Education<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-book" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="education" type="text" name="education" ref="education" value={this.state.education} onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.education}</div>
                                  </div>
                                  <div className="formcontent col-lg-6">
                                    <label htmlFor="college">College / University<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-university" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="college" type="text" name="college" ref="college" value={this.state.college} onKeyDown={this.isTextKey.bind(this)} onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.college}</div>
                                  </div>
                                  <div className="formcontent col-lg-6">
                                    <label htmlFor="year">Year of Passing<span className="redFont">*</span></label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="year" type="text" name="year" ref="year" value={this.state.year} onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.year}</div>
                                  </div>
                                  <div className="formcontent col-lg-6 formht">
                                    <div className="form-group">
                                        <label htmlFor="experience">Work Experience<span className="redFont">*</span></label>
                                        <div className="input-group">
                                          <span className="input-group-addon addonColor"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                          <input className="form-control nameSpaceUpper" id="experience" type="text" name="experience" ref="experience" value={this.state.experience}  onChange={this.handleChange.bind(this)}/>
                                        </div>
                                        <div className="errorMsg">{this.state.errors.experience}</div>
                                    </div>  
                                  </div>
                                  <div className="formcontent col-lg-6 formht">
                                    <div className="form-group">
                                        <label htmlFor="curr_ctc">Current CTC<span className="redFont">*</span></label>
                                        <div className="input-group">
                                          <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                          <input className="form-control nameSpaceUpper" id="curr_ctc" type="text" name="curr_ctc" ref="curr_ctc" value={this.state.curr_ctc}  onChange={this.handleChange.bind(this)}/>
                                        </div>
                                        <div className="errorMsg">{this.state.errors.curr_ctc}</div>
                                    </div>  
                                  </div>
                                  <div className="formcontent col-lg-6 formht">
                                    <div className="form-group">
                                        <label htmlFor="exp_ctc">Expected CTC<span className="redFont">*</span></label>
                                        <div className="input-group">
                                          <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                          <input className="form-control nameSpaceUpper" id="exp_ctc" type="text" name="exp_ctc" ref="exp_ctc" value={this.state.exp_ctc}  onChange={this.handleChange.bind(this)}/>
                                        </div>
                                        <div className="errorMsg">{this.state.errors.exp_ctc}</div>
                                    </div>  
                                  </div>
                                  <div className="formcontent col-lg-6 formht">
                                    <div className="form-group">
                                        <label htmlFor="noticePeriod">Notice Period<span className="redFont">*</span></label>
                                        <div className="input-group">
                                          <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                          <input className="form-control nameSpaceUpper" id="noticePeriod" type="text" name="noticePeriod" ref="noticePeriod" value={this.state.noticePeriod}  onChange={this.handleChange.bind(this)}/>
                                        </div>
                                        <div className="errorMsg">{this.state.errors.noticePeriod}</div>
                                    </div>  
                                  </div>
                                                               
                                  <div className="">
                                    <div className="col-lg-12">
                                      <button className="btn col-lg-2 col-lg-offset-10 lightbluebg contactformbtn buttonhover">Submit</button>
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


