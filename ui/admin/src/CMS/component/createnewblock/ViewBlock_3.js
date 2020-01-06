import React, { Component, Suspense } from 'react';

import {Route, withRouter} from 'react-router-dom';
import swal from 'sweetalert';

import axios        from 'axios';
import CircleBlockMenuBars from './circleblockmenubars.js';


export default class ViewBlock_3 extends React.Component {
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
		var pageUrl = window.location.pathname;;
		// console.log("pageUrl = ",pageUrl);
		let a = pageUrl ? pageUrl.split('/') : "";
        // console.log("a==>",a[1]); 
        const urlParam =a[1];
        // console.log("urlParam  == ",urlParam);
        axios
				.get('/api/blocks/get/list')
				.then((response)=>{
						        // console.log("AllBlogs=",response.data);
						      	this.setState({
					      			ListOfBlocks:response.data
					      		},()=>{
					      				console.log("======>",this.state.ListOfBlocks);
					      		});
					      	})
			  	.catch(function (error) {
			    // handle error
			    	console.log(error);
			  	});
}
deleteblock(event){
	event.preventDefault();
	var URL= event.target.id;
	console.log("id delet", URL);
	swal({
	          title: "Are you sure you want to delete this Block ?",
	          text: "Once deleted, you will not be able to recover this Block!",
	          icon: "warning",
	          buttons: true,
	          dangerMode: true,
	        })
	        .then((success) => {
	            if (success) {
	            axios
	   .delete("/api/blocks/delete/"+URL)
	   .then((response)=>{
	    // this.getListOfPages();
	      swal("Your Page is deleted!");
	      window.location.reload();
	   })
	   .catch((error)=>{
	      console.log("error = ", error);              
	   });
	           
	             
	            } else {
	            swal("Your Block is safe!");
	          }
	        });
	}
	render() {
		var data= this.state.pageData;

		return (
			<div className="contentWrapper">
					<div className="box-body">
						<div className="row">
							<div className=" txtCenter col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<h2 className="text-center">Select Required Block from Following list </h2>
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<CircleBlockMenuBars />
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								{
									this.state.ListOfBlocks && this.state.ListOfBlocks.length> 0
									?
										this.state.ListOfBlocks.map((result, index)=>{
											var component = result.blockComponentName ? result.blockComponentName : "TitleDesc";
											const NewPageComponent = React.lazy(() => import('../blockTemplate/'+component+'/'+component+'.js'));
											var block_id=result._id;
											return(
												<Suspense fallback={<div>Loading...</div>} key={index}>
													<i className="fa fa-trash deletIcon pull-right" id={block_id} onClick={this.deleteblock.bind(this)}></i>&nbsp;&nbsp;&nbsp;&nbsp;
										    		<NewPageComponent block_id={block_id}/>
										    	</Suspense>
									    	)
										})
									:
									null
								}
							</div>
						</div>
					</div>
				</div>
		);
	}
}
