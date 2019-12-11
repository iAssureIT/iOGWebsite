import React from 'react';
import {Route, withRouter} from 'react-router-dom';

/*<<<<<<< Updated upstream
import Typecomponent1 from "../blockTemplate/Typecomponent1/Typecomponent1.js";
import Typecomponent2 from "../blockTemplate/Typecomponent2/Typecomponent2.js";
import Typecomponent3 from "../blockTemplate/Typecomponent3/Typecomponent3.js";
import Typecomponent4 from "../blockTemplate/Typecomponent4/Typecomponent4.js";
import Typecomponent5 from "../blockTemplate/Typecomponent5/Typecomponent5.js";
import Servicesoverview      from "../blockTemplate/ServicesOverview/ServicesOverview.js";*/
import Typecomponent1        from "../blockTemplate/Typecomponent1/Typecomponent1.js";
import Typecomponent2        from "../blockTemplate/Typecomponent2/Typecomponent2.js";
import Typecomponent3        from "../blockTemplate/Typecomponent3/Typecomponent3.js";
import Typecomponent4        from "../blockTemplate/Typecomponent4/Typecomponent4.js";
import Typecomponent5        from "../blockTemplate/Typecomponent5/Typecomponent5.js";
import ServiceOverview       from "../blockTemplate/ServiceOverview/ServiceOverview.js";
import IogconsultTxtRight    from "../blockTemplate/IogconsultTxtRight/IogconsultTxtRight.js";
import ConsultingServices    from "../blockTemplate/ConsultingServices/ConsultingServices.js";
import ConsultDownstream     from "../blockTemplate/ConsultDownstream/ConsultDownstream.js";
import TemplateBanner        from "../blockTemplate/TemplateBanner/TemplateBanner.js";
import TemplateOverview      from "../blockTemplate/TemplateOverview/TemplateOverview.js";


import './Staticblocks.css';

class Staticblocks extends React.Component {

	constructor(props) {
		super(props);
	}

	selectComponent(event){
		var blockTitle 			= "";
		var blocksubTitle 		= "";
		var blockDescription 	= "";
		var blockType 			= "";
		var bgImage 			= "";
		var fgImage 			= "";
		var rBlocksTitle 		= "";
		var rBlocksSubTitle 	= "";
		var rBlocksDescription 	= "";
		var rBlocksImage 		= "";
		var rBlocksLink         = "";
		var RepetedBlock         = "";

		var componentName = event.target.id;
		var element = document.getElementById("id");

		if(event.target.getAttribute("data-blockTitle")){
			blockTitle = event.currentTarget.getAttribute("data-blockTitle");
		}
		if(event.target.getAttribute("data-blocksubTitle")){
			blocksubTitle = event.currentTarget.getAttribute("data-blocksubTitle");
		}
		if(event.target.getAttribute("data-blockDescription")){
			blockDescription = event.currentTarget.getAttribute("data-blockDescription");
		}
		if(event.target.getAttribute("data-blockType")){
			blockType = event.currentTarget.getAttribute("data-blockType");
		}
		if(event.target.getAttribute("data-fgImage")){
			fgImage = event.currentTarget.getAttribute("data-fgImage");
			console.log("fgImage  =>",fgImage);
		}
		if(event.target.getAttribute("data-bgImage")){
			bgImage = event.currentTarget.getAttribute("data-bgImage");
			console.log("bgImage  =>",bgImage);

		}
		if(event.target.getAttribute("data-rBlocksTitle")){
			rBlocksTitle = event.currentTarget.getAttribute("data-rBlocksTitle");
		}
		if(event.target.getAttribute("data-rBlocksSubTitle")){
			rBlocksSubTitle = event.currentTarget.getAttribute("data-rBlocksSubTitle");
		}
		if(event.target.getAttribute("data-rBlocksDescription")){
			rBlocksDescription = event.currentTarget.getAttribute("data-rBlocksDescription");
		}
		if(event.target.getAttribute("data-rBlocksImage")){
			rBlocksImage = event.currentTarget.getAttribute("data-rBlocksImage");
		}
		if(event.target.getAttribute("data-rBlocksLink")){
			rBlocksLink = event.currentTarget.getAttribute("data-rBlocksLink");
		}
		if(event.target.getAttribute("data-RepetedBlock")){
			RepetedBlock = event.currentTarget.getAttribute("data-RepetedBlock");
		}

		var queryString = 	"componentName="+componentName
							+"&blockTitle="+blockTitle
							+"&blocksubTitle="+blocksubTitle
							+"&blockDescription="+blockDescription
							+"&blockType="+blockType
							+"&fgImage="+fgImage
							+"&bgImage="+bgImage
							+"&RepetedBlock="+RepetedBlock
							+"&rBlocksTitle="+rBlocksTitle
							+"&rBlocksSubTitle="+rBlocksSubTitle
							+"&rBlocksDescription="+rBlocksDescription
							+"&rBlocksImage="+rBlocksImage
							+"&rBlocksLink="+rBlocksLink;
		
		this.props.history.push('/viewblock2?'+queryString);
	}

	render() {
		return (
			<div>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="Typecomponent1" 
							data-blockTitle="blockTitle" 
		                	data-blockDescription="blockDescription" 
							data-fgImage="fgImage" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<Typecomponent1 /> 
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="Typecomponent2" 
							data-blockTitle="blockTitle" 
		                	data-blockDescription="blockDescription" 
							data-fgImage="fgImage" 
						
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<Typecomponent2 />
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="Typecomponent3" 
							data-blockTitle="blockTitle" 
		                	data-blockDescription="blockDescription" 
							data-rBlocksTitle="rBlocksTitle" 
							data-rBlocksImage="rBlocksImage" 
							data-rBlocksLink="rBlocksLink" 
							data-RepetedBlock="RepetedBlock" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<Typecomponent3 />
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="ServicesOverview" 
	data-blockTitle="blockTitle" 
		                	data-blockDescription="blockDescription" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<ServiceOverview />
				</section>
				 <section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="IogconsultTxtRight" 
							data-blockTitle="blockTitle" 
		                	data-blockDescription="blockDescription" 
		                	data-fgImage="fgImage" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<IogconsultTxtRight />
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="ConsultingServices" 
							data-blockTitle         ="blockTitle" 
							data-RepetedBlock       ="RepetedBlock" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage       ="rBlocksImage" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksLink        ="rBlocksLink" 

		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<ConsultingServices />
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="ConsultDownstream" 
							data-blockTitle="blockTitle" 
		                	data-blockDescription="blockDescription" 
		                	data-fgImage="fgImage" 
		                	data-rBlocksTitle       ="rBlocksTitle"
							data-rBlocksDescription ="rBlocksDescription" 
							data-bgImage ="bgImage" 
							data-RepetedBlock="RepetedBlock" 

		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<ConsultDownstream />
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="TemplateBanner" 
							data-blockTitle="blockTitle"  
							data-fgImage   ="fgImage" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<TemplateBanner />
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="TemplateOverview" 
							data-blockTitle="blockTitle" 
							data-blockDescription="blockDescription"  
							data-fgImage   ="fgImage" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<TemplateOverview />
				</section>
			

			</div>
		);
	}
}

export default withRouter(Staticblocks);
