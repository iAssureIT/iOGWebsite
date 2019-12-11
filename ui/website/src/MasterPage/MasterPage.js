import React, { Component, Suspense } from 'react';

import {Route, withRouter} from 'react-router-dom';

import axios        from 'axios';
import swal from 'sweetalert';

// import PageHead from "../PageHead/PageHead.js";
import './MasterPage.css';


class MasterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageData:{},
			Blocks:[],
			blocks:"",
			ListOfBlocks : ""
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
		// console.log("ListOfBlocks",this.state.ListOfBlocks)
		// console.log('pageData = ', data);
		// console.log("block Data => ",data.pageBlocks);	
		return (
			<div className="pageHgt">
				
				{
					this.state.pageData.pageBlocks && this.state.pageData.pageBlocks.length> 0
					?
						this.state.pageData.pageBlocks.map((result, index)=>{
							console.log(" blockComponentName",result.block_id.blockComponentName);
							var component = result.blockComponentName ? result.block_id.blockComponentName : "TitleDesc";
							console.log("component ===> > >",component);
							const NewPageComponent = React.lazy(() => import('../blockTemplate/'+component+'/'+component+'.js'));
							console.log("NewPageComponent==>",NewPageComponent);
							var block_id=result.block_id._id;
							console.log("block_id",block_id);
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
