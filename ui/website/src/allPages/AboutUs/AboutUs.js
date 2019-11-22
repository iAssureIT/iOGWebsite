import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Aboutusimgright 		from '../../allBlocks/Aboutusimgright/Aboutusimgright.js';
import Aboutustextcenter    from '../../allBlocks/Aboutustextcenter/Aboutustextcenter.js';
import Aboutustextleft      from '../../allBlocks/Aboutustextleft/Aboutustextleft.js';
import Aboutustextright     from '../../allBlocks/Aboutustextright/Aboutustextright.js';
import Aboutusvision   		from '../../allBlocks/Aboutusvision/Aboutusvision.js';


import './AboutUs.css';




export default class AboutUs extends Component {
 render(){
       return(
              <div className="">
                <div className="industrybg1 col-lg-12 col-xs-12">
                   <div className="row">
                     <Aboutustextleft />
                     {/*<Aboutustextright />*/}
                   </div>
                </div>
                    {/*<Aboutustextcenter />*/}
                {/*<div className="industrybg2 col-lg-12">
                  <div className="row">
                    <Aboutusimgright />
                    <Aboutusvision />
                  </div>
                </div>*/}
              </div>       

        );
    } 
}