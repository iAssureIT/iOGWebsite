import React, { Component, Suspense } from 'react';

import {Route, withRouter} from 'react-router-dom';

import axios        from 'axios';
import swal from 'sweetalert';

import PageHead from "../PageHead/PageHead.js";
import './MasterPage.css';


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
componentDidMount(){
			// console.log("pageUrl = ",pageUrl);
			// this.getAllBlockList();
			var pageUrl = window.location.pathname;;
			// console.log("pageUrl = ",pageUrl);
			let a = pageUrl ? pageUrl.split('/') : "";
	        console.log("a==>",a[1]); 
	        const urlParam =a[2];
	        // console.log("urlparam..",urlParam);
	        this.setState({
					      			urlParam:urlParam
					      		});

			axios
			.get('http://iogapi.iassureit.com/api/pages/get/page_block/'+urlParam)
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
								<Suspense fallback={<div>Loading...</div>} key={index}>
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
