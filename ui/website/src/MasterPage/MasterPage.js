import React, { Component, Suspense } from 'react';
import {Route, withRouter}            from 'react-router-dom';
import $                              from 'jquery';
import axios                          from 'axios';
import swal                           from 'sweetalert';
import Contactform                    from '../allBlocks/Contactform/Contactform.js';
import PageHead                       from "../PageHead/PageHead.js";
import './MasterPage.css';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


class MasterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageData:{},
			Blocks:[],
			blocks:"",
			ListOfBlocks : "",
			pageHead : {
				pageAuthor		: "",
				pageDescription	: "",
				pageWords		: [""],
			}
		}; 
	}

modalClickEvent(){
    console.log("click event")
    $('#modalId').addClass('in');
    $('#modalId').css('display','block');
    
    // $('#modalId').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
componentDidMount(){
			// console.log("pageUrl = ",pageUrl);
			// this.getAllBlockList();
			var pageUrl = window.location.pathname;



			console.log("pageUrl now = ",pageUrl);
			let a = pageUrl ? pageUrl.split('/') : "";
			// console.log("a>>>> for contact",a);
			if(a[1]=="contact-us"){
			  $(".NewLoader1").css("display", "none");	
			}
			if(a[1]=="ourjourney"){
			  $(".NewLoader1").css("display", "none");	
			}
			if(a[1]=="privacypolicy"){
			  $(".NewLoader1").css("display", "none");	
			}
			if(a[1]=="termsofuse"){
			  $(".NewLoader1").css("display", "none");	
			}
			if(a[1]=="sitemap"){
			  $(".NewLoader1").css("display", "none");	
			}
			if(a[1]=="singleblog"){
			  $(".NewLoader1").css("display", "none");	
			}
			if(a[1]=="resources"){
			  $(".NewLoader1").css("display", "none");	
			}
	        if(a=='MasterPage'){
	        	 $(".hidepoweredby").css("backgroundColor", "#eee");
	          }else{
	             $(".hidepoweredby").css("backgroundColor", "#fff");

	          }
	          if(a=='ourjourny'){
	        	 $(".hidepoweredby").css("backgroundColor", "#fff");
	        	}
	        console.log("a==>",a[1]); 

	        var urlParam =a[1];
	        if(urlParam=='planning-&-scheduling'){
	        	$(".hidepoweredby").css("backgroundColor", "#b1d9eb");

	        }
	        if(urlParam=='manufacturing-exec-system'){
	        	$(".hidepoweredby").css("backgroundColor", "#e1edf9");

	        }
	        if(urlParam=='new-energy-management'){
	        	$(".hidepoweredby").css("backgroundColor", "#bfdfed");

	        }
	      
	        if(urlParam=='health-safety-environment'){
	        	$(".hidepoweredby").css("backgroundColor", "#fff");

	        }

            if(urlParam=='asset-management'){
	        	$(".hidepoweredby").css("backgroundColor", "rgb(202, 213, 237)");

	        }
	        if(urlParam=='iog-train'){
	        	$(".hidepoweredby").css("backgroundColor", "rgb(201, 249, 249)");

	        }
	        if(urlParam=='chemicals-mainpage'){
	        	$(".hidepoweredby").css("backgroundColor", "rgb(59, 93, 214)");

	        }
	        if(urlParam=='lng'){
	        	$(".hidepoweredby").css("backgroundColor", "#53c9fd");

	        }
	        if(urlParam=='gas-processing'){
	        	$(".hidepoweredby").css("backgroundColor", "rgba(64, 178, 229, 0.93)");

	        }
	      
	        this.setState({
					      			urlParam:urlParam
					      		});
            console.log("urlParam----",urlParam)
			axios
			.get('/api/pages/get/page_block/'+urlParam)
	        .then((response)=>{
	        	console.log("data in page=",response.data);
	      		if (response.data) {
			      	this.setState({
			      		pageData:response.data,
			      		pageHead:{
									pageAuthor		: response.data.pageHead.pageAuthor,
									pageDescription	: response.data.pageHead.pageDescription,
									pageWords		: response.data.pageHead.pageWords,
								},
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

	render() {
		var data= this.state.pageData;	
		return (

			
			<div className="pageHgt">
			<PageHead pageHeadData={this.state.pageHead}/>
				
				{
					this.state.pageData.pageBlocks && this.state.pageData.pageBlocks.length> 0
					?
						this.state.pageData.pageBlocks.map((result, index)=>{
							var component = result._id ? result.block_id.blockComponentName : "TitleDesc";
							// console.log("mani component ===> > >",component, result.block_id.blockComponentName);
							const NewPageComponent = React.lazy(() => import('../blockTemplate/'+component+'/'+component+'.js'));
							var block_id=result.block_id._id;
							return(
								<Suspense fallback={<div className="text-center  NewLoader"><img src="/images/Spin-Preloader.gif"/></div>} key={index}>
						    		<NewPageComponent block_id={block_id}/>
						    	</Suspense>
					    	)
						})
					:
					<div className="text-center  NewLoader1">
					 <img src="/images/Spin-Preloader.gif"/>
				   </div>
				}
			</div>
		);
	}
}
export default withRouter(MasterPage);
