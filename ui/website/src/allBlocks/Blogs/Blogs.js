import React, { Component } from 'react';
// import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios       from 'axios';
import swal              from 'sweetalert';
import './Blogs.css';
import Moment from 'react-moment';
const OwlCarousel = Loadable({
    
  loader: () => import('react-owl-carousel'),
  loading() {
    return <div className="col-sm-12 col-xs-12 col-lg-2 col-lg-offset-5 col-md-12 loadingImg"><img src="../images/loadersglms.gif" className="img-responsive" alt="loading"/></div>
  }
});

export default class Blogs extends Component {
    constructor(props){
    super(props);
    this.state = {
    "Blogs" : [],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
}
};
}


componentWillReceiveProps(nextProps){
   axios

        .get('http://iogapi.iassureit.com/api/blogs/get/all/list')
        .then((response)=>{
           var FirstFiveblogs = response.data.slice(0, 5);
        // console.log("===>",response.data);
        this.setState({
            Blogs:FirstFiveblogs
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
  var pageUrl = window.location.pathname;
  var Blogs =[];
  this.getBlogData();

}


getBlogData(){
  axios

        .get('http://iogapi.iassureit.com/api/blogs/get/all/list')
        .then((response)=>{
           var FirstFiveblogs = response.data.slice(0, 5);
        // console.log("===>",response.data);
        this.setState({
            Blogs:FirstFiveblogs
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
  var pageUrl = window.location.pathname;
  var Blogs =[];
  this.getBlogData();

}
/*    upstreamData(){

          
        return [
            {
                upstreamTitle : "EHS Applications in Oil & Gas",
                downstreamimg : "/images/Ehs_Application.jpg",
                upstreamLi    : "EHS software solutions facilitates streamlining all aspects environmental, health and safety programs in organization. EHS software plays a key role for providing detailed and intuitive reports."

            }, 
            {
                upstreamTitle : "Leveraging Machine Learning to add value to the Oil and Gas business.",
                downstreamimg : "/images/Leveraging_Machine.jpg",
                upstreamLi    : "Machine learning provides information systems the ability to automatically learn and improve from the experience, without being explicitly programmed."

            }, 
            {
                upstreamTitle : "Energy Management in Refineries and Petrochemicals Complex",
                downstreamimg : "/images/energy_managemnt.jpg",
                upstreamLi    : "As oil refiners face an increasingly competitive global business environment, they look out for the opportunities to reduce production costs without negatively affecting product yield or quality."

            },
            {
                upstreamTitle : "How oil and gas industry is embracing new age technologies?",
                downstreamimg : "/images/gas_industy_embracing.jpg",
                upstreamLi    : "As we come to the middle of 2019, oil and gas companies worldwide are facing constant changes. Compliance, pollution control, supply-demand fluctuations, price volatility, and geopolitical changes are some of them worth mentioning."

            },
            {
                upstreamTitle : "Asset Reliability and Integrity Management Today",
                downstreamimg : "/images/oil-and-gas-management.jpg",
                upstreamLi    : "Process industries are asset-intensive and are witnessing many improvement opportunities as owner-operators strive to enhance asset availability, performance and reduce operational costs."

            } 
           
        ]
    }
*/
    render(){
      var Allblogs = this.state.Blogs;
     
      // console.log("FirstFiveblogs homepage===",FirstFiveblogs);
        return(
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  contentheader text-center">
                    <hr/>
                     <h2 style={{color:"#333"}}><b>Latest Blogs</b></h2>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-md-offset-1 col-sm-offset-1  col-lg-offset-1 hidden-sm hidden-xs" style={{height:"555px"}}>
                      <div>
                        <OwlCarousel
                        className="owl-theme col-lg-12 col-md-12 col-sm-12 col-xs-12"
                        loop
                        mergeFit= {true}
                        // startPosition= {start_pos}
                        nav= {true}
                        // responsive={true}
                        dots={false}
                        items={3}
                        margin={10}
                        // slideBy={2}
                        navText={["<div class='fa fa-angle-left blogleftarrow'></div>","<div class='fa fa-angle-right blogrightarrow'></div>"]}
                        // responsive={
                        // {'0':{items:this.props.items},'768':{items:this.props.items}, '992':{items:this.props.items}, '1200':{items:this.props.items}}
                        // }
                        autoplay={false}
                        autoplayHoverPause={true}
                        >
                        {
                             Allblogs && Allblogs.length > 0 ?
                              Allblogs.map((data, index)=>{
                                // console.log("{data.bannerImage}---",data.bannerImage);
                            return (
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" key={index}style={{height:"600px"}}>
                                  <div className="">
                                    <div className={" index"+index}>
                                        <div className=" blogtext pricehover-float ">
                                          <div>
                                             <div className="blogblock col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="">
                                                  <div className="img-responsive blogsimg">
                                                    <img alt="" src={data.bannerImage ? data.bannerImage.path : ""}/>
                                                  </div>
                                                  <div className=""><h4>{data.blogTitle}</h4></div>
                                                     <div className="summary_blogs_HP"style={{overflow:"hidden"}}>
                                                     <p>{data.summary}</p>
                                                    </div>
                                                    <div className="price-footer price-footertab col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                      <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blogdate"><Moment format=" MMMM D YYYY ">{data.createdAt}</Moment></div>
                                                         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <a className="" href={"/singleblog/"+data.blogURL}>
                                                                <input type="button" className="col-lg-10 col-md-12 col-sm-12 col-xs-12 btn blogbtn1 lightbluebg buttonhover" value="Read More"/>                                    
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                              </div>
                                             </div>
                                            </div>
                                        </div>                       
                                     </div>
                                  </div>
                                </div>
                                );
                            })
                              :
                              <div className="BlogLoader"><img src="/images/Spin-Preloader.gif"/></div>
                        }
                    </OwlCarousel>
                </div>                
              </div>   
              {/*res*/}
              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 hidden-lg hidden-md">
                  <div>
                        <OwlCarousel 
                        className="owl-theme col-lg-12 col-md-12 col-sm-12 col-xs-12"
                        loop
                        nav={true}
                        dots={false}
                        items={1}
                        margin={0}
                        responsiveClass =  {false}
                        // slideBy={2}
                        navText={["<div class='fa fa-angle-left blogleftarrow'></div>","<div class='fa fa-angle-right blogrightarrow'></div>"]}
                        // responsive={
                        // {'0':{items:this.props.items},'768':{items:this.props.items}, '992':{items:this.props.items}, '1200':{items:this.props.items}}
                        // }
                        autoplay={false}
                        autoplayHoverPause={true}
                        >
                        {
                             Allblogs && Allblogs.length > 0 ?
                              Allblogs.map((data, index)=>{
                            return (
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mobile_width" key={index}>
                                  <div className="">
                                    <div className={" index"+index}>
                                        <div className=" blogtext pricehover-float ">
                                          <div>
                                             <div className="blogblock col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="">
                                                  <div className=" blogsimg">
                                                    <img alt="" src={data.bannerImage ? data.bannerImage.path : ""}/>
                                                  </div>
                                                  <div className=""><h4>{data.blogTitle}</h4></div>
                                                     <div className="">
                                                     <p>{data.summary}</p>
                                                    </div>
                                                   <div className="price-footer price-footerBlog col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                      <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 blogdate"><Moment format=" MMMM D YYYY ">{data.createdAt}</Moment></div>
                                                         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
                                                            <a className="" href="/blogs">
                                                                <input type="button" className=" btn blogbtn1 lightbluebg buttonhover" value="Read More"/>                                    
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                              </div>
                                             </div>
                                            </div>
                                        </div>                       
                                     </div>
                                  </div>
                                </div>
                                );
                            })
                               :
                              <h4 className="noBlogs p10 textAlignCenter"><b>No blogs found</b></h4>
                        }
                    </OwlCarousel>
                </div>                
              </div> 
            
          </div> 
         </div>   
        );
    }
}

