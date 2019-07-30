import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Resourcedownload.css';

export default class Resourcedownload extends Component {

  VideoData(){
        return [
            {
                downstreamTitle : "Supply Chain Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamlink  : "/images/iOG Corporate Brochure.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamlink  : "/images/iOG Downstream Services_rev 1_brochure_190615.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "APC Services",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamlink  : "/images/iOG Upstream Services_rev 5.4_brochure.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }
        ]
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12"><div className="line2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div></div>
                    <h2 className="lightbluetext text-center para1-top">Downloads</h2>
                    <br></br>
                    <p className="line_para2  text-center">
                        iOG delivers services to the industry through 4 distinct arms of engagement.We would consider it our privi-<br></br>
                        lege to join hands and work with you to explore every possibility of enhancing your company’s profitability.<br></br>
                         We are only a phone call or email away from you.Looking forward to an opportunity to partner with you.<br></br>
                      </p>          
                </div>
                 <div  className="col-lg-10 col-lg-offset-1">
                     {
                      this.VideoData().map((data, index)=>{
                      return (
                        <div key={index} className="col-lg-4  col-md-4 col-sm-4 col-xs-4 mt100">
                        <a className="videocard" href={data.downstreamlink} title="Click to Download" download>
                          <h3>{data.downstreamTitle}</h3>
                          <p className="small">Card description with lots of great facts and interesting details.</p>
                          <div className="go-corner" href={data.downstreamlink}>
                            <div className="go-arrow">
                              →
                            </div>
                          </div>
                        </a>
                        </div>
                         );
                      })
                    }   
                 </div>
            </div>
        );
    }
}