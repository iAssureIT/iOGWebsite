import React, { Component } from 'react';
import CircleBlockMenuBars from './circleblockmenubars.js';
import {Route, withRouter} from 'react-router-dom';
// import SelectBlockDesign from '../selectblockdesign/selectblockdesign.js';
import Staticblocks from './Staticblocks.js';

class ViewBlock_1 extends Component {
  
   /* constructor(props) {
        super(props);
    }*/

    render() {
        return (
				<div className="contentWrapper">
					<div className="box-body">
						<div className="row">
							<div className=" txtCenter col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<h2 className="text-center">Select Required Block from Following list </h2>
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								{<CircleBlockMenuBars />}
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<Staticblocks />
							</div>
						</div>
					</div>
				</div>
            
        );
    }
}


export default withRouter(ViewBlock_1);
