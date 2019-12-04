import React from 'react';
import Aboutustextcenter from '../blockDesigns/Aboutustextcenter/Aboutustextcenter.js';
import Aboutusimgright from '../blockDesigns/Aboutusimgright/Aboutusimgright.js';


export default class BlockDesignsList extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
	}

	render() {
		return (
			<div>
				<div> <Aboutustextcenter /> </div>
				<div> <Aboutusimgright /> </div>
			</div>
		);
	}
}
