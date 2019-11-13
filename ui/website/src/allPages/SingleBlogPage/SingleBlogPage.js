import React from 'react';
import SingleBlogBanner      from "../../allBlocks/SingleBlogBanner/SingleBlogBanner.js";
import BlogContent           from "../../allBlocks/BlogContent/BlogContent.js";
// import RelatedBlogs          from "../../allBlocks/RelatedBlogs/RelatedBlogs.js";
// import Moment                from 'react-moment';
//import MetaTags              from 'react-meta-tags';
// import ShareLink          from 'react-facebook-share-link'

import BlogComment           from "../../allBlocks/BlogComment/BlogComment.js";
import { FacebookProvider, Share } from 'react-facebook';

import axios                 from 'axios';
import swal                  from 'sweetalert2';

var id;
export default class SingleBlogPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			    "blogTitle"      	  : "",
		      "summary"   	      : "",
		      "typeOfBlog"   	    : "",
		      "blogContent"       : "",
          "bannerImage"       : {},
          "viewCount"         : "",

		};
	}
  componentDidMount(){
    var url = this.props.location.pathname;
    localStorage.setItem("lastUrl",url);
    this.setState({
      CurrentUrl:window.location.href
    })
    id = this.props.match.params.selectedUrl;
    console.log("id --->",id);

		axios
      .get('http://iogapi.iassureit.com/api/blogs/get/'+id)
      .then((response)=>{
        console.log("===>",response.data);
        this.setState({

        "blogTitle"		:response.data.blogTitle,
        "summary"		  :response.data.summary,
        "typeOfBlog"	:response.data.typeOfBlog,
        "blogContent"	:response.data.blogContent,
        "bannerImage" :response.data.bannerImage.path,
        "createdAt"   :response.data.createdAt

          
        })
      })
      .catch(function(error){
          if(error.message === "Request failed with status code 401")
              {
                swal("Your session is expired! Please login again.","", "error");
              }
      })
      var blogURL = this.props.match.params.selectedUrl;

      axios
      .get('/api/blogs/get/count/url/'+blogURL)
      .then((response)=>{
        this.setState({
            viewCount: response.data.count,
        })
        
      })
      .catch(function(error){
        if(error.message === "Request failed with status code 401")
            {
                 swal("Your session is expired! Please login again.","", "error");
            }
        })
	}


  handleClick(){
    return true;
  }

	render() {
    console.log('CurrentUrl',this.state.CurrentUrl);
		return (
      
      	<div className="container-fluid" style={{padding:"0px"}}>
      		  <SingleBlogBanner blogTitle={this.state.blogTitle} summary={this.state.summary} bannerImage={this.state.bannerImage}/>
            <div className="mt40 col-lg-10"><label className="blogDateSBP pull-right"><b>Date :</b> {this.state.createdAt}</label></div>
      		  <BlogContent blogContent={this.state.blogContent}/>
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-sm-12 col-xs-12 likeDiv mt40">
              <a href={"https://www.facebook.com/sharer/sharer.php?u="+ this.state.CurrentUrl} target="_blank">
              <i className="fa fa-facebook" href=""></i></a>
              <a href={"https://twitter.com/home?status=" + this.state.CurrentUrl} target="_blank">
              <i className="fa fa-twitter" ></i></a>
              <a href={"https://www.linkedin.com/shareArticle?mini=true&url="+this.state.CurrentUrl} target="_blank">
              <i class="fa fa-linkedin"></i></a>
            </div>
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-sm-12 col-xs-12 bottomDiv">
              <span className="countNumberLike">{this.state.viewCount} views</span>
            </div>
			  </div>
	   	);
	}
}

