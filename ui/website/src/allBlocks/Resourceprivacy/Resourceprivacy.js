import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
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
                        iOG delivers services to the industry through 4 distinct arms of engagement.We would consider it our privi-<br></br>
                        lege to join hands and work with you to explore every possibility of enhancing your company’s profitability.<br></br>
                         We are only a phone call or email away from you.Looking forward to an opportunity to partner with you.<br></br>
                      </p>          
                </div>
                <div  className="col-lg-12 blk_ht">
                        <div className="col-lg-3  col-md-3 col-sm-12 col-xs-12">
                          <div className="aboutus_block aboutus_block1height">
                          <div className="icon1">
                          <img src="/images/Icon_1.png" alt="" className="icn_1" />
                          <img src="/images/11.png" alt="" className="icn1_hover"  />
                          </div>
                            <p className="iog_txt"><b>iOG</b>Study</p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                          <div className="aboutus_block aboutus_block1height">
                          <div className="icon2">
                          <img src="/images/Icon_2.png" alt="" className="icn_2" />
                          <img src="/images/12.png" alt="" className="icn2_hover"  />
                          </div>
                          <p className="iog_txt "><b>iOG</b>Implement</p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                          <div className="aboutus_block aboutus_block1height">
                          <div className="icon3">
                          <img src="/images/Icon_3.png" alt="" className="icn_3" />
                          <img src="/images/13.png" alt="" className="icn3_hover"  />
                          </div>
                          <p className="iog_txt "><b>iOG</b>Consult</p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                          <div className="aboutus_block aboutus_block1height">
                          <div className="icon4">
                          <img src="/images/Icon_4.png" alt="" className="icn_3" />
                          <img src="/images/14.png" alt="" className="icn4_hover"  />
                          </div>
                          <p className="iog_txt "><b>iOG</b>Train</p>
                          </div>
                        </div>
                 </div>
            </div>

        );
    }
}