import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Resourceprivacy.css';

export default class Resourceprivacy extends Component {
    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt100">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12"><div className="line2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div></div>
                    <h2 className="lightbluetext text-center para1-top">Privacy Policy</h2>
                    <br></br>
                    <p className="line_para2  text-center">
                        The privacy and security of the personal information that we hold about you are very important to us and is an important part<br></br>
                        of our relationship with our clients. The following privacy policy applies to all clients of iOG Solutions Pvt. Ltd. It is designed <br></br>to assist you in understanding how we collect and deal with your personal information. By dealing with us, you consent to  <br></br>the collection, use, and disclosure of your personal information as described in this privacy policy.<br></br>
                    </p>          
                </div>
                <div  className="col-lg-12 blk_ht">
                        <div className="col-lg-12  col-md-12 col-sm-12 col-xs-12  center_block">
                          <div className="resource_blck blckk-ht">
                            <p className="resource_para">
                            In the course of providing high end O&G software services, it is necessary for us to collect personal information. We will not use or disclose personal information for a purpose other than that for which it was collected
                            </p>
                            <p className="resource_txt"><b>iOG Solutions</b>Policy</p>                            
                            <div className="price-footer price-bodyhover col-lg-12 ">
                                <a className="upstreamfoot" href="/privacypolicy"><input type="button" className="btn pricebtn1 buttonhover upbuttonhover lightbluebg" value="Read More"/></a>                                    
                            </div>
                          </div>
                        </div>                        
                 </div>
            </div>

        );
    }
}