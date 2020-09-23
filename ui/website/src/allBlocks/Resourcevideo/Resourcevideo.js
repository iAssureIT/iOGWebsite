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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12">
                    <div className="line2 newline2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6 col-md-offset-6 col-xs-offset-4">
                     </div>
                    </div>
                    <h2 className="lightbluetext text-center para1-top">Videos</h2>
                      <br></br>
                      <p className="line_para2  text-center">
                          iOG delivers services to the industry through 4 distinct arms of engagement.We would consider it our privi-<br></br>
                          lege to join hands and work with you to explore every possibility of enhancing your company’s profitability.<br></br>
                           We are only a phone call or email away from you.Looking forward to an opportunity to partner with you.<br></br>
                        </p>          
                </div>

                 <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                     {
                      this.VideoData().map((data, index)=>{
                      return (
                        <div key={index} className="col-lg-4  col-md-4 col-sm-12 col-xs-12 mt100">
                        <div className="videocard1">
                            <div className="introvideo">      
                            <ReactPlayer
                                url={data.link}
                                className='react-player'
                                playing={currentPlayingIndex === index ? true : false}
                                width='324px' height='211px'
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
        );
    }
}