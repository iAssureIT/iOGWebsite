import React from 'react';

import Typecomponent1 from "../blockTemplate/Typecomponent1/Typecomponent1.js";
import Typecomponent2 from "../blockTemplate/Typecomponent2/Typecomponent2.js";
import Typecomponent3 from "../blockTemplate/Typecomponent3/Typecomponent3.js";
import Typecomponent4 from "../blockTemplate/Typecomponent4/Typecomponent4.js";
import Typecomponent5 from "../blockTemplate/Typecomponent5/Typecomponent5.js";

export default class Staticblocks extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Typecomponent1 />
				<Typecomponent2 />
				<Typecomponent3 />
				<Typecomponent4 />
				{/*<Typecomponent5 />*/}

			</div>
		);
	}
}
