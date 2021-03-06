import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Resourcevideo.css';

import ReactPlayer from 'react-player'

export default class Resourcevideo extends Component {
  constructor(){
    super();
     this.state={
      loadedVideosCount: 0,
      currentPlayingIndex: -1,
      autoPlay : false,
      playing:false
     }

  }
  
  VideoData(){
        return [
            {
                downstreamTitle : "Supply Chain Management",
                downstreamimg   : "/images/Illustration_2.png",
                video1st        : "https://iogsolutions-my.sharepoint.com/personal/anurag_shinde_iogsolutions_com/_layouts/15/onedrive.aspx?originalPath=aHR0cHM6Ly9pb2dzb2x1dGlvbnMtbXkuc2hhcmVwb2ludC5jb20vOmY6L3AvYW51cmFnX3NoaW5kZS9Fc0VrNEo3cWtVaEx1UlRNNjBEUUttTUJndDB1WElqTjUwRmNjLU5ZT3dIUEp3P3J0aW1lPWFfRjg1Wlp0MTBn&id=%2Fpersonal%2Fanurag%5Fshinde%5Fiogsolutions%5Fcom%2FDocuments%2FMarketing%20Activities%2FWebsite%20Revamp%2FVideos%2F05%20iOG%20SCM%2Emp4&parent=%2Fpersonal%2Fanurag%5Fshinde%5Fiogsolutions%5Fcom%2FDocuments%2FMarketing%20Activities%2FWebsite%20Revamp%2FVideos",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis",
                link            : 'https://www.youtube.com/watch?v=COzxCjRZpys'
            }, 
            {
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis",
                 link           : 'https://www.youtube.com/watch?v=USQdTLjYM0E&t=3s', 
            },
            {
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis",
                 link           : 'https://www.youtube.com/watch?v=Ra7HPPaql5s', 
            },
            {
                downstreamTitle : "Supply Chain Management",
                downstreamimg   : "/images/Illustration_2.png",
                video1st        : "https://iogsolutions-my.sharepoint.com/personal/anurag_shinde_iogsolutions_com/_layouts/15/onedrive.aspx?originalPath=aHR0cHM6Ly9pb2dzb2x1dGlvbnMtbXkuc2hhcmVwb2ludC5jb20vOmY6L3AvYW51cmFnX3NoaW5kZS9Fc0VrNEo3cWtVaEx1UlRNNjBEUUttTUJndDB1WElqTjUwRmNjLU5ZT3dIUEp3P3J0aW1lPWFfRjg1Wlp0MTBn&id=%2Fpersonal%2Fanurag%5Fshinde%5Fiogsolutions%5Fcom%2FDocuments%2FMarketing%20Activities%2FWebsite%20Revamp%2FVideos%2F05%20iOG%20SCM%2Emp4&parent=%2Fpersonal%2Fanurag%5Fshinde%5Fiogsolutions%5Fcom%2FDocuments%2FMarketing%20Activities%2FWebsite%20Revamp%2FVideos",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis",
                link            : 'https://www.youtube.com/watch?v=olFO-Y_cGwU&t=8s',
            }, 
            {
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis",
                 link           : 'https://www.youtube.com/watch?v=u6H1M6C8nJM', 
            },
            {
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis",
                 link           : 'https://www.youtube.com/watch?v=srwlxhbyB3s', 
            },
        ]
    }
  VideoData1(){
        return [
            
           
        ]
    }
    onEnded(){
      this.setState({
        playing:"false"
      })
    }

    onPlay(index){
      console.log('pppppp',index);
     // $(e.target).play();
      this.setState({
        playing:"true",
        currentPlayingIndex : index
      })
    }

    render(){
      const { loadedVideosCount, currentPlayingIndex } = this.state;

        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 videosDiv" style={{padding:"0px"}}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 videosDiv" style={{padding:"0px"}}>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{padding:"0px"}}>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding" style={{marginTop:"30px"}}>
                          <h2 className="BT1_bannerTitle_res text-center HistorianTitle text-center"><b>Resources</b></h2>
                           <div className="dynamicpageimg BT1_img1"></div>
                          </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"style={{marginTop:"30px"}}>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  contentheadernew text-center">
                              <hr/>
                               <h2 style={{color:"#333"}}><b>Videos</b></h2>
                              </div>
                                <br>
                                </br> 
                          </div>
                         <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Mobile_leftPadd mobileright_padd">
                           <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Mobile_leftPadd mobileright_padd">
                             <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Mobile_leftPadd mobileright_padd">
                               <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                             {
                              this.VideoData().map((data, index)=>{
                              return (
                                <div key={index} className="col-lg-4  col-md-6 col-sm-12 col-xs-12 mobileright_padd  mt100">
                                <div className="videocard1">
                                    <div className="introvideo">      
                                    <ReactPlayer
                                        url={data.link}
                                        className='react-player reactplayerDiv'
                                        playing={currentPlayingIndex === index ? true : false}
                                        onEnded={this.onEnded.bind(this)}
                                        onPlay = {this.onPlay.bind(this,index)}
                                        controls loop={false}
                                        muted
                                      
                                      />
                                       {/* <ReactPlayer url={data.link} width='324px' height='211px' controls loop  />  */}
                                    </div>          
                                  <div className="go-corner" href="#">
                                    <div className="go-arrow">
                                    </div>
                                  </div>
                                </div>
                                </div>
                                 );
                              })
                            }   
                         </div>
                        </div>
                      </div>
                    </div>      
                  </div>
                </div>
               </div>
              </div>    
            );
        }
    }