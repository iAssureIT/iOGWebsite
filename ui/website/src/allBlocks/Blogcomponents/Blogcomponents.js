import React, { Component } from 'react';
import axios                from 'axios';
import swal                 from 'sweetalert';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";

import Challenges                      from '../../allBlocks/Challenges/Challenges.js';
import "./Blogcomponents.css";
import BlogContent from "../BlogContent/BlogContent.js";
import Loader      from "../../common/Loader/Loader.js";


export default class Blogcomponents extends Component {


  constructor(props) {
    super(props);
    this.state = {

      "Blogs"   : {},
      "loading" : true,

              
  };
  }

componentDidMount(){

  var Blogs =[];
  this.getBlogData();

    var accordions = document.querySelectorAll('.accordion-item');

    for (var i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function(e) {
            this.querySelector('.accordion-item__content').classList.toggle('is-open');
        });
    }

 }



deleteBlog(event){
  event.preventDefault();
  var id= event.target.id;
  console.log("id delet",id);
  swal({
            title: "Are you sure you want to delete this Blog?",
            text: "Once deleted, you will not be able to recover this Blog!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((success) => {
              if (success) {
              axios
                  .delete("/api/blogs/delete/"+id)
                  .then((response)=>{
                   this.getBlogData();
                     swal("Your Blog is deleted!");
                  })
                  .catch((error)=>{
                     console.log("error = ", error);             
                  });                           
              } else {
                swal("Your Blog is safe!");
              }
          });
}

getBlogData(){
  axios
      .get('http://iogapi.iassureit.com/api/blogs/get/all/list')
      .then((response)=>{
          console.log("===>",response.data);
          this.setState({
            Blogs   : response.data,
            loading : false,
          });

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
componentDidMount(){
  var Blogs =[];
  this.getBlogData();

}



    BlogsData(){

        return [
           {
                id : "Blog1",
                blogDate   : "June 28, 2019",
                numOfLike  : "209",
                blogsTitle : "How oil and gas industry is embracing new age technologies?",
                blogsimg   : "/images/blog1.1.jpg",
                BlogContent1     : "As we come to the middle of 2019, oil and gas companies worldwide are facing constant changes.....",
              
            },
            {
                id : "Blog2",
                blogDate   : "June 20, 2019",
                numOfLike  : "158",
                blogsTitle : "EHS Applications in Oil & Gas",
                blogsimg   : "/images/blog2.1.jpg",
                BlogContent1     : "EHS software solutions facilitates streamlining all aspects environmental, health and safety programs in organization. ....",
               
            },
            {
                id : "Blog3",
                blogDate   : "July 28, 2019",
                numOfLike  : "250",
                blogsTitle : "Asset Reliability and Integrity Management Today",
                blogsimg   : "/images/blog3.1.jpg",
                BlogContent1     : "Process industries are asset-intensive and are witnessing many improvement opportunities as owner-operators.....",

            },
            {
                id : "Blog4",
                blogDate   : "July 28, 2019",
                numOfLike  : "200",
                blogsTitle : "Energy Management in Refineries and Petrochemicals Complex",
                blogsimg   : "/images/blog4.1.jpg",
                BlogContent1     : "As oil refiners face an increasingly competitive global business environment, they look out for the opportunities....",

            },
            {
                id : "Blog5",
                blogDate   : "July 28, 2019",
                numOfLike  : "170",
                blogsTitle : "Leveraging Machine Learning to add value to the Oil & Gas business.",
                blogsimg   : "/images/blog5.1.jpg",
                BlogContent1     : "Machine learning provides information systems the ability to automatically learn and improve from the experience.....",

            },
           
        ]
    }

    Commonleafulblock(){
        return [
            {
              challengesTitle : "iOG Service Offerings",
              challengestext  : "Our Data Management Service offerings include:",
              challengestext2 : "",               
            }, 
                  
        ]
    }
/*
    componentWillMount() {
        $(window).scroll(function() 
      {    
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
          $(".htAuto").addClass("ht1100");
        } else {
            $(".htAuto").removeClass("ht1100");
        }
      });
    }*/
   

  render(){
   
    var Allblogs = this.state.Blogs;
    console.log("Allblogs=>",Allblogs);
    const token = localStorage.getItem("user_ID");  
    return(
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 minHeight NOpadding">
        {
          this.state.loading 
          ?
            <Loader type="collageloader" productLoaderNo = {6}/>
          : 

              Allblogs && Allblogs.length > 0 
              ?
                  Allblogs.map((data, index)=>{
                    return (
                      <div key={index} >
                        <div className="col-lg-3 Allblog">
                          <div className="All1blog1 pricehover-float">
                              <a href={"/blog/"+data.blogURL}>
                            {/*<a className="" id="" role="button" data-parent="#" href={"/blogs/"+data.id}  aria-controls="" >*/}
                              <img className="img-responsive AllblogImgB" src={data.bannerImage ? data.bannerImage.path : ""} alt="Bannerpng"/>
                              <label className="blogDate blogsText mtop20 graycolor">{data.createdAt}</label>
                              <label className="blogDate blogsText mtop20 graycolor pull-right"><i className="fa fa-thumbs-up"></i> &nbsp;{data.numOfLike}</label><br/>
                              <h4 className="blogTitle blogsText"><b>{data.blogTitle}</b></h4>
                              <p className="blogPara blogsText graycolor">{data ? data.summary: "" }</p>
                            </a>
                          </div>                               
                        </div>
                      </div>
                    );
                  })          
           :
                <div>
                  <h3> There is No Blog Found! </h3>
                </div>
        }                        
      </div>
    );
  }
}