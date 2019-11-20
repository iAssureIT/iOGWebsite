import React from 'react';
import SingleBlogBanner      from "../../allBlocks/SingleBlogBanner/SingleBlogBanner.js";
import BlogContent           from "../../allBlocks/BlogContent/BlogContent.js";
import jsPDF from 'jspdf';
// import RelatedBlogs          from "../../allBlocks/RelatedBlogs/RelatedBlogs.js";
import Moment                from 'react-moment';
//import MetaTags              from 'react-meta-tags';
// import ShareLink          from 'react-facebook-share-link'
// import ReactToPdf from "react-to-pdf";

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




printTicket(event){


// window.print();

  var printContents = document.getElementById('pdfWrap').innerHTML;

  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;

}




  handleClick(){
    return true;
  }

	render() {
    console.log('CurrentUrl',this.state.CurrentUrl);
    const ref = React.createRef();

		return (
      <div>
      	<div className="container-fluid" style={{padding:"0px"}} id="pdfWrap" iref={ref}>
      		  <SingleBlogBanner blogTitle={this.state.blogTitle} summary={this.state.summary} bannerImage={this.state.bannerImage}/>
            <div className="mt40 col-lg-10"><label className="blogDateSBP pull-right">Date :<Moment format=" MMMM D YYYY ">{this.state.createdAt}</Moment></label></div>
      		  <BlogContent blogContent={this.state.blogContent}/>
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-sm-12 col-xs-12 likeDiv mt40">
              <a href={"https://www.facebook.com/sharer/sharer.php?u="+ this.state.CurrentUrl} target="_blank">
              <i className="fa fa-facebook" href=""></i></a>
              <a href={"https://twitter.com/home?status=" + this.state.CurrentUrl} target="_blank">
              <i className="fa fa-twitter" ></i></a>
              <a href={"https://www.linkedin.com/shareArticle?mini=true&url="+this.state.CurrentUrl} target="_blank">
              <i class="fa fa-linkedin"></i></a>
            </div>
            
           {/* <div className="col-lg-8 col-lg-offset-2 col-md-10 col-sm-12 col-xs-12 bottomDiv">
              <span className="countNumberLike">{this.state.viewCount} views</span>
            </div>*/}
                    <button className="iogpdfbtn" onClick={this.printTicket.bind(this)}>Generate pdf</button>
                    <div style={{width:0, height: 0}}></div>

            </div>
            <BlogComment/>
			  </div>
	   	);
	}
}


