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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 {/*   <p className="line_para2  text-center">
                        The privacy and security of the personal information that we hold about you are very important to us and is an important part<br></br>
                        of our relationship with our clients. The following privacy policy applies to all clients of iOG Solutions Pvt. Ltd. It is designed <br></br>to assist you in understanding how we collect and deal with your personal information. By dealing with us, you consent to  <br></br>the collection, use, and disclosure of your personal information as described in this privacy policy.<br></br>
                    </p>     */}     
                </div>
                <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-12  col-md-12 col-sm-12 col-xs-12 ">
                          <div className="resource_blck blckk-ht hidden-sm hidden-xs">
                            <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                            <div className="line2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6">
                            </div>
                            </div>
                             <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12 hidden-lg hidden-md">
                            <div className="resline2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6">
                            </div>
                            </div>
                            <h2 className="lightbluetext text-center para1-top">Privacy Policy</h2>
                            <br></br>
                            <p className="resource_para ">
                                 The privacy and security of the personal information that we hold about you are very important to us and is an important part
                                of our relationship with our clients. The following privacy policy applies to all clients of iOG Solutions Pvt. Ltd. It is designed <br></br>to assist you in understanding how we collect and deal with your personal information.
                            {/*<br/> By dealing with us, you consent to the collection, use, and disclosure of your personal information as described in this privacy policy.<br></br>*/}
                            </p>
                            <p className="resource_txt"><b>iOG Solutions </b>Policy</p>                            
                            <div className="price-footer price-bodyhover col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <a className="upstreamfoot" href="/privacypolicy"><input type="button" className="btn pricebtn1 buttonhover upbuttonhover lightbluebg" value="Read More"/></a>                                    
                            </div>
                          </div>
                          <div className="resource_blck blckk-ht1 hidden-lg hidden-md">
                            <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12">
                            <div className="line2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6 col-sm-offset-4 col-xs-offset-4">
                            </div>
                            </div>
                            <h2 className="lightbluetext text-center para1-top"style={{fontsize:"27px"}}>Privacy Policy</h2>
                            <br></br>
                            <p className="resource_para ">
                                 The privacy and security of the personal information that we hold about you are very important to us and is an important part
                                of our relationship with our clients. The following privacy policy applies to all clients of iOG Solutions Pvt. Ltd. It is designed <br></br>to assist you in understanding how we collect and deal with your personal information.
                            {/*<br/> By dealing with us, you consent to the collection, use, and disclosure of your personal information as described in this privacy policy.<br></br>*/}
                            </p>
                            <p className="resource_txt"><b>iOG Solutions </b>Policy</p>                            
                            <div className="price-footer price-bodyhover col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <a className="upstreamfoot" href="/privacypolicy"><input type="button" className="btn pricebtn1 buttonhover upbuttonhover lightbluebg" value="Read More"/></a>                                    
                            </div>
                          </div>
                        </div>                        
                 </div>
            </div>

        );
    }
}