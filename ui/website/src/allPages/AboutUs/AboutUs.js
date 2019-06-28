import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Aboutufounder   		from '../../allBlocks/Aboutufounder/Aboutufounder.js';
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
              	<Aboutustextleft />
              	<Aboutustextright />
              	<Aboutustextcenter />
              	<Aboutusimgright />
              	<Aboutusvision />
              	<Aboutufounder />
              </div>       

        );
    } 
}