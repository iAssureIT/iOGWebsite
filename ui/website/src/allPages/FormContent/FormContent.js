import React,{Component}  from 'react';
import axios              from "axios";
import swal               from 'sweetalert';
import $                  from 'jquery';
import jQuery, { isNumeric } from 'jquery';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import PhoneInput               from 'react-phone-input-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import S3FileUpload from 'react-s3';

import './FormContent.css';

class FormContent extends Component{
  constructor(){
    super();
     this.state={
      "action"        :'Submit',
      "formContent"   : [],
      "fileurl"       :"",
       "resume"       : '',
      "fields"        : {},
      "errors"        : {},
      "name1"         : "",
      "city"          : "",
      "state1"        : "",
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
      positionDataArray :[],
      "positionlevel" : [],
     }
     this.handleChangeCountry      = this.handleChangeCountry.bind(this);
     this.camelCase                = this.camelCase.bind(this)
    this.handleChangeState        = this.handleChangeState.bind(this);
  }

  componentDidMount() {
   var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

   if (isSafari){
     $('body').css('background-image','none');
   }

      axios
          .get('http://iogapi.iassureit.com/api/projectsettings/get/S3')
          .then((response)=>{
            // console.log("response",response);
            const config = {
                              bucketName      : response.data.bucket,
                              dirName         : "iOG",
                              region          : response.data.region,
                              accessKeyId     : response.data.key,
                              secretAccessKey : response.data.secret,
                           }
            this.setState({
              config : config
            })

          })
          .catch(function(error){
            console.log(error);
              if(error.message === "Request failed with status code 401")
                  {
                       swal("Your session is expired! Please login again.","", "error");
                       this.props.history.push("/");
                  }
          });
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

      $.validator.addMethod("noSpace", function(value, element) { 
        return value == '' || value.trim().length != 0;
        }, "No space please and don't leave it empty");

        $.validator.addMethod("valueNotEquals", function (value, element, arg) {
          return arg !== value && value!== null;
        }, "Please select position");
    
  
      jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
      });
      
        $("#contactForm").validate({
        rules: {
          position: {
            required: true,
            valueNotEquals:"--Select Position--"
          },
          name1: {
           required: true,
           noSpace: true
          },
          email: {
           required: true,	
           noSpace: true,
          },
          curr_ctc:{
           required: true,
           noSpace: true
          },
          skills:{
            required:true,
            noSpace: true
          },
          resume:{
            required:true
          }
        },
        errorPlacement: function (error, element) {
          if (element.attr("name") === "position") {
            error.insertAfter(".positionDiv");
          }
          if (element.attr("name") === "name1") {
            error.insertAfter(".name1Div");
          }
          if (element.attr("name") === "email") {
            error.insertAfter(".emailDiv");
          }
          if (element.attr("name") === "curr_ctc") {
            error.insertAfter(".curr_ctc_div");
          }
          if (element.attr("name") === "skills") {
            error.insertAfter(".skillsDiv");
          }
          if (element.attr("name") === "skills") {
            error.insertAfter(".skillsDiv");
          }
          if (element.attr("name") === "resume") {
            error.insertAfter(".resumeDiv");
          }
        }
        });  

  }
  handleChangeState(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    const target = event.target;
    const stateCode = $(target).val();
    const countryCode = $("#countryVal").val();
    // this.getDistrict(stateCode, countryCode);

  }
   camelCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  handleChange(event){
     event.preventDefault();

      // const datatype = event.target.getAttribute('data-text');
      const {name,value} = event.target;

      this.setState({ 
        [name]:value,
 
      } );
  

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
    positionhandleChange(event){
      
      var positionDataArray = [];
      event.map((data,index)=>{
        console.log("data",data)
        positionDataArray.push(data.label);
      },()=>{
      })

      this.setState({
        positionDataArray : positionDataArray
      });
    }

  Submit(event){
    event.preventDefault();
     const fileurl = localStorage.getItem('Fileurl');
      console.log("fileurlNew---",this.state.fileurl)

    if ($('#contactForm').valid()) {
     
      var dataArray={
      "name1"            : this.refs.name1.value,
      "city"             : this.refs.city.value,
      "state1"           : this.refs.state1.value,
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
      "resume"           : this.state.fileurl,
      "skills"           : this.refs.skills.value,
      "noticePeriod"     : this.refs.noticePeriod.value,
    }
    console.log("this.refs.resume.value",this.state.resume);
    console.log("data0000",dataArray);
      let fields = {};
      fields["name1"]            = "";
      fields["state1"]           = "";
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

        var adminEmail = "iogdevelopers@gmail.com";
        // var adminEmail = "iassureitmail@gmail.com";
        const formValues1 = {
            "email"         : [this.state.email],
            "subject"       : "Your Query/Feedback is sent successfully to www..com!",
            "message"       : "",
            "mail"          : 'Dear ' + this.state.name1 + ', <br/><br/>'+
                             
                              "<b>Your Email: </b>"  + this.state.email + '<br/><br/>'+
                              "Your job Application has been sent Successfully to the admin! We will get back to you shortly. <br/> <br/> " +
                              "===============================  <br/> <br/> " +
                              "<pre> " + this.state.message+ "</pre>" +
                              " <br/> <br/> =============================== " +
                              "<br/><br/> Thank You, <br/> Support Team, <br/> www..com " ,
        };

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
            "email"         : [ adminEmail,
                               // 'careers@iogsolutions.com'
                                'careers@iogsolutions.com'
                              ],
            "subject"       : "New Job Application has been received..!",
            "message"          : "",
            "mail"          : 'Dear  Recruiter, <br/>'+
                              "This is in response to your job advertised on Naukri.com for " +"<b></b>"  + this.state.position +'<br/>'+ "I would like to present my candidature for the same. Here are some of my details:" +'<br/><br/>' +
                              "----------------------------------------------------------------------<br/> <br/> " +
                              "<b> Name: </b>"               + this.state.name1 + '<br/><br/>'+
                             
                              "<b>Work Experience: </b>"     + this.state.experience + '<br/><br/>'+

                              "<b>Current CTC: </b>"        + this.state.curr_ctc + '<br/><br/>'+

                              "<b>Current Location: </b>"   + this.state.city + '<br/><br/>'+

                              "<b>Key Skills: </b>"         + this.state.skills + '<br/><br/>'+

                              "<b>Highest Education: </b>"  + this.state.education + '<br/><br/>'+

                               "----------------------------------------------------------------------<br/> <br/> " +


                                // "<b>Download Resume: </b>"     + this.state.fileurl + '<br/><br/>'+
                                 "" ,



            "attachments"  : [{
                           
                            "name" : "Resume",
                            "path" : this.state.fileurl
                          }]      

        };

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

      axios.post("/api/jobform/post", dataArray)
        .then((response)=>{
          console.log("response",response);
          swal({
            title : "Data Submitted Successfully..!",
            text  : "you will be contacted soon..."
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
        "name1"             : "",
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
        "noticePeriod"     : "",
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
      if (!fields["name1"]) {
        formIsValid = false;
        errors["name1"] = "This field is required.";
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
      if (!fields["curr_ctc"]) {
        formIsValid = false;
        errors["curr_ctc"] = "This field is required.";
      }          
      if (!fields["exp_ctc"]) {
        formIsValid = false;
        errors["exp_ctc"] = "This field is required.";
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
       if (typeof fields["name1"] !== "undefined") {
        if (!fields["name1"].match(/^[A-Za-z]/)) {
          formIsValid = false;
          errors["name1"] = "This field is required";
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
  changeMobile(event){ 
    this.setState({
      companyPhone : event
    },()=>{ 
      if(this.state.companyPhone){
        this.setState({
          companyPhoneError : this.state.companyPhone === "+" ? 'Please enter valid mobile number.' : ""
        })
      } 
    })
  }
   handleChangeCountry(event) {
    const target = event.target;
    this.setState({
      [event.target.name]: event.target.value
    });
    this.getStates(event.target.value.split('|')[0])
  }
  getStates(StateCode) {
    axios.get("http://locations2.iassureit.com/api/states/get/list/" + StateCode)
      .then((response) => {
        this.setState({
          stateArray: response.data
        })
        $('#state').val(this.state.states);
      })
      .catch((error) => {
      })
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
  uploadforeGImg(event){
    // console.log("upload =",event.target.files[0]);
    var file = event.target.files[0];
    if(file){
      var ext = file.name.split('.').pop();
      if(ext=="jpg" || ext=="png" || ext=="jpeg" || ext=="JPG" || ext=="PNG" || ext=="JPEG" || ext=="pdf" || ext=="PDF" || ext=="docx"){ 
        this.setState({
          uploadedImage: event.target.files[0]
          },()=>{
          console.log("uploadToS3 =",this.state.uploadedImage);
          // console.log("this.state.config",this.state.config);
           S3FileUpload
            .uploadFile(file,this.state.config)

            .then((Data)=>{
                console.log('Data.location', Data.location);
              this.setState({
                fileurl :  Data.location,
                  
              })
          })
          .catch((error)=>{
            console.log(error);
          })
        })
      }else{
        swal("Format is incorrect","Only Upload images format (jpg,png,jpeg)","warning"); 
         this.setState({
                fileurl :  "",
                  
              })
        }
      }else{         
            swal("","Something went wrong","error"); 
          } 
  }
  docBrowseSingle(event) {
    event.preventDefault();
    var name = event.target.name
    var docBrowse = [];
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      for (var i = 0; i < event.currentTarget.files.length; i++) {
        var file = event.currentTarget.files[i];
        if (file) {
          var fileName = file.name;
          var ext = fileName.split('.').pop();
          if (ext === "jpg" || ext === "png" || ext === "jpeg" || ext === "pdf" || ext === "JPG" || ext === "PNG" || ext === "JPEG" || ext === "PDF") {
            if (file) {
              var objTitle = { fileInfo: file }
              docBrowse.push(objTitle);

            } else {
              swal("Photo not uploaded");
            }//file
          } else {
            swal("Allowed images formats are (jpg,png,jpeg, pdf)");
          }//file types
        }//file
      }//for 

      if (event.currentTarget.files) {
         this.setState({
                    ["gotImage"+name]: true

                })
        main().then(formValues => {
          var docBrowse = this.state[name];
          this.setState({
            [name]: formValues[0].docBrowse
          }, () => {
            console.log("name", [name])
          })
        });

        async function main() {
          var formValues = [];
          for (var j = 0; j < docBrowse.length; j++) {
            var config = await getConfig();
            var s3url = await s3upload(docBrowse[j].fileInfo, config, this);
            const formValue = {
              "docBrowse": s3url,
              "status": "New"
            };
            formValues.push(formValue);
          }
          return Promise.resolve(formValues);
        }


        function s3upload(image, configuration) {
          // console.log("configuration",configuration);

          return new Promise(function (resolve, reject) {
            S3FileUpload
              .uploadFile(image, configuration)
              .then((URL) => {
                // console.log("s3 data",URL);
                  // const fileurl=URL.location;
                  // console.log("URL.location",URL.location);
                  this.setState({
                    fileurl:URL.location

                  },()=>{
                         console.log("fileurl>>>",this.state.fileurl)
                  });
                   // const fileurl=localStorage.setItem("fileurl",this.state.fileurl);
                  // const fileurl = localStorage.getItem('Fileurl');
                resolve(URL.location);
                
                 
              })
              .catch((error) => {
              })
          })
        }
        function getConfig() {
          return new Promise(function (resolve, reject) {
            axios
              .get('http://iogapi.iassureit.com/api/projectsettings/get/S3')
              .then((response) => {
                // console.log("s3 response",response);
                const config = {
                  bucketName: response.data.bucket,
                  dirName: 'iOG',
                  region: response.data.region,
                  accessKeyId: response.data.key,
                  secretAccessKey: response.data.secret,
                }
                resolve(config);
              })
              .catch(function (error) {
              })
          })
        }
      }
    }
  }
  deleteDocSingle(event) {
    event.preventDefault();
    var name = event.target.getAttribute("name");

    this.setState({
      [name]: "",
      ["gotImage"+name]: false


    })
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
                       
                        <div className="col-lg-10 col-lg-offset-1 col-md-offset-1 col-md-12 col-sm-12 col-xs-12 jobpageform">
                            <form id="contactForm" >
                              <div className="col-lg-12">
                                {/*<div className="col-lg-12 col-md-12 col-sm-11 col-xs-12 ">
                                  <div className="line1 col-lg-1 col-lg-offset-2"></div>
                                </div> */}                   
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
                                    <label htmlFor="position">Positions<span className="redFont">*</span></label>
                                    <div className="input-group dropZindex positionDiv">
                                       <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                         {/*<ReactMultiSelectCheckboxes placeholderButtonLabel="Select Positions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" value={this.state.positionDataArray} margin-top={"40px"} options={this.state.positionlevel}  onChange={this.positionhandleChange.bind(this)}/>*/}
                                          <select id="vendor" className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12" value={this.state.position} ref="position" name="position" onChange={this.handleChange.bind(this)}>
                                            <option>--Select Position--</option>
                                            <option>Asset Reliability Consultant </option>
                                            <option>Asset Integrity Management Consultant</option>
                                            <option>Supply Chain Consultant (Chemical)</option>
                                            <option>Process & Health Safety Consultant </option>
                                            <option>Supply Chain Consultant(Refinery Planning</option>
                                            <option>MES Consultant</option>
                                            <option>Manager-Projects</option>
                                            <option>Manager Business Developement</option>
                                            <option>APC Consultant</option>
                                            {/*<option>Manager-Projects</option>
                                            <option>Manager Business Developement</option>
                                            <option>Upstream Production Optimization Consultant</option>
                                            <option>APC Consultant</option>
      */}
                                        </select>
                                      {/*<ReactMultiSelectCheckboxes placeholderButtonLabel="Select Positions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" name="positionlevel" margin-top={"40px"}ref="positionlevel" options={this.state.positionlevel} onChange={this.positionhandleChange.bind(this)}/>*/}
                                    </div>
                                    <div className="errorMsg">{this.state.errors.position}</div>
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
                                  
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                   <label htmlFor="name">Name<span className="redFont">*</span></label>
                                    <div className="input-group name1Div">
                                      <span className="input-group-addon addonColor"><i className="fa fa-user" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="name1" type="text" name="name1" ref="name1" value={this.state.name1} onKeyDown={this.isTextKey.bind(this)} placeholder="Enter Your Name" onChange={this.handleChange.bind(this)} required/>
                                    </div>
                                   {/* <div className="errorMsg">{this.state.errors.name1}</div> */}
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <label htmlFor="email">Email<span className="redFont">*</span></label>
                                    <div className="input-group emailDiv">
                                      <span className="input-group-addon addonColor"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                      <input className="form-control" id="email" type="text" name="email" ref="email" value={this.state.email} placeholder="Enter Email" name="email" onChange={this.handleChange.bind(this)} required/>
                                    </div>
                                    {/* <div className="errorMsg">{this.state.errors.email}</div> */}
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <label htmlFor="contactNumber">Contact Number</label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-mobile mobileIcon" aria-hidden="true"></i></span>
                                      <input className="form-control" ref="contactNumber"  value={this.state.contactNumber}name="contactNumber"onChange={this.handleChange.bind(this)}/>
                                     
                                    </div>
                                    <div className="errorMsg">{this.state.errors.contactNumber}</div>
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <label htmlFor="country">Country</label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-globe" aria-hidden="true"></i></span>
                                        <input className="form-control nameSpaceUpper col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                            ref="country" name="country" id="country" value={this.state.country} onChange={this.handleChange.bind(this)} />
                                           
                                       </div>
                                    </div>
                                    <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <label htmlFor="state">State</label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                      <input className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                        ref="state1" value={this.state.state1} name="state1" onChange={this.handleChange.bind(this)} />
                                    </div>
                                   <div className="errorMsg">{this.state.errors.state}</div>
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <label htmlFor="city">City</label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="city" type="text" name="city" ref="city"  value={this.state.city} placeholder="Enter City" name="city" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                   <div className="errorMsg">{this.state.errors.city}</div>
                                  </div>
                                  
                                  
                                    <div className="errorMsg">{this.state.errors.country}</div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <label htmlFor="education">Highest Education</label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-book" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="education" type="text" name="education" ref="education" value={this.state.education}  onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.education}</div>
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <label htmlFor="college">College / University</label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-university" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="college" type="text" name="college" ref="college" value={this.state.college}  onKeyDown={this.isTextKey.bind(this)} onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.college}</div>
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <label htmlFor="year">Year of Passing</label>
                                    <div className="input-group">
                                      <span className="input-group-addon addonColor"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                      <input className="form-control nameSpaceUpper" id="year" type="date" name="year" ref="year" value={this.state.year}  onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.year}</div>
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12 formht">
                                    <div className="form-group">
                                        <label htmlFor="experience">Work Experience</label>
                                        <div className="input-group">
                                          <span className="input-group-addon addonColor"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                          <input className="form-control nameSpaceUpper" id="experience" type="text" name="experience" ref="experience" value={this.state.experience}   onChange={this.handleChange.bind(this)}/>
                                        </div>
                                        <div className="errorMsg">{this.state.errors.experience}</div>
                                    </div>  
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12 formht">
                                    <div className="form-group">
                                        <label htmlFor="curr_ctc">Current CTC<span className="redFont">*</span></label>
                                        <div className="input-group curr_ctc_div">
                                          <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                          <input className="form-control nameSpaceUpper" id="curr_ctc" type="text" name="curr_ctc" ref="curr_ctc" value={this.state.curr_ctc}   onChange={this.handleChange.bind(this)} required/>
                                        </div>
                                        {/* <div className="errorMsg">{this.state.errors.curr_ctc}</div> */}
                                    </div>  
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12 formht">
                                    <div className="form-group">
                                        <label htmlFor="exp_ctc">Expected CTC</label>
                                        <div className="input-group">
                                          <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                          <input className="form-control nameSpaceUpper" id="exp_ctc" type="text" name="exp_ctc" ref="exp_ctc" value={this.state.exp_ctc}  onChange={this.handleChange.bind(this)}/>
                                        </div>
                                        {/* <div className="errorMsg">{this.state.errors.exp_ctc}</div> */}
                                    </div>  
                                  </div>
                                  <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12 formht">
                                    <div className="form-group">
                                        <label htmlFor="noticePeriod">Notice Period</label>
                                        <div className="input-group">
                                          <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                          <input className="form-control nameSpaceUpper" id="noticePeriod" type="text" name="noticePeriod" ref="noticePeriod"  value={this.state.noticePeriod}  onChange={this.handleChange.bind(this)}/>
                                        </div>
                                        {/* <div className="errorMsg">{this.state.errors.noticePeriod}</div> */}
                                    </div>  
                                  </div>
                                   <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12 formht">
                                    <div className="form-group">
                                        <label htmlFor="noticePeriod">Key Skills<span className="redFont">*</span></label>
                                        <div className="input-group skillsDiv">
                                          <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                          <input className="form-control nameSpaceUpper" id="skills" type="text" name="skills" ref="skills"  value={this.state.skills}  onChange={this.handleChange.bind(this)} required/>
                                        </div>
                                        {/* <div className="errorMsg">{this.state.errors.noticePeriod}</div> */}
                                    </div>  
                                  </div>
                                   <div className="formcontent col-lg-6 col-md-12 col-sm-12 col-xs-12 formht NOpadding">
                                     <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 uploadImage nopadding ">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 driver employee guest person nopadding ">
                                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding marginsBottom" id="hide">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 profileImageDiv" id="LogoImageUpEmployee">
                                               <label htmlFor="noticePeriod">Upload Resume<span className="redFont">*</span></label>
                                               <div className="input-group resumeDiv">
                                                <span className="input-group-addon addonColor"><i className="fa fa-crosshairs" aria-hidden="true"></i></span>
                                                    <input onChange={this.uploadforeGImg.bind(this)} id="LogoImageUp" type="file" className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12" title="" name="resume"  ref="resume" required/>
                                                  </div>
                                                </div>  

                                            {
                                              this.state.resume ?
                                                <div className="col-lg-12 col-md-2 col-sm-12 col-xs-12 nopadding CustomImageUpload">
                                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding marginsBottom" id="hide">
                                                    <label className="labelform deletelogo col-lg-12 col-md-12 col-sm-12 col-xs-12" id={this.state.resume} ref="resume" data-toggle="tooltip" title="Delete Image" name="resume" onClick={this.deleteDocSingle.bind(this)}>x</label>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 brdlogosPM" id="profilePhoto">

                                                      {
                                                        this.state.resume ?
                                                          <img src={this.state.resume} className="img-responsive profileImageDivlogoStyle2" />
                                                          :
                                                          <img src="/images/login.png" className="img-responsive profileImageDivlogoStyle2" />
                                                      }

                                                    </div>
                                                  </div>
                                                </div>
                                                :
                                                 ( this.state.gotImageprofilePhoto  ?
                                                    <div className="col-lg-12 col-md-2 col-sm-12 col-xs-12 nopadding CustomImageUpload">
                                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding marginsBottom" id="hide">
                                                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 brdlogosPM" id="profilePhoto">
                                                                <img src="/images/loading.gif" className="img-responsive profileImageDivlogoStyle2"/>
                                                          </div>
                                                      </div>
                                                </div>
                                                :
                                                null)

                                            }
                                          </div>
                                        </div>
                                      </div>
                                  </div>                           
                                  <div className="">
                                    <div className="col-lg-12">
                                      <button className="btn col-lg-2 col-lg-offset-10 lightbluebg contactformbtn buttonhover"  onClick={this.Submit.bind(this)}>Submit</button>
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



