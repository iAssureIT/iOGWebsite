import React, { Component } from 'react';

import AllBlogsBanner      from "../../allBlocks/AllBlogsBanner/AllBlogsBanner.js";
import AllBlogsList      from "../../allBlocks/AllBlogsList/AllBlogsList.js";
// import SingleBlogPage      from "../SingleBlogPage/SingleBlogPage.js";
// import AllBlogsList      from "../SingleBlogPage/SingleBlogPage.js";

export default class AllBlog extends Component {
		constructor(props){
    super(props);
	    this.state = {
	    	
	    };
  	}  
  	componentDidMount()
  	{
	  var url = this.props.location.pathname;
      localStorage.setItem("lastUrl",url);
  	}
	render() {
		return (
			<div>
				<AllBlogsBanner/>
				{/*<SingleBlogPage/>*/}
				<AllBlogsList/>
			</div>
		);
	}
}
