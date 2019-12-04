import React, { Component, Suspense,lazy } from 'react';


export default class Sample extends React.Component {
	   	constructor(props){
	   	super(props);
	   	this.state = {
	   		NewPageComponent :""
	   	}
   }
   componentDidMount(){
		var component = 'Typecomponent';

		this.setState({NewPageComponent: React.lazy(() => import('./CMS/blocktemplate/'+component+'.js')) });
	}

    render() {
    	// console.log("block id in render=",this.state.NewPageComponent);
    	
    	var Newpagecomponent = this.state.NewPageComponent ? this.state.NewPageComponent : "Typecomponent"; 
        return (
    		<div className="wrapper">	
    			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<Suspense fallback={<div>Loading...</div>}>
			    		<Newpagecomponent/>
			    	</Suspense>
			    </div>	
			</div>            
        );
    }
}
