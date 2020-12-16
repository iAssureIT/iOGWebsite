import React, {Component} from 'react';
import $                  from 'jquery';
import axios from 'axios';
import {Route, withRouter,Redirect} from 'react-router-dom';
import swal from 'sweetalert';

// import $ from "jquery";
// import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/js/modal.js';
import './Resourcedownload.css';
import BrochureDownladForm       from '../../allBlocks/BrochureDownladForm/BrochureDownladForm.js';

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


export default class Resourcedownload extends React.Component {

   constructor(props) {
    super(props);
        this.state={
          "id"            :"",
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

  VideoData(){
        return [


            {
                downstreamTitle : "iOG Corporate Brochure",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamlink  : "https://iogiassureit.s3.amazonaws.com/iOG/iOGCorporateBrochure.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
                    
                
            }, 
            {
                downstreamTitle : "iOG Downstream Services_rev 1_Brochure",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamlink  : "https://iogiassureit.s3.amazonaws.com/iOG/iOGDownstreamBrochure.PDF",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
            }, 
            {
                downstreamTitle : "iOG Upstream Services_rev 5.4_Brochure",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamlink  : "https://iogiassureit.s3.amazonaws.com/iOG/iOGUpstreamBrochure.pdf",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
            },

          /*  {
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
            }*/
        ]
    }

    
    
    modalClickEvent1(event){
      var id = event.currentTarget.id;
      console.log("brochure id",id);
      this.setState({
        id:id
      })
    
    console.log("click event")
    $('#modalId1').addClass('in');
    $('#modalId1').css('display','block');
  }
  componentDidMount() {
      
    $.validator.addMethod("regexifsc", function (value, element, regexpr) {
      return regexpr.test(value);
    }, "Special Characters Not Allowed.");


    $.validator.addMethod("regexifsc1", function (value, element, regexpr) {
      return regexpr.test(value);
    }, "Enter valid e-mail");



    $("#resourceform").validate({
    rules: {
      userName: {
        required: true,
      },
      userName: {
        required: true,
        regexifsc: /^[A-Za-z0-9 ]+$/,
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
            "name"         : this.refs.userName.value,
            "email"        : this.refs.email.value,
            "subject"      : this.refs.subject.value,
            "message"      : this.refs.message.value,
        });
    }
   
  Submit(event,url){
    event.preventDefault();
      if($("#resourceform").valid()){
     // const url = window.URL.createObjectURL(blob);
    

     /*return (
        <div>
           <a className="" href={this.state.id} title="Click to Download" download></a>
        </div>
      );*/
  

    // if (this.validateForm()) {
     
      var dataArray={
            "userName"         : this.refs.userName.value,
            "email"            : this.refs.email.value,
            "subject"          : this.refs.subject.value,
            "message"          : this.refs.message.value,
     
    }
    this.setState({
      dataArray:dataArray
    })
    console.log("dataArray======>",dataArray);
      let fields = {};
      fields["name"]      = "";
      fields["email"]   = "";
      fields["subject"]   = "";
      fields["message"]       = "";
      
/*      fields["enquiry"]       = "";
*/
        // var adminEmail = this.getAdminEmail();  //Get email id from company settings. Write API for that.
        var adminEmail = "iogdevelopers@gmail.com";
        /* var adminEmail = "iassureitmail@gmail.com";*/
        const formValues1 = {
            "email"         : [this.refs.email.value],
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
        console.log("notification",formValues1);
        axios
        .post('/send-email',formValues1)
        .then((res)=>{
            if(res.status === 200){
                swal("Thank you for contacting us. We will get back to you shortly.")
                }
                const a = document.createElement('a');
    a.style.display = 'none';
    a.href = this.state.id;
    // the filename you want
    a.download = this.state.id;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    alert('your file has downloaded!');
        })
        .catch((error)=>{
          console.log("error = ", error);
         
        })
        const formValues2 = {
            "email"         : [adminEmail,
                               'info@iogsolutions.com'
                               ] ,
            "subject"       : "New query/feedback arrived from Website!",
            "message"       : "Brochure Downloaded By User",
            "mail"          : 'Dear Admin, <br/>'+
                              this.refs.userName.value+" Has downloaded Brochure from Website Resources! <br/> <br/> " +
                              "============================  <br/> <br/> " +
                              // "<b>Client Name: </b>"   + this.state.name + '<br/>'+

                              "<b>Client Email: </b>"  + this.state.email + '<br/><br/>'+

                              "<pre> " + this.state.message + "</pre>" +
                              "<br/><br/> ============================ " +
                              "<br/><br/> This is a system generated email! " ,
        };
        console.log("notification",formValues2);
     
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
         axios.post("/api/resourcedownload/post", dataArray)
        .then((response)=>{
          console.log("response",response);
        //   swal({
        //   title : "Thank You....!",
        //   text  : "",
        //   buttons: false,
        // });

         /* swal({
            title : response.data.message,
            text  : response.data.message
          });*/
        })
     /* swal({
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
/*    }

*/  } 
}

   

    closeThisModal(){
      $('#modalId1').css('display','none');
    }

   

    render(){
       const {formerrors} = this.state;
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"style={{marginBottom:"50px"}}>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  contentheadernew text-center">
                    <hr/>
                     <h2 style={{color:"#333"}}><b>Downloads</b></h2>
                    </div>

                 <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Mobile_leftPadd mobileright_padd">
                   <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Mobile_leftPadd mobileright_padd">
                     <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Mobile_leftPadd mobileright_padd">
                       <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                        <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       {
                        this.VideoData().map((data, index)=>{
                        return (
                           
                         /* <div key={index} className="col-lg-4  col-md-4 col-sm-12 col-xs-12 mt100" data-toggle="modal" data-target="#modalId" onClick={this.modalClickEvent.bind(this)}>
                            <a className="videocard" href={data.downstreamlink} title="Click to Download" >
                              <h3>{data.downstreamTitle}</h3>
                              <div className="go-corner" href={data.downstreamlink}>
                                <div className="go-arrow">
                                  →
                                </div>
                              </div>
                            </a>
                          </div> */

                         <div key={index} className="col-lg-4  col-md-6 col-sm-12 col-xs-12 mt100" data-toggle="modal" id={data.downstreamlink} data-target="#modalId1" onClick={this.modalClickEvent1.bind(this)}>
                            <div className="videocard" title="Click to Download" download>
                              <h3>{data.downstreamTitle}</h3>
                              <div className="go-corner" >
                                <div className="go-arrow">
                                  →
                                </div>
                              </div>
                            </div>
                          </div>
                         );
                      })
                    }   
                      </div>
                    </div>
                   </div>
                  </div>
                </div> 
                  <div className="row"> 
           
                    <div className="modal fade" id="modalId1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-lg " role="document">
                        <div className="modal-content ContactmodalContent_brochure col-lg-10 col-lg-offset-1 col-md-8 col-md-offset-2 col-sm-12 col-xs-12   ">
            {/*              <button type="button" className="close closeButton" data-dismiss="modal">&times;</button>*/}
                          <div className="modal-body contactModalBody row ">
                           <div className="row">
                             <div className="cuformWall col-sm-12 col-xs-12">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contactHeader_brochure lightbluebg text-center">
                                  <label ><b>Get Your Copy Now !</b></label>
                                  <button type="button" className="close closeBtn" data-dismiss="modal" onClick={this.closeThisModal.bind(this)}>&times;</button>
                              </div>
                                <div className="contactpageform" >
                                    <form className="conatctform col-lg-12 col-md-12 col-sm-12 col-xs-12" id="resourceform">
                                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30 ">
                                            <p className="bt30 text-center col-lg-12 col-md-12 col-xs-12 col-sm-12 ">Connect with us for information about our services,technical support and training.</p>
                                            <h4 className="text-center bt30 col-lg-12 col-md-12 col-xs-12 col-sm-12 "><b> Happy to Help</b></h4>
                                        </div>
                                        <div className="formcontent_new col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                                          <label htmlFor="name">Name<span className="redFont">*</span></label>
                                            <div className="input-group">
                                              <span className="input-group-addon addonColor inputtextContent "><i className="fa fa-user" aria-hidden="true"></i></span>
                                              <input className="form-control inputtextContent nameSpaceUpper" id="userName" type="text" name="userName"  ref="userName" value={this.state.userName} onChange={this.handleChange.bind(this)} placeholder="Enter Your Name"/>
                                            </div>
                                        </div>
                                        <div className="formcontent_new col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                          <label htmlFor="email">Email<span className="redFont">*</span></label>
                                          <div className="input-group">
                                            <span className="input-group-addon addonColor inputtextContent "><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                            <input className="form-control inputtextContent" id="email" type="email" name="email" data-text="clientEmail" ref="email"  value={this.state.email} onChange={this.handleChange.bind(this)}   placeholder="Your@email.com" />
                                          </div>
                                            {this.state.formerrors.clientEmail &&(
                                                    <span className="text-danger">{formerrors.clientEmail}</span>
                                            )}
                                        </div>
                                        
                                        <div className="formcontent_new col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                                          <button type="button" className="btn sbtn cancelBtn brochureformBtn col-lg-2" data-dismiss="modal" onClick={this.closeThisModal.bind(this)} >Cancel</button>
                                          <button type="button" className="btn sbtn lightbluebg brochureformBtn buttonhover col-lg-2 col-lg-offset-8" onClick={this.Submit.bind(this)}>Submit</button>      
                                        </div>
                                            </form>
                                        </div>
                                    </div>                            
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