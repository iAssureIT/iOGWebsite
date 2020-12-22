import React from 'react';
import "./Contactform.css";
import axios from 'axios';
import 'jquery-validation';
import swal from 'sweetalert';
import $                  from 'jquery';
import jQuery from 'jquery';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';

const formValid = formerrors=>{
  console.log("formerrors",formerrors);
  let valid = true;
  Object.values(formerrors).forEach(val=>{
    val.length>0 && (valid = false);
  })
  return valid;
}

 
const clientnameRegex = RegExp(/^[A-za-z']+( [A-Za-z']+)*$/);
const emailRegex = RegExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export default class ContactUsForm extends React.Component {

    constructor(props) {
    super(props);
        this.state={
          "name"          : "",
          "email"         : "",
          "subject"       : "",
          "message"       : "",
          "formerrors"    :{
                            clientName  : " ",
                            clientEmail : " ",       
                          },
          };
        this.handleChange = this.handleChange.bind(this);
    }
    /*modalClickEvent(){
    
    
    $('#modalId').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }*/


  componentDidMount() {
      
    $.validator.addMethod("regexifsc", function (value, element, regexpr) {
      return regexpr.test(value);
    }, "Special Characters Not Allowed.");


    $.validator.addMethod("regexifsc1", function (value, element, regexpr) {
      return regexpr.test(value);
    }, "Enter valid e-mail");



    $("#contactmodalId").validate({
    rules: {
      userName: {
        required: true,
      },
      userName: {
        required: true,
        regexifsc: /^[A-Za-z0-9 ]+$/,
      },
      contact: {
        required: true,
        regexifsc: /^[0-9 ]+$/,
      },
       email: {
        required: true,
        regexifsc1:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
      },
       subject: {
        required: true,
       
      },
     
      }
    });
    }

    handleChange(event){
       const {name,value} = event.target;
          this.setState({ 
            [name]:value
       });
       
    }



   Submit(event){
    event.preventDefault();
    console.log("hiiiii");
    if($("#contactmodalId").valid()){
     
      var dataArray={
            "userName"     : this.refs.userName.value,
            "email"        : this.refs.email.value,
            "contactNumber": this.refs.contact.value,
            "subject"      : this.refs.subject.value,
            "message"      : this.refs.message.value,
     
    }
    console.log("dataArray======>",dataArray);
      let fields = {};
      fields["name"]      = "";
      fields["email"]   = "";
      fields["subject"]   = "";
      fields["message"]       = "";
/*      fields["enquiry"]       = "";
*/
        // var adminEmail = this.getAdminEmail();  //Get email id from company settings. Write API for that.
        // var adminEmail = "iassureitmail@gmail.com";
         var adminEmail = "iogdevelopers@gmail.com";
        const formValues1 = {
            // "cc"            :"kkhandalekaruna@gmail.com",
            "email"         :[this.refs.email.value],
            "subject"       : "Your Query/Feedback is sent successfully to www..com!",
            "message"       : "",
            "mail"          : 'Dear ' + this.refs.userName.value + ', <br/><br/>'+
                             
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
            "email"         : [adminEmail,
                               'info@iogsolutions.com'
                               ] ,
            "subject"       : "New query/feedback arrived from Website!",
            "message"       : "",
            "mail"          : 'Dear Admin, <br/>'+
                              "Following new query/feedback came from website! <br/> <br/> " +
                              "-----------------------------------------------------------------  <br/> <br/> " +
                              "<b>Client Name: </b>"   + this.refs.userName.value + '<br/>'+
                              "<b>Contact Number: </b>"   + this.refs.contact.value + '<br/>'+
                              "<b>Client Email: </b>"  + this.state.email + '<br/>'+
                              "<b>Subject: </b>"  +  this.refs.subject.value+ '<br/><br/>'+

                              // "<b>Designation: </b>"  + this.state.designation + '<br/><br/>'+

                              

                              // "<pre> " + this.state.message + "</pre>" +
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
         axios.post("/api/contactModal/post", dataArray)
        .then((response)=>{
          console.log("response",response);
          swal({
          title : "Thank You....!",
          text  : "",
          buttons: false,
        });

         /* swal({
            title : response.data.message,
            text  : response.data.message
          });*/
        })
      
      this.setState({
        "userName"         : "",
        "companyName"      : "",
        "contact"      : "",
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




   
   

    closeThisModal(){
       $('#modalId').css('display','none');
       $('.modal-backdrop.in').css('display','none');

    }

    render() {
        const {formerrors} = this.state;
        return (
            <div className="cuformWall col-sm-12 col-xs-12"style={{zIndex:"1"}}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contactHeader lightbluebg text-center" >
                    <label style={{color:"#fff"}} ><b>Contact</b> Us</label>
                    <button type="button" className="close closeBtn" data-dismiss="modal" onClick={this.closeThisModal.bind(this)}>&times;</button>
                </div>
                <div className="contactpageform" >
                    <form className="conatctform col-lg-12 col-md-12 col-sm-12 col-xs-12" id="contactmodalId">
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30 ">
                            <p className="bt30 text-center col-lg-12 col-md-12 col-xs-12 col-sm-12 ">Connect with us for information about our services,technical support and training.</p>
                            <h4 className="text-center bt30 col-lg-12 col-md-12 col-xs-12 col-sm-12 "><b></b></h4>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12"> 
                         <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30 ">
                          <div className="formcontent col-lg-6 col-md-6 col-xs-6 col-sm-6 ">
                            <label htmlFor="name">Name<span className="astrick">*</span></label>
                              {/*<div className="input-group">
                                <span className="input-group-addon addonColor inputtextContent "><i className="fa fa-user" aria-hidden="true"></i></span>*/}
                                <input className="form-control errorinputText inputtextContent nameSpaceUpper" id="userName" type="text" ref="userName" value={this.state.userName} onChange={this.handleChange.bind(this)} placeholder="Enter Your Name"  required />
                             {/* </div>*/}
                          </div>
                          <div className="formcontent col-lg-6 col-md-6 col-xs-6 col-sm-6 ">
                            <label htmlFor="name">Contact Number<span className="astrick">*</span></label>
                              {/*<div className="input-group">
                                <span className="input-group-addon addonColor inputtextContent "><i className="fa fa-user" aria-hidden="true"></i></span>*/}
                                <input className="form-control errorinputText inputtextContent nameSpaceUpper" id="contact" type="text" ref="contact" maxLength={10} onKeyDown={this.isNumberKey.bind(this)} value={this.state.contact} onChange={this.handleChange.bind(this)} placeholder="Enter Your Phone Number"  required />
                             {/* </div>*/}
                          </div>
                         </div>  
                         <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30 "> 
                          <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label htmlFor="email">Email<span className="astrick">*</span></label>
                           {/* <div className="input-group">
                              <span className="input-group-addon addonColor inputtextContent "><i className="fa fa-envelope" aria-hidden="true"></i></span>*/}
                              <input className="form-control errorinputText inputtextContent" id="email" type="email" name="email" data-text="clientEmail" ref="email"  value={this.state.email} onChange={this.handleChange.bind(this)}   placeholder="Your@email.com" required />
                         {/*   </div>
                             */}
                          </div>
                          
                          <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label htmlFor="subject">Subject<span className="astrick">*</span></label>
                            {/*<div className="input-group">
                              <span className="input-group-addon addonColor inputtextContent "><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>*/}
                              <input className="form-control errorinputText inputtextContent nameSpaceUpper" id="subject" type="text" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this)}  ref="subject" placeholder="Enter Subject" required/>
                         {/*   </div>*/}
                          </div>
                        </div> 
                         <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30 ">   
                          <div className="commentBox col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                            <label htmlFor="subject">Note<span className="redFont"></span></label>
                              <textarea className="form-control inputtextContent padd10" name="message" placeholder="How can we help?" rows="4"ref="message" value={this.state.message} onChange={this.handleChange.bind(this)} ></textarea>
                          </div>
                        </div>
                       </div> 
                      <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
                       <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
                          <button type="button" className="btn sbtn cancelBtn contactformBtn col-lg-2" data-dismiss="modal" onClick={this.closeThisModal.bind(this)} >Cancel</button>
                          <button type="button" className="btn sbtn lightbluebg contactformBtn buttonhover col-lg-2 col-lg-offset-8 landscape_btn" onClick={this.Submit.bind(this)}>Submit</button>
                         </div>
                       </div>
                      </div> 
                    </form>
                </div>
            </div>
        );
    }
}