import React, { Component, Suspense } from 'react';
import {Route, withRouter} from 'react-router-dom';
import axios        from 'axios';
import swal from 'sweetalert';
// import Modal from 'react-modal';
import CmsBlock from "../createnewblock/Cmsblock.js";
import $ from "jquery";

// import PageHead from "../PageHead/PageHead.js";
import './MasterPage.css';
// import 'bootstrap/dist/js/bootstrap.js';

class MasterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageData	: {},
			editID		: "",
			Blocks  	: [],
			blocks 		: "",
			ListOfBlocks: "",
			block_id 	: "",
			modalIsOpen : false
		};
	}


    editbtn(btnEditShow){

    	// var id = document.getElementById("id");
   		// document.getElementById(btnEditShow).style.display = 'block';
	    // hide the lorem ipsum text
	   /* document.getElementById(text).style.display = 'none';*/
	    // hide the link
	   

 	}
componentWillReceiveProps(){
   
}

componentDidMount(){
	$(document).ready(function(){

		$("hideBtn").hide();

	});
	$("#editPageBtn").click(function(){
	  $("hideBtn").show();
	});

			// console.log("pageUrl = ",pageUrl);
			// this.getAllBlockList();
			var pageUrl = window.location.pathname;;
			// console.log("pageUrl = ",pageUrl);
			let a = pageUrl ? pageUrl.split('/') : "";
	        console.log("a==>",a[1]); 
	        const urlParam =a[2];
	        // console.log("urlparam..",urlParam);
	        this.setState({
					      			urlParam:urlParam,
					      		
					      		});

			axios
			.get('http://iogapi.iassureit.com/api/pages/get/page_block/'+urlParam)
	        .then((response)=>{
	        	console.log("data in page=",response.data);
	      		if (response.data) {
			      	this.setState({
			      		pageData:response.data,
			      	});
			}
	    })
	      .catch(function(error){
	        console.log(error);
	          if(error.message === "Request failed with status code 401")
	              {
	                   swal("Your session is expired! Please login again.","", "error");
	              }
	      })
   	}
	editModal(event){
		 var id = event.target.id;
	    // console.log("id",id);
	    this.setState({
				      		block_id:id,
				      	});

	}
	editbtn(){
		
	}
	backbtn(){
		this.props.history.push("/viewpage1");/*+response.data.pageURL*/
		window.location.reload();
	}
	render() {
			console.log("in render id mp",this.state.block_id);
		return (
			<div className="pageHgt">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 editStrip NOPadding">
					<button type="button" className="btn" onClick={this.backbtn.bind(this)}>Back</button>
					<button type="button" className="btn pull-right" onClick={this.editbtn.bind(this)} id="editPageBtn">Edit</button>
					{/*<button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>*/}

				</div>
				{/*<!-- Trigger the modal with a button -->*/}

				{/*<!-- Modal -->*/}
				<div id="myModal" className="modal fade " role="dialog">
				  <div className="modal-dialog modal-lg">

				    {/*<!-- Modal content-->*/}
				    <div className="modal-content bdermodal">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				      	<CmsBlock block_id={this.state.block_id}/>
				      </div>
				    </div>

				  </div>
				</div>
				{
					this.state.pageData.pageBlocks && this.state.pageData.pageBlocks.length> 0
					?
						this.state.pageData.pageBlocks.map((result, index)=>{
							var component = result._id ? result.block_id.blockComponentName : "TitleDesc";
							// console.log("mani component ===> > >",result, result.block_id.blockComponentName);
							const NewPageComponent = React.lazy(() => import('../blockTemplate/'+component+'/'+component+'.js'));
							var block_id=result.block_id._id;
							// console.log("block_id ==",block_id);
							var Block_id = result._id;
							return(
								<Suspense fallback={<div>Loading...</div>} key={index}>
									<i className="fa fa-trash btnCss deletbtnIcon pull-right hideBtn" id={Block_id}></i>
									<i className="fa fa-pencil btnCss editIcon pull-right hideBtn" id={block_id} onClick={this.editModal.bind(this)} data-toggle="modal" data-target="#myModal"></i>
						    		<NewPageComponent block_id={block_id}/>
						    	</Suspense>
					    	)
						})
					:
					null
				}
			</div>
		);
	}
}
export default withRouter(MasterPage);
