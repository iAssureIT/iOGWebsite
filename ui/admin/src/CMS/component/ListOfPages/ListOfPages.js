import React from 'react';
import {Route, withRouter} from 'react-router-dom';

import axios from 'axios';
import swal from 'sweetalert';

import './ListOfPages.css';

class ListOfPages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			UrlId 				:  "",
			
			"pageUrl"			: "",
			"pageTitle"			: "",
			"pageType"			: "",
			"componentName"		: "",

			"designPattern"		: "",
			"pageHeadKeyWords"	: "",
			"pageHeadDescription":"",
			"pageHeadAuther"	:"",
			"ListOfPagest"		:"",

			"buttonText"		:"Submit",

		};
	}

handleChange(event){
		event.preventDefault();
		this.setState({
       		
			/*"cmspageDescription" 			: this.refs.cmspageDescription.value,*/
			"pageTitle"						: this.refs.pageTitle.value,
			"pageUrl"						: this.refs.pageTitle.value.toLowerCase().split(" ").join("-"),
			
			"pageHeadKeyWords"				: this.refs.pageHeadKeyWords.value,
			"pageHeadDescription"			: this.refs.pageHeadDescription.value,
			"pageHeadAuther"				: this.refs.pageHeadAuther.value,
			});
}
componentDidMount(){
	this.getListOfPages();

}
getListOfPages(){
	/*/get/list*/
	axios
			.get('/api/pages/get/list')
			.then((response)=>{        
			      	this.setState({
		      			ListOfPages:response.data
		      		});
				})
		  	.catch(function (error) {
		    // handle error
		    	console.log(error);
		  	});
}
    
deletePage(event){
	event.preventDefault();
	var URL= event.target.id;
	// console.log("id delet", URL);
	 swal({
          title: "Are you sure you want to delete this Page ?",
          text: "Once deleted, you will not be able to recover this Page!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((success) => {
            if (success) {
            	axios
			    .delete("/api/pages/delete/"+URL)
			    .then((response)=>{
			     	this.getListOfPages();
			       swal("Your Page is deleted!");
			       // window.location.reload();
			    })
			    .catch((error)=>{
			       console.log("error = ", error);              
			    });
            
              
            } else {
            swal("Your Blog is safe!");
          }
        }); 
}	
editPage(event){
	event.preventDefault();
	var URL= event.target.id;
    axios
      .get("/api/pages/get/"+URL)
      .then((response)=>{
        console.log("=selected page data==>",response.data);
        this.setState({
        	"pageTitle"						: response.data.pageTitle,
			"pageUrl"						: response.data.pageURL,
			
			"pageHeadKeyWords"				: response.data.pageHead.pageAuthor,
			"pageHeadDescription"			: response.data.pageHead.pageDescription,
			"pageHeadAuther"				: response.data.pageHead.pageWords,
			"UrlId"							: URL,
         
        });
      })
      .catch((error)=>{
         console.log("error = ", error);              
      });

}
updatePageData(){
 const formValues = {
   
				"pageTitle"				: this.refs.pageTitle.value,
				"pageURL"				: this.refs.pageUrl.value,
				"pageWords"				: this.refs.pageHeadKeyWords.value,
				"pageDescription"		: this.refs.pageHeadDescription.value,
				"pageAuthor"			: this.refs.pageHeadAuther.value,
   };
    axios
          .patch('/api/pages/patch/'+this.state.UrlId,formValues)
          .then((res)=>{
                      swal(" Your page update successfully ");
                       this.props.history.push("/viewpage2/"+this.state.UrlId);

                  })
                  .catch((error)=>{
                    console.log("error = ", error);
                  });

}
submitData(){
	var AttachmentValues = {    
					  	// "componentName"			: this.state.pageDesigns ? this.state.pageDesigns.componentName : null,
     					// "pagediscription" 		: this.refs.cmspageDescription.value,
						"pageTitle"				: this.refs.pageTitle.value,
						"pageURL"				: this.refs.pageUrl.value,
						"pageWords"				: this.refs.pageHeadKeyWords.value,
						"pageDescription"		: this.refs.pageHeadDescription.value,
						"pageAuthor"			: this.refs.pageHeadAuther.value,
						// "pageimage"				: this.state.imgPath ? this.state.imgPath : null,
      					// "pagebackgroundimage"			: this.state.backImgPath ? this.state.backImgPath : null,
      
   		}
   		console.log("AttachmentValues",AttachmentValues);
   		axios
			.post('/api/pages/post',AttachmentValues)
		  	.then((response)=>{
		    // handle success
		   		console.log("response",response.data);
		    	this.props.history.push("/viewpage2/");/*+response.data.pageURL*/
		  	})
		  	.catch(function (error) {
		    // handle error
		    	console.log(error);
		  	});

   		// console.log("AttachmentValues =>",AttachmentValues);

}
	render() {
		// console.log("ListOfPages",this.state.ListOfPages)
		return (
			<div className="box-body1">
				<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
					<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 listHeading">
						<h2>List Of Pages</h2>
					</div>
					<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
						<div className="panel-group" id="accordion">
						  	<div className="panel panel-default">
							    <div className="panel-heading">
							    	
							        	<h4 className="panel-title">
								        List Of Pages
								       
								        <a className="pull-right" data-toggle="collapse" data-parent="#accordion" href="#collapse1">
								        + Create New Page</a>
							        	</h4>
							       
							    </div>
							    <div id="collapse1" className="panel-collapse collapse">
							      	<div className="panel-body">
							      		<div className="row inputrow">
			                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                    <div className="form-group">
			                                    	<label className="label-category">Page Title<span className="astrick"> </span></label>
			                                        <input type="text" ref="pageTitle" value={this.state.pageTitle} id="basicPageName" name="basicPageName"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)} />
			                                    </div>
			                                </div>
			                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                    <div className="form-group">
			                                    	<label className="label-category">Page URL<span className="astrick"></span></label>
			                                        <input type="text" ref="pageUrl" id="basicPageName" value={this.state.pageUrl} name="basicPageName"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)} disabled/>
			                                    </div>
			                                </div>
			                            </div>
				                        <div className="headContent">
				                        	<form className="newTemplateForm">
				                        		<div className="row inputrow">
					                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					                                  <div className="form-group">
					                                   <label className="label-category">KeyWords<span className="astrick"></span></label>
					                                        <input type="text" ref="pageHeadKeyWords" value={this.state.pageHeadKeyWords} id="pageHeadKeyWords" name="pageHeadKeyWords"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)} />
					                                  </div>
					                                </div>
				                            	</div>
				                            	<div className="row inputrow">
					                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					                                  <div className="form-group">
					                                   <label className="label-category">Description<span className="astrick"></span></label>
					                                        <textarea ref="pageHeadDescription" value={this.state.pageHeadDescription} id="pageHeadDescription" name="pageHeadDescription"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" rows="2" onChange={this.handleChange.bind(this)} />
					                                  </div>
					                                </div>
					                                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					                                  <div className="form-group">
					                                   <label className="label-category">Author<span className="astrick"></span></label>
					                                        <input type="text" ref="pageHeadAuther" id="pageHeadAuther" value={this.state.pageHeadAuther} name="pageHeadAuther"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)} />
					                                  </div>
					                                </div>
				                            	</div>
				                        	</form>
				                        </div>
				                        <div className="savetemp col-lg-12 col-md-12 col-sm-12 col-xs-12">
				                            { this.state.UrlId
				                            	?
			                           				<button  type="submit" className="col-lg-2 col-md-3 col-sm-6 col-xs-12 btn btn-primary pull-right sendtxtmsgbtn" onClick={() => this.updatePageData()} >Update</button>

				                            	:
			                            			<button  type="submit" className="col-lg-2 col-md-3 col-sm-6 col-xs-12 btn btn-primary pull-right sendtxtmsgbtn" onClick={() => this.submitData()} >Submit</button>
				                            }
				                        </div>
							        </div>
							    </div>
							</div>  
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
					{/*	<h2 className="text-center">List Of Pages</h2>*/}
						<table className="table">
						  	<thead className="thead-dark">
						    	<tr className="clrwht">
							      <th scope="col">No.</th>
							      <th scope="col">Page Title</th>
							      <th scope="col">Page Url</th>
							      <th scope="col">Action</th>
						    	</tr>
						  	</thead>
						    <tbody>
						    {
						    	this.state.ListOfPages 
									?
									this.state.ListOfPages && this.state.ListOfPages.length>0?
										this.state.ListOfPages.map((result, index)=>{
											// console.log('result', result);
											return(
											    <tr key={index}>
											      <td>{index+1}</td>
											      <td>{result.pageTitle}</td>
											      <td>{result.pageURL}</td>
											      <td><i className="fa fa-edit deletIcon" id={result.pageURL} data-toggle="collapse" data-parent="#accordion" href="#collapse1" onClick={this.editPage.bind(this)}></i>&nbsp;&nbsp;&nbsp;&nbsp;
											      		<i className="fa fa-trash deletIcon" id={result.pageURL} onClick={this.deletePage.bind(this)}></i>&nbsp;&nbsp;&nbsp;&nbsp;
											      		{/*<i className="fa fa-eye"></i>*/}
											      </td>
											    </tr>
										    	)
											})
										:
										null
							    	:
									null
							}   
						    </tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(ListOfPages);