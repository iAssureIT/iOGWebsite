import React, { Component }       from 'react';
import {browserHistory} 		  from 'react-router';
import swal                       from 'sweetalert';
import $ 						  from 'jquery';
import axios 					  from 'axios';
import CKEditor 				  from "react-ckeditor-component";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/js/modal.js';

// axios.defaults.baseURL = ' http://qatprmapi.iassureit.com/';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

class EditNotificationModal extends Component{

	constructor(props){
		super(props);
		this.state = {
	    'templateType' 		: props.data ? props.data.templateType : '',
		'templateName'		: props.data ? props.data.templateName : '',
		'subject'			: props.data ? props.data.subject : '',
		'content'			: props.data ? props.data.content : '',
	   	'optionA'			: '',
	   	'messageError' 		: '',
	   	'id'                :'',
	  };

	    this.handleChange = this.handleChange.bind(this);
	    this.onChange 		= this.onChange.bind(this);
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			'templateType' 		: nextProps.data.templateType,
			'templateName'		: nextProps.data.templateName,
			'subject'			: nextProps.data.subject,
			'content'			: nextProps.data.content,
		});
	}

	handleChange(event){
	  const target = event.target;
	  const name   = target.name;
	  this.setState({
	  	[name]: event.target.value,
	  });
	}

	// componentDidMount(){

		// if ( !$("#adminSide").length>0 && !$('body').hasClass('adminSide')) {
	 //      var adminSide = document.createElement("script");
	 //      adminSide.type="text/javascript";
	 //      adminSide.src = "/js/adminSide.js";
	 //      $("body").append(adminSide);
	 //    }
	 //    $("html,body").scrollTop(0);	

	 //    $.validator.addMethod("regxsubject", function(value, element, arg){          
	 //    	return arg !== value;        
	 //    }, "Please select one subject name");


	 //    $.validator.addMethod("regxtemplateName", function(value, element, arg){          
	 //    	return arg !== value;        
	 //    }, "Please select template name");

	 //    $.validator.addMethod("regxtemplateType", function(value, element, arg){          
	 //    	return arg !== value;        
	 //    }, "Please select template type");


    
	 //    jQuery.validator.setDefaults({
	 //        debug: true,
	 //        success: "valid"
	 //    });
	 //    $("#editModal").validate({
	 //    	event : 'blur',
	 //        rules: {
	 //          subject:{              
	 //          	required:true,              
	 //          	regxsubject: "Not Selected"            
	 //          },
	 //          templateType:{              
	 //          	required:true,              
	 //          	regxtemplateType: "-- Select --"            
	 //          },
	 //          templateName:{              
	 //          	required:true,              
	 //          	regxtemplateName: "--Select Template Name--"            
	 //          },	          
	 //        }, 
	 //    });

	// }

	deleteEmailTemplate(event){
		// event.preventDefault();
		// var tempId = $(event.target).attr('id');
		// // // console.log('tempId: ',tempId);
		// Meteor.call('removeTemplate',tempId,function(error,result){
		// 	if(error){
		// 		// console.log(error);
		// 	}else{
		// 	   swal({
	 //                title: 'Deleted successfully!',
	 //                text: "",
	 //                type: 'success',
	 //                showCancelButton: false,
	 //                confirmButtonColor: '#666',
	 //                confirmButtonText: 'Ok'});
		// 	}
		// })
	}

	updateNotificationEmail(event){
		event.preventDefault();
		// var emailContent     = $('#messageContent').summernote('code');
    	// if($("#editModal").valid()){   
    	// console.log('this.state.content',this.state.content); 	
	    if(this.state.content){
	    	var editId 		 = this.props.emailNot;
			var templateType     = this.state.templateType;
			var templateName     = this.state.templateName;
			var subject          = this.state.subject;
			var cketext          = this.state.content;
			if(templateType === '-- Select --' || templateName === '--Select Template Name--'){
				swal({
					title: 'Please fill in all the required fields',
					text:"Please fill in all the required fields",
					type: 'success',
					showCancelButton: false,
					confirmButtonColor: '#666',
					confirmButtonText: 'Ok'
				});
			}else{	
				var formValues = {
					"templateType": templateType,
					"templateName": templateName,
					"content": cketext,
					"subject":subject
				}
				// console.log('formValues edit',formValues)
				
				axios.put('/api/masternotifications/put/'+editId, formValues)
				.then((response)=> {	
					// console.log('response edit',response)				
					if(templateType =='Email'){
						var emailTemplatesList = this.state.emailTemplatesList;
						emailTemplatesList.push(response.data.dataBody);
						this.setState({
							emailTemplatesList : emailTemplatesList
						});
					}
					else if(templateType =='SMS'){
						var smsTemplatesList = this.state.smsTemplatesList;
						smsTemplatesList.push(response.data.dataBody);
						this.setState({
							smsTemplatesList : smsTemplatesList
						});
					}else if(templateType =='Notification'){
						var notificationTemplatesList = this.state.notificationTemplatesList;
						notificationTemplatesList.push(response.data.dataBody);
						this.setState({
							notificationTemplatesList : notificationTemplatesList
						});
					}
					swal({
						title:'swal',
						text: response.data.message ,
						type: 'success',
						showCancelButton: false,
						confirmButtonColor: '#666',
						confirmButtonText: 'Ok'
					});
					$('#createNotifyModal').hide();
					$('.modal-backdrop').remove();
					// console.log('response --==',response);
				})
				.catch(function (error) {
					swal({
						text: 'error',
						type: 'success',
						showCancelButton: false,
						confirmButtonColor: '#666',
						confirmButtonText: 'Ok'
					});
				// console.log('error============',error);
				  if(error.message === "Request failed with status code 401")
		              {
		                   swal("Your session is expired! Please login again.","", "error");
		                   // this.props.history.push("/");
		              }
				})
				.finally(function () {
				// always executed
				});
			}
		}else{
			this.setState({
				contentError: 'This field is required.',
			});
		}
    	// }
	}
	selectType(event){
		event.preventDefault();
		const target = event.target;
	  const name   = target.name;
	  this.setState({
	  	[name]: event.target.value,
	  });
		// if(this.refs.templateType.value  == 'Notification' || this.refs.templateType.value  == 'SMS' ){
		// 	$('.subjectRow').css({'display':'none'});
		// }else if(this.refs.templateType.value  == 'Email'){
		// 	$('.subjectRow').css({'display':'block'});
		// }
	}
	
	updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }
    onChange(evt){
      var newContent = evt.editor.getData();
      // console.log(newContent);
      this.setState({
        content: newContent
      },()=>{
      	if(this.state.content){
      		this.setState({
      			messageError : ''
      		});
      	}else{
      		this.setState({
      			messageError : 'This field is required'
      		});
      	}
      });
    }


	render() {
		// console.log('emailNot',this.props.emailNot)
		// console.log('data',this.props.data)
		if(this.props.emailNot){
	        return (
					<div className="modal fade modalHide" id={"editNotifyModal-"+this.props.emailNot} role="dialog">
					  	<div className="modal-dialog modal-lg" role="document">
					    	<div className="modal-content modalContent col-lg-12 NOpadding">
					      		<div className="modal-header adminModal-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
					        		<h5 className="h5Title col-lg-12 col-md-12 col-sm-12 col-xs-12" id="exampleModalLabel">Edit Template</h5>
					        		<div className="adminCloseCircleDiv pull-right  col-lg-1 col-md-1 col-sm-1 col-xs-1 NOpadding-left NOpadding-right">
								        <button type="button" className="adminCloseButton" data-dismiss="modal" aria-label="Close">
								          <span aria-hidden="true">&times;</span>
								        </button>
							        </div>
					      		</div>

					     		<div className="modal-body adminModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
							        <form className="newTemplateForm" id="editModal" >
							         	<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 forgtTextInp">
											<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 NOpadding-left">
												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding-left">
													<div className="form-group">
													 	<label className="label-category">Template Type <span className="astrick">*</span></label>     						
												        	<select className="form-control templateType" name="templateType" id="templateType" onChange={this.selectType.bind(this)} value={this.state.templateType}>
													      	<option> -- Select --	</option>
															<option> Email 			</option>
															<option> Notification 	</option>
															<option> SMS 			</option>
												      	</select> 
													</div>	
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rowPadding">
												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
													<div className="form-group">
													 	<label className=" label-category">Template Name <span className="astrick">*</span></label>     						
												       	<select name="templateName" id="templateName" value={this.state.templateName} onChange={this.handleChange} className="form-control templateType " required>
													  	  <option value="Not Selected">--Select Template Name--</option>
														  <option value="Admin-Signup">					Admin-Signup 				</option>
														  <option value="Admin-Purchase Subscription">	Admin-Purchase Subscription	</option>
														  <option value="Admin-Check-in">				Admin-Check-in				</option>
														  <option value="Admin-Check-out">				Admin-Check-out				</option>
														  <option value="Admin-Vendor Profile Changes">	Admin-Vendor Profile Changes</option>
														  <option value="Admin-Menu Order">				Admin-Menu Order			</option>
														  <option value="Vendor-Check-in">				Vendor-Check-in				</option>
														  <option value="Vendor-Check-out">				Vendor-Check-out			</option>
														  <option value="Vendor-Vendor Profile Changes">Vendor-Vendor Profile Changes</option>
														  <option value="Vendor-Menu Order">			Vendor-Menu Order			</option>
														  <option value="User-Signup">					User-Signup 				</option>
														  <option value="User-Purchase Subscription">	User-Purchase Subscription	</option>
														  <option value="User-Check-in">				User-Check-in				</option>
														  <option value="User-Check-out">				User-Check-out				</option>
													</select>
													</div>	
												</div>
											</div>
										</div>
										{this.state.templateType!='Notification' && this.state.templateType!='SMS' ?
											<div className="row rowPadding subjectRow col-lg-12 col-md-12 col-xs-12 col-sm-12">
												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
													<div className="form-group">
													 <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Subject <span className="astrick">*</span></label>     						
												        <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid" required/>
													</div>	
												</div>
											</div>
											:
											null
										}
										
										<div className="row rowPadding col-lg-12 col-md-12 col-xs-12 col-sm-12">
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
												 <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Message <span className="astrick">*</span></label> 
												 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">  
												 	<CKEditor activeClass="p15" id="editor"  className="templateName" content={this.state.content} events={{"change": this.onChange}}/>
												 </div> 
												 			
												</div>	
												<label className="redFont">{this.state.messageError}</label>			
											</div>
										</div>
									</form>
					      		</div>
							    <div className="modal-footer adminModal-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div>
										<button type="submit"  className="btn pull-right col-lg-3 col-md-3 col-sm-6 col-xs-12 btnUpdate" id={this.props.emailNot} onClick={this.updateNotificationEmail.bind(this)}>Update Template</button>
							   		</div>
							   	</div>
					   		</div>
					  	</div>
					</div>
		    );
		}else{
			return (<div></div>);
		}
	} 

}
export default EditNotificationModal;