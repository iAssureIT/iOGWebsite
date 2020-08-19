import React from 'react';
import "./Contactform.css";
import axios from 'axios';
import swal from 'sweetalert';
import $                  from 'jquery';
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
    handleChange(event){
        event.preventDefault();
        const datatype = event.target.getAttribute('data-text');
        const {name,value} = event.target;
        const formerrors = this.state.formerrors;
        console.log("datatype",datatype);
        switch (datatype){
        case 'clientName' :
           formerrors.clientName = clientnameRegex.test(value)? '' : "Please enter valid name";
           break;
        case 'clientEmail' :
          formerrors.clientEmail = emailRegex.test(value)? '' : "Please enter valid mail address";
          break;  
          default :
          break;
        }
        this.setState({
            formerrors,
            [name]:value,
            "name"         : this.refs.name.value,
            "email"        : this.refs.email.value,
            "subject"      : this.refs.subject.value,
            "message"      : this.refs.message.value,
        });
    }
   
  Submit(event){
    event.preventDefault();
    // if (this.validateForm()) {
     
      var dataArray={
            "name"         : this.refs.name.value,
            "email"        : this.refs.email.value,
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
        var adminEmail = "iassureitmail@gmail.com";
        const formValues1 = {
            "email"         : this.refs.email.value ,
            "subject"       : "Your Query/Feedback is sent successfully to www..com!",
            "message"       : "",
            "mail"          : 'Dear ' + this.state.name + ', <br/><br/>'+
                             
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
            "message"       : "HIii",
            "mail"          : 'Dear Admin, <br/>'+
                              "Following new query/feedback came from website! <br/> <br/> " +
                              "============================  <br/> <br/> " +
                              "<b>Client Name: </b>"   + this.state.name + '<br/>'+

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
      swal({
          title : "Thank You....!",
          text  : "",
          buttons: false,
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
/*    }
*/  } 

   

    closeModal(){
      window.location.reload()
    }
    VideoData(){
        return [


            {
                downstreamTitle : "iOG Corporate Brochure",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamlink  : "/images/iOG Downstream Brochure.PDF",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
                    
                
            }, 
            {
                downstreamTitle : "iOG Downstream Services_rev 1_Brochure",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamlink  : "/images/iOG Upstream Brochure.pdf",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
            }, 
            {
                downstreamTitle : "iOG Upstream Services_rev 5.4_Brochure",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamlink  : "/images/iOG Corporate Brochure.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
            },

            {
                downstreamTitle : "iOG Corporate Brochure",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamlink  : "/images/iOG Corporate Brochure.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
                    
                
            }, 
            {
                downstreamTitle : "iOG Downstream Services_rev 1_Brochure",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamlink  : "/images/iOG Downstream Services_rev 1_brochure_190615.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
            }, 
            {
                downstreamTitle : "iOG Upstream Services_rev 5.4_Brochure",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamlink  : "/images/iOG Upstream Services_rev 5.4_brochure.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
            }
        ]
    }

    render() {
        const {formerrors} = this.state;
        return (
            <div className="cuformWall col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contactHeader lightbluebg text-center">
                    <label ><b>Contact</b> Us</label>
                    <button type="button" className="close closeBtn" data-dismiss="modal" onClick={this.closeModal.bind(this)}>&times;</button>
                </div>
                <div className="contactpageform" >
                    <form className="conatctform col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30 ">
                            <p className="bt30 text-center col-lg-12 col-md-12 col-xs-12 col-sm-12 ">Connect with us for information about our services,technical support and training.</p>
                            <h4 className="text-center bt30 col-lg-12 col-md-12 col-xs-12 col-sm-12 "><b> Happy to Help</b></h4>
                        </div>
                        <div className="formcontent col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                          <label htmlFor="name">Name<span className="redFont">*</span></label>
                            <div className="input-group">
                              <span className="input-group-addon addonColor inputtextContent "><i className="fa fa-user" aria-hidden="true"></i></span>
                              <input className="form-control inputtextContent nameSpaceUpper" id="name" type="text" name="name"  ref="name" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="Enter Your Name"/>
                            </div>
                        </div>
                        <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <label htmlFor="email">Email<span className="redFont">*</span></label>
                          <div className="input-group">
                            <span className="input-group-addon addonColor inputtextContent "><i className="fa fa-envelope" aria-hidden="true"></i></span>
                            <input className="form-control inputtextContent" id="email" type="email" name="email" data-text="clientEmail" ref="email"  value={this.state.email} onChange={this.handleChange.bind(this)}   placeholder="Your@email.com" />
                          </div>
                            {this.state.formerrors.clientEmail &&(
                                    <span className="text-danger">{formerrors.clientEmail}</span>
                            )}
                        </div>
                        
                        <div className="formcontent col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <label htmlFor="subject">Subject<span className="redFont">*</span></label>
                          <div className="input-group">
                            <span className="input-group-addon addonColor inputtextContent "><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                            <input className="form-control inputtextContent nameSpaceUpper" id="subject" type="text" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this)}  ref="subject" placeholder="Enter Subject"/>
                          </div>
                        </div>
                        <div className="commentBox col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                          <label htmlFor="subject">Note<span className="redFont"></span></label>
                            <textarea className="form-control inputtextContent padd10" name="message" placeholder="How can we help?" rows="4"ref="message" value={this.state.message} onChange={this.handleChange.bind(this)} ></textarea>
                        </div>
                        
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
                          <button type="button" className="btn sbtn cancelBtn contactformBtn col-lg-2" data-dismiss="modal" onClick={this.closeModal.bind(this)} >Cancel</button>
                           {
                      this.VideoData().map((data, index)=>{
                      return (
                          <a key={index}   ><button type="button" href={data.downstreamlink} className="btn sbtn lightbluebg contactformBtn buttonhover col-lg-2 col-lg-offset-8" onClick={this.Submit.bind(this)}>Submit</button></a>
                             );
                            })
                          }   
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}