import React from 'react';
import {Route, withRouter} from 'react-router-dom';



import Typecomponent1                from "../blockTemplate/Typecomponent1/Typecomponent1.js";
import Typecomponent2                from "../blockTemplate/Typecomponent2/Typecomponent2.js";
import Typecomponent3                from "../blockTemplate/Typecomponent3/Typecomponent3.js";
import Aboutustextright              from "../blockTemplate/Aboutustextright/Aboutustextright.js";
import Aboutusvision                 from "../blockTemplate/Aboutusvision/Aboutusvision.js";
import Commoninfoblock               from "../blockTemplate/Commoninfoblock/Commoninfoblock.js";
import Commonservicesblock           from "../blockTemplate/Commonservicesblock/Commonservicesblock.js";
import CommonservicesblockTitle      from "../blockTemplate/CommonservicesblockTitle/CommonservicesblockTitle.js";
import News_Events                   from "../blockTemplate/News_Events/News_Events.js";
import TitleDesc                     from "../blockTemplate/TitleDesc/TitleDesc.js";
import TitleDescription              from "../blockTemplate/TitleDescription/TitleDescription.js";
import ImgTitle                      from "../blockTemplate/ImgTitle/ImgTitle.js";
import TemplateOverview              from "../blockTemplate/TemplateOverview/TemplateOverview.js";
import TitleRrpeatedImgGrp           from "../blockTemplate/TitleRrpeatedImgGrp/TitleRrpeatedImgGrp.js";
import ExpertiseServicesOffered      from "../blockTemplate/ExpertiseServicesOffered/ExpertiseServicesOffered.js";
import ChallengesTemp                from "../blockTemplate/ChallengesTemp/ChallengesTemp.js";



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
		var RepetedBlock        = "";
	   

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
							+"&rBlocksLink="+rBlocksLink

							
		
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
		            <button id="Aboutustextright" 
	                        data-fgImage="fgImage" 
		                	data-blockDescription="blockDescription" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<Aboutustextright />
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="Aboutusvision" 
	                        data-fgImage="fgImage" 
		                	data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksDescription ="rBlocksDescription"  
							data-RepetedBlock 		="RepetedBlock" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<Aboutusvision />
				</section>
                <section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="Commoninfoblock"
		                    data-blockTitle="blockTitle" 
		                	data-blockDescription="blockDescription" 
							data-fgImage="fgImage" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<Commoninfoblock />
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="Commonservicesblock" 
		                	data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksImage 		="rBlocksImage" 
							data-rBlocksLink  		="rBlocksLink" 
							data-RepetedBlock 		="RepetedBlock" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<Commonservicesblock />
				</section>


				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="CommonservicesblockTitle"
		                    data-blockTitle         ="blockTitle"  
		                	data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksImage 		="rBlocksImage" 
							data-rBlocksLink  		="rBlocksLink" 
							data-RepetedBlock 		="RepetedBlock" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<CommonservicesblockTitle />
				</section>
                <section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="News_Events"  
		                	data-rBlocksTitle       ="rBlocksTitle" 
		                	data-rBlocksSubTitle    ="rBlocksSubTitle" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksImage 		="rBlocksImage" 
							data-rBlocksLink  		="rBlocksLink" 
							data-RepetedBlock 		="RepetedBlock" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<News_Events />
				</section>


				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="TitleDescription" 
	                        data-blockTitle="blockTitle" 
		                	data-blockDescription="blockDescription" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<TitleDescription />
				</section>





			   <section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="TitleDesc" 
	                        data-blockTitle="blockTitle" 
		                	data-blockDescription="blockDescription" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<TitleDesc />
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
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="ImgTitle" 
	                        data-blockTitle="blockTitle" 
		                	data-bgImage="bgImage" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<ImgTitle />
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="TitleRrpeatedImgGrp" 
							data-blockTitle   		="blockTitle"
							data-fgImage      		="fgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksImage 		="rBlocksImage" 
							data-rBlocksLink  		="rBlocksLink" 
							data-RepetedBlock 		="RepetedBlock" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<TitleRrpeatedImgGrp />
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="ExpertiseServicesOffered" 
							data-blockTitle   		="blockTitle"
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksImage 		="rBlocksImage" 
							data-rBlocksLink  		="rBlocksLink" 
							data-RepetedBlock 		="RepetedBlock"
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<ExpertiseServicesOffered />
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover">	
		            <button id="ChallengesTemp" 
							data-blockTitle   		="blockTitle" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksImage 		="rBlocksImage" 
							data-rBlocksLink  		="rBlocksLink" 
							data-RepetedBlock 		="RepetedBlock"
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>
					<ChallengesTemp />
				</section>
				
			

			</div>
		);
	}
}

export default withRouter(Staticblocks);
