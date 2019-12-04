import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';
import './cmsblock.css';
import axios from 'axios';
import S3FileUpload from 'react-s3';

import swal from 'sweetalert';


class CmsBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
     		uploadedImage       : [],
      		imgbPath          	: {},
      		rbPath          	: {},
      		uploadedbackImage   : [],
      		rBImage 			: "",
      		imgbackPath         : {},
			basicBlockTitle 	: "",
			basicBlocksubTitle  : "",
			basicBlockBody		: "",
			componentName		: "",
			blockType			: "",
			buttonText		    : "Submit",
			blockContent   		: "",
			repBlockContent   		: "",
			typeOfBlock			: "",
			block_id			: "",
			bgImage 			: "",
			fgImage 			: "",
			bgVideo 			: "",
			fgVideo 			: "",
			config 				: "",
			foreGImage 			: "",
			backgroundImage  	: "",
			groupRepetedBlocks 	: false,
			repGBlockTitle 		: "",
			repGBlocksubTitle 	: "",
			repetedLink			: "",
			repetedGroup 		: []

		
			
		};
		 this.onEditorChange = this.onEditorChange.bind( this );
    }

      onEditorChange( evt ) {
      this.setState( {
          blockContent: evt.editor.getData()
      } );
  }
onEditorChangeINGroupBlock( evt ) {
      this.setState( {
          repBlockContent: evt.editor.getData()
      } );
  }
handleChange(event){
		event.preventDefault();
    	this.setState({
       		"basicBlockTitle"    : this.refs.basicBlockTitle.value,
			"basicBlocksubTitle" : this.refs.basicBlocksubTitle.value,
			"typeOfBlock"		 : this.refs.typeOfBlock.value,
			"componentName"		 : this.refs.componentName.value,
			
			 

			// "basicBlockBody"	 : this.refs.basicBlockBody.value,
			/*"componentName"		 : this.props.blockDetailsID ? this.props.blockDetailsID.componentName : null, 
			"blockType"			 : this.props.blockDetailsID ? this.props.blockDetailsID.blockType : null,*/ 
			
    	});
	}
handle1Change(event){
		event.preventDefault();
    	this.setState({
     
			"repGBlockTitle"	 : this.refs.repGBlockTitle.value,
			"repGBlocksubTitle"	 : this.refs.repGBlocksubTitle.value,
			"repetedLink"		 : this.refs.repetedLink.value,
			 

			// "basicBlockBody"	 : this.refs.basicBlockBody.value,
			/*"componentName"		 : this.props.blockDetailsID ? this.props.blockDetailsID.componentName : null, 
			"blockType"			 : this.props.blockDetailsID ? this.props.blockDetailsID.blockType : null,*/ 
			
    	});
	}

	
	submitRepBlockInfo(event){
		event.preventDefault();
		var ArrayRepetedGroup = this.state.repetedGroup;
		var formValues = {
	
		Title 			: this.state.repGBlockTitle,
		SubTitle 		: this.state.repGBlocksubTitle,
		Link 			: this.state.repetedLink,
		Description 	: this.state.repBlockContent,
		Image 			: this.state.rbPath.path,		
		};
                    swal("Thank you.Your Block is Created.");
                    ArrayRepetedGroup.push(formValues);
                    this.setState({
			            repetedGroup : ArrayRepetedGroup,
			            groupRepetedBlocks : false
			          },()=>{
			          	console.log("formValues=blocks>",this.state.repetedGroup);
			          })
						this.setState({
							repGBlockTitle : "",
							repGBlocksubTitle: "",
							repetedLink : "",
							repBlockContent: "",
							rbPath : "",
						}) 
                    // console.log("array=>",this.state.repetedGroup);
		/*this.setState({
            repetedGroup : formValues
          },()=>{
          	console.log("formValues=blocks>",this.state.repetedGroup);
          })*/
		
		/*axios
			.post('/api/blocks/post',formValues)
		  	.then(function (response) {
		    // handle success
		    	// console.log(response);
		    	window.location.reload();
		  	})
		  	.catch(function (error) {
		    // handle error
		    	console.log(error);
		  	});
   		console.log("formValues =>",formValues);*/
	}
	submitcmsBlockInfo(event){
		event.preventDefault();
		
		var formValues = {
		blockTitle 			: this.state.basicBlockTitle,
		blockSubTitle 		: this.state.basicBlocksubTitle,
		blockDescription 	: this.state.blockContent,
		blockComponentName  : this.state.componentName,
		blockType 			: this.state.blockType,
		fgImage 			: this.state.fgImage,
		bgImage 			: this.state.bgImage,
		repeatedBlocks 		: this.state.repetedGroup,
				
		};
		console.log("formValues=blocks>",formValues);
		axios
			.post('/api/blocks/post',formValues)
		  	.then(function (response) {
		    // handle success
		    	// console.log(response);
		    	swal("Thank you. Your Block is Created.");
		    	 window.location.reload();
		  	})
		  	.catch(function (error) {
		    // handle error
		    	console.log(error);
		  	});
   		console.log("formValues =>",formValues);	
	}

componentDidMount(){		  
  axios
        .get('/api/projectsettings/get/S3')
        .then((response)=>{
          
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
        })

}
componentWillReceiveProps(nextProps){
	var block_id= nextProps.Blockid;
    axios
      .get("/api/blocks/get/"+block_id)
      .then((response)=>{
        // console.log("componentWillReceiveProps===>",response.data);
        this.setState({
			basicBlockTitle 	: response.data.blockTitle,
			basicBlocksubTitle  : response.data.blockSubTitle,
			// basicBlockBody		: response.data.,
			componentName		: response.data.blockComponentName,
			blockType			: response.data.blockType,
			fgImage 			: response.data.fgImage,
			bgImage 			: response.data.bgImage,
			bgVideo 			: response.data.bgVideo,
			fgVideo				: response.data.fgVideo,

			blockContent   		: response.data.blockDescription,
			block_id			: block_id,
          
        });
      })
      .catch((error)=>{
         console.log("error = ", error);              
      });
}
UpdateBlockInfo(event){
	console.log("in up");
			event.preventDefault();
		
		var formValues = {
			blockTitle 			:  this.state.basicBlockTitle, 	
			blockSubTitle		:  this.state.basicBlocksubTitle, 	
			blockDescription	:  this.state.blockContent, 
			blockType			:  this.state.typeOfBlock,
			blockComponentName  : this.state.componentName,			
		};
		// console.log("formValues=blocks>",formValues);
		axios
			.patch('/api/blocks/patch/'+this.state.block_id,formValues)
		  	.then(function (response) {
		    // handle success
		    	// console.log(response);
		    	window.location.reload();
		    	
		  	})
		  	.catch(function (error) {
		    // handle error
		    	console.log(error);
		  	});
   		/*console.log("formValues =>",formValues);*/
}
uploadforeGImg(event){
    console.log("upload =",event.target.files[0]);
    var file = event.target.files[0];
    if(file){
      var ext = file.name.split('.').pop();
      if(ext=="jpg" || ext=="png" || ext=="jpeg" || ext=="JPG" || ext=="PNG" || ext=="JPEG"){ 
        this.setState({
          uploadedImage: event.target.files[0]
          },()=>{
          console.log("uploadToS3 =",this.state.uploadedImage);
           S3FileUpload
            .uploadFile(file,this.state.config)
            .then((Data)=>{
                console.log('Data.location', Data.location);
              this.setState({
                imgbPath : {
                  "path"    : Data.location,
                }
              })
          })
          .catch((error)=>{
            console.log(error);
          })
        })
      }else{
        swal("Format is incorrect","Only Upload images format (jpg,png,jpeg)","warning"); 
         this.setState({
              imgbPath : {
                "path"    : "",
              }
          }) 
        }
      }else{         
            swal("","Something went wrong","error"); 
          } 
  }
uploadforeGImg(event){
    console.log("upload =",event.target.files[0]);
    var file = event.target.files[0];
    if(file){
      var ext = file.name.split('.').pop();
      if(ext=="jpg" || ext=="png" || ext=="jpeg" || ext=="JPG" || ext=="PNG" || ext=="JPEG"){ 
        this.setState({
          uploadedbackImage: event.target.files[0]
          },()=>{
          console.log("uploadToS3 =",this.state.uploadedImage);
           S3FileUpload
            .uploadFile(file,this.state.config)
            .then((Data)=>{
                console.log('Data.location', Data.location);
              this.setState({
                imgbPath : {
                  "path"    : Data.location,
                }
              })
          })
          .catch((error)=>{
            console.log(error);
          })
        })
      }else{
        swal("Format is incorrect","Only Upload images format (jpg,png,jpeg)","warning"); 
         this.setState({
              imgbPath : {
                "path"    : "",
              }
          }) 
        }
      }else{         
            swal("","Something went wrong","error"); 
          } 
  }

  uploadbackGImg(event){
    // console.log("upload =",event.target.files[0]);
    var file = event.target.files[0];
    if(file){
      var ext = file.name.split('.').pop();
      if(ext=="jpg" || ext=="png" || ext=="jpeg" || ext=="JPG" || ext=="PNG" || ext=="JPEG"){ 
        this.setState({
          uploadedImage: event.target.files[0]
          },()=>{
          console.log("uploadToS3 =",this.state.uploadedImage);
           S3FileUpload
            .uploadFile(file,this.state.config)
            .then((Data)=>{
                console.log('Data.location', Data.location);
              this.setState({
                imgbackPath : {
                  "path"    : Data.location,
                }
              })
          })
          .catch((error)=>{
            console.log(error);
          })
        })
      }else{
        swal("Format is incorrect","Only Upload images format (jpg,png,jpeg)","warning"); 
         this.setState({
              imgbackPath : {
                "path"    : "",
              }
          }) 
        }
      }else{         
            swal("","Something went wrong","error"); 
          } 
  }
  uploadrepetGImg(event){
    console.log("upload =",event.target.files[0]);
    var file = event.target.files[0];
    if(file){
      var ext = file.name.split('.').pop();
      if(ext=="jpg" || ext=="png" || ext=="jpeg" || ext=="JPG" || ext=="PNG" || ext=="JPEG"){ 
        this.setState({
          uploadedImage: event.target.files[0]
          },()=>{
          console.log("uploadToS3 =",this.state.uploadedImage);
           S3FileUpload
            .uploadFile(file,this.state.config)
            .then((Data)=>{
                console.log('Data.location', Data.location);
              this.setState({
                rbPath : {
                  "path"    : Data.location,
                }
              })
          })
          .catch((error)=>{
            console.log(error);
          })
        })
      }else{
        swal("Format is incorrect","Only Upload images format (jpg,png,jpeg)","warning"); 
         this.setState({
              rbPath : {
                "path"    : "",
              }
          }) 
        }
      }else{         
            swal("","Something went wrong","error"); 
          } 
  }
  uploadBlogImage(event){
   event.preventDefault();
   let self = this;
   if (event.currentTarget.files && event.currentTarget.files[0]) {
      var file = event.currentTarget.files[0];
      var newFileName = JSON.parse(JSON.stringify(new Date()))+"_"+file.name;
      var newFile = new File([file],newFileName);
      // console.log("file",newFile);
      if (newFile) {
      // console.log("config--------------->",this.state.config);
        var ext = newFile.name.split('.').pop();
        if(ext=="jpg" || ext=="png" || ext=="jpeg" || ext=="JPG" || ext=="PNG" || ext=="JPEG"){ 
          if (newFile) {
            S3FileUpload
              .uploadFile(newFile,this.state.config)
              .then((Data)=>{
                
                  var obj1={
                    imgPath : Data.location,
                  }
                  var imgArrayWSaws = this.state.imgArrayWSaws;
                  imgArrayWSaws.push(obj1);
                  this.setState({
                    // workspaceImages : imgArrayWSaws
                    blog1Img : imgArrayWSaws
                  })
              })
              .catch((error)=>{
                console.log("formErrors");
                console.log(error);
              })

            // var objTitle={  
            //   fileInfo :newFile
            // }
            // // var imgTitleArrayWS = [];
            // imgTitleArrayWS.push(objTitle);
            // this.setState({
            //   imageTitleArrayWS : imgTitleArrayWS
            // })
            //  console.log('imgArrayWS = ',imgTitleArrayWS);
          }else{         
            swal("File not uploaded","Something went wrong","error"); 
          }
        }else{
          swal("Please upload file","Only Upload  images format (jpg,png,jpeg)","warning");  
        }
      }
    }
  }

  deleteBlockimage(event){
    event.preventDefault();
    swal({
          title: "Are you sure you want to delete this image?",
          text: "Once deleted, you will not be able to recover this image!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((success) => {
            if (success) {
              swal("Your image is deleted!");
              this.setState({
                imgbPath : ""
              })
            } else {
            swal("Your image is safe!");
          }
        });
  }
  deleteBlockimage(event){
    event.preventDefault();
    swal({
          title: "Are you sure you want to delete this image?",
          text: "Once deleted, you will not be able to recover this image!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((success) => {
            if (success) {
              swal("Your image is deleted!");
              this.setState({
                imgbackPath : ""
              })
            } else {
            swal("Your image is safe!");
          }
        });
  }  
  deleteRGBlockimage(event){
    event.preventDefault();
    swal({
          title: "Are you sure you want to delete this image?",
          text: "Once deleted, you will not be able to recover this image!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((success) => {
            if (success) {
              swal("Your image is deleted!");
              this.setState({
                rbPath : ""
              })
            } else {
            swal("Your image is safe!");
          }
        });
  }
  deleteimageWS(e){
    e.preventDefault();
    var index = e.target.getAttribute('id');
    var filePath = e.target.getAttribute('data-id');
    var data = filePath.split("/");
    var imageName = data[4];
    console.log("imageName==",imageName);

    if(index){
      swal({
            title: "Are you sure you want to delete this image?",
            text: "Once deleted, you will not be able to recover this image!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              var array = this.state.imgArrayWSaws; // make a separate copy of the array
              array.splice(index, 1);
              swal("Image deleted successfully");
              this.setState({
                imgArrayWSaws: array
              });
            }else {
              swal("Your image is safe!");
            }
          });
    }
  }
onclickEvent(){
	this.setState({
	      			groupRepetedBlocks:true
	      		});
}

    render() {
        return (
        		<div className="row">
                    <div className="create-basic-block-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="modalBlockHeading">
                            <h1 className="ctext">Create Block</h1>     
                        </div>
                        <form className="newTemplateForm">  
							<div className="row inputrow">
								<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										{ this.state.basicBlockTitle == null
											? null
											:
											<div className="form-group">
												<label className="label-category">Block Title<span className="astrick"></span></label>
												<input type="text" ref="basicBlockTitle" id="basicBlockName" value={this.state.basicBlockTitle} name="basicBlockTitle"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)} />
											</div>
										}
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								    { this.state.basicBlocksubTitle == null
											? null
											:
										    <div className="form-group">
										   		<label className="label-category">Sub Title<span className="astrick"></span></label>
										        <input type="text" ref="basicBlocksubTitle" id="basicBlocksubTitle" value={this.state.basicBlocksubTitle} name="basicBlocksubTitle"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)}/>
										    </div>
										}
								</div>
							</div>
							<div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
			                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadd">
								    <div className="form-group">
								   		<label className="label-category">Componant Name<span className="astrick"></span></label>
								   		{/*{ this.state.componentName
								   			?
								   				<input type="text" ref="componentName" id="componentName" value={this.state.componentName} name="componentName" disabled className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)}/>
								   			:*/}
								        <input type="text" ref="componentName" id="componentName" value={this.state.componentName} name="componentName"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)}/>
								    </div>
								</div>
								 <div className="col-lg-6">
			                    	<label htmlFor="email">Block Type<span className="redFont">*</span></label>
			                    	<div className="col-lg-12 nopadd">
			                    	    { this.state.typeOfBlock == null
											? null
											:
					                    	<div className="dropdown">
					                    		<select className="form-control" id="sel1" ref="typeOfBlock" value={this.state.typeOfBlock} onChange={this.handleChange.bind(this)}>
			  								        <option>HomePage</option>
			  								        <option>Blog</option>
			  								        <option>About Us</option>
			  								        <option>Services</option>
			  								        <option>Contact Us</option>
			  								    </select>
					                      	</div>
					                    }
			                      	</div>
			                    </div>
			                </div>
							<div className="row inputrow">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								    <label className="label-category">Block Content<span className="astrick"></span></label>
								    {/*<textarea class="form-control" rows="5" id="comment"></textarea>*/}
								    {/*<textarea  ref="basicBlockBody" id="basicBlockBody" name="basicBlockBody" value={this.state.basicBlockBody} className="subject bcolor col-lg-12 col-md-12 col-sm-12 col-xs-12" rows="6" onChange={this.handleChange.bind(this)}/>*/}
								    <div className="">
				                      <CKEditor
				                        data={this.state.blockContent}
				                        onChange={this.onEditorChange.bind(this)} />
				                    </div>
								</div>
							</div>

{/*============================================================================================*/}
{/*====================================== Related Group Block==================================*/}							
{/*============================================================================================*/}
							
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m20">
								<button type="button" className=" col-lg-4  btn  btn-lg mbottm20" onClick={this.onclickEvent.bind(this)}>
									Create Repeated Group <i class="fa fa-sort-desc" aria-hidden="true"></i>
								</button>
								{
									this.state.groupRepetedBlocks == true 
										?
										<div className="col-lg-12 col-md-12 repGBlock">
											<div className="row inputrow">
												<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
														{ this.state.repGBlockTitle == null
															? null
															:
															<div className="form-group">
																<label className="label-category">Repeated Block Title<span className="astrick"></span></label>
																<input type="text" ref="repGBlockTitle" id="repGBlockTitle" value={this.state.repGBlockTitle} name="repGBlockTitle"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handle1Change.bind(this)} />
															</div>
														}
												</div>
												<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
												    { this.state.repGBlocksubTitle == null
															? null
															:
														    <div className="form-group">
														   		<label className="label-category">Repeated Sub Title<span className="astrick"></span></label>
														        <input type="text" ref="repGBlocksubTitle" id="repGBlocksubTitle" value={this.state.repGBlocksubTitle} name="repGBlocksubTitle"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handle1Change.bind(this)}/>
														    </div>
														}
												</div>
											</div>
											<div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
							                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadd">
												    <div className="form-group">
												   		<label className="label-category">Repeated Link<span className="astrick"></span></label>
										        		<input type="text" ref="repetedLink" id="repetedLink" value={this.state.repetedLink} name="repetedLink"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handle1Change.bind(this)}/>
												    </div>
												</div>
												<div className="col-lg-6">
							                    	<label htmlFor="email">Repeated Block Image<span className="redFont">*</span></label>
							                    	<div className="col-lg-12 nopadd">
							                    	    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							                                <div className="" id="fileuploadelem">
							                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								                                   { this.state.rBImage == null
																	? null
																	: 
									                                    <div className="form-group">
										                                    {/*<label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Block Image:</label>*/}
										                                    <input type="file" ref="rBImage" id="rBImage" name="rBImage"   className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12" onChange={this.uploadrepetGImg.bind(this)} />
									                                    </div>
								                                	}
							                                	</div>
							                                </div>
							                            </div> 
							                            <div className="col-lg-6 col-md-6 col-xs-12  col-sm-2 ">
										                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
										                        { this.state.rbPath!=="" && this.state.rbPath.path 
										                        	? 
										                          	<div>
										                            	<label className="pull-right custFaTimes" title="Delete image"  onClick={this.deleteRGBlockimage.bind(this)}>X</label>{/*data-id={this.state.imgbPath}*/}
										                            	<img src={this.state.rbPath.path} width="150" height="100"/>
										                          	</div>
										                          	: 
										                          	<div> </div>
										                        }
										                    </div>
														</div>
							                      	</div>
							                    </div>
							                </div>
											<div className="row inputrow marginTop17">
												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 marginTop17">
												    <label className="label-category marginTop17">Block Content<span className="astrick"></span></label>
												    {/*<textarea class="form-control" rows="5" id="comment"></textarea>*/}
												    {/*<textarea  ref="basicBlockBody" id="basicBlockBody" name="basicBlockBody" value={this.state.basicBlockBody} className="subject bcolor col-lg-12 col-md-12 col-sm-12 col-xs-12" rows="6" onChange={this.handleChange.bind(this)}/>*/}
												    <div className="">
								                      <CKEditor
								                        data={this.state.repBlockContent}
								                        onChange={this.onEditorChangeINGroupBlock.bind(this)} />
								                    </div>
												</div>
											</div>
	                            			<button  type="submit" className="col-lg-2 col-md-3 col-sm-6 col-xs-12 btn btn-primary pull-right sendtxtmsgbtn" onClick={this.submitRepBlockInfo.bind(this)}>Submit</button>
										</div>
										: null
								}
	                		  	<div className="col-lg-12">
	                		  	{/*console.log("repetedGroup =>",this.state.repetedGroup)*/}
	                		  		{
											this.state.repetedGroup && this.state.repetedGroup.length>0?
											this.state.repetedGroup.map((data, index)=>{
												console.log("re===>",data);
												return(
						          				<div className="col-lg-4 Allblog">
						          					{
				                					data ? 
							          					<div className="All1block1">
															<img className="img-responsive AllblockImgB" src={data.Image ? data.Image:" "} alt="Bannerpng"/>
															<div className="middle">    
															    <i className="fa fa-trash rclr hoverbbk" ></i>{/*id={this.state.repetedGroup.blogURL} onClick={this.deleteopReDBlock.bind(this)}*/}
															</div>
															<a href={"/block/"+data.Link}>
															{/*<p className="blogDate p10 mtop20 graycolor">{this.state.repetedGroup.createdAt}</p>*/}
															<h3 className="blockTitle p10"><b>{data.Title}</b></h3>
															<h4 className="blockTitle p10"><b>{data.SubTitle}</b></h4>
															<p className="blockPara p10 graycolor" dangerouslySetInnerHTML={ { __html: data.Description } }></p>
															</a>
														</div>
													:
						          					null
			            							}	
						          				</div>
						          				)
											})
										:
										null
									}
			          			</div> 	
							</div>

{/*=============================================================================================*/}
{/*====================================== /Related Group Block==================================*/}							
{/*=============================================================================================*/}							

                        	<div className="row inputrow ">
	                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                                <div className="" id="fileuploadelem">
	                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                   { this.state.fgImage == null
											? null
											: 
			                                    <div className="form-group">
				                                    <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Block Image:</label>
				                                    <input type="file" ref="foreGImage" id="foreGImage" name="foreGImage"   className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12" onChange={this.uploadforeGImg.bind(this)} />
			                                    </div>
		                                	}
	                                	</div>
	                               </div>
		                            <div className="col-lg-6 col-md-6 col-xs-12  col-sm-2 marginTop17">
										
					                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
					                        { this.state.imgbPath!=="" && this.state.imgbPath.path ? 
					                          <div>
					                            <label className="pull-right custFaTimes" title="Delete image"  onClick={this.deleteBlockimage.bind(this)}>X</label>{/*data-id={this.state.imgbPath}*/}
					                            <img src={this.state.imgbPath.path} width="150" height="100"/>
					                          </div>
					                          : <div> </div>
					                        }
					                        </div>
					                      
									</div>
	                            </div>
	                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                                <div className="row inputrow" id="fileupload">
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                    <div className="form-group">
		                                    	{ this.state.bgImage == null
													? null
													:
													<div>
					                                   	<label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Background Image:</label>{/**/}
					                                    <input type="file" ref="backgroundImage" id="backgroundImage" name="backgroundImage"  className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12" onChange={this.uploadbackGImg.bind(this)}  />
			                                  		</div>
			                                  	}
		                                    </div>
		                                </div>
	                                </div>
	                              	<div className="col-lg-6">
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
					                        { this.state.imgbackPath!=="" && this.state.imgbackPath.path ? 
					                          <div>
					                            <label className="pull-right custFaTimes" title="Delete image"  onClick={this.deleteBlockimage.bind(this)}>X</label>{/*data-id={this.state.imgbPath}*/}
					                            <img src={this.state.imgbackPath.path} width="150" height="100"/>
					                          </div>
					                          : <div> </div>
					                        }
					                        </div>
									</div>
	                            </div>
                            </div>
                            <div className="row inputrow ">
                            	{/*<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                              	<div className="" id="fileuploadelem">
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                    { this.state.fgVideo == null
											? null
											:
			                                    <div className="form-group">
				                                    <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Block Video:</label>
				                                    <input type="file" ref="basicPageImage" id="basicPageImage" name="basicPageImage"   className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12" />
			                                    </div>
		                                	}
		                                </div>
	                                </div>
		                            <div className="row inputrow imgId">
		                                <div className="col-lg-6">
											
										</div>
		                            </div>
                            	</div>
	                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                                <div className="row inputrow" id="fileupload">
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                    { this.state.bgVideo == null
												? null
												:
			                                    <div className="form-group">
				                                    <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Background Video:</label>
				                                    <input type="file" ref="backgroundVideo" id="backgroundVideo" name="backgroundVideo"  className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12" />
			                                    </div>
			                                }    
		                                </div>
	                                </div>
	                                <div className="row inputrow bgimgId">
	                                   <div className="col-lg-6">
											
										</div>
	                                </div>
	                            </div>*/}
                            </div>
                          	<div className="savetemp col-lg-12 col-md-12 col-sm-12 col-xs-12">
	                          	{ this.state.block_id 
	                          		?
	                            	<button  type="submit" className="col-lg-2 col-md-3 col-sm-6 col-xs-12 btn btn-primary pull-right sendtxtmsgbtn" onClick={this.UpdateBlockInfo.bind(this)}>Update</button>
	                          		:
	                            	<button  type="submit" className="col-lg-2 col-md-3 col-sm-6 col-xs-12 btn btn-primary pull-right sendtxtmsgbtn" onClick={this.submitcmsBlockInfo.bind(this)}>Submit</button>
	                          	}
                          	</div>
							
                        </form>
                      </div>
                	</div>
				
            
        );
    }
}

export default CmsBlock;
