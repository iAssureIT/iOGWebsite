import React 						from 'react';
import {Route, withRouter} 			from 'react-router-dom';


import Typecomponent1                from "../blockTemplate/Typecomponent1/Typecomponent1.js";
import Typecomponent1Img             from "../blockTemplate/Typecomponent1Img/Typecomponent1Img.js";
import Typecomponent1_btn            from "../blockTemplate/Typecomponent1_btn/Typecomponent1_btn.js";
import Typecomponent2                from "../blockTemplate/Typecomponent2/Typecomponent2.js";
import Typecomponent2_btn            from "../blockTemplate/Typecomponent2_btn/Typecomponent2_btn.js";
import Typecomponent3                from "../blockTemplate/Typecomponent3/Typecomponent3.js";
import Aboutustextright              from "../blockTemplate/Aboutustextright/Aboutustextright.js";
import Aboutustextright_btn          from "../blockTemplate/Aboutustextright_btn/Aboutustextright_btn.js";
import Aboutusvision                 from "../blockTemplate/Aboutusvision/Aboutusvision.js";
import Aboutufounder                 from "../blockTemplate/Aboutufounder/Aboutufounder.js";
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
import ConsultDownstream             from "../blockTemplate/ConsultDownstream/ConsultDownstream.js";
import ConsultingServices            from "../blockTemplate/ConsultingServices/ConsultingServices.js";
import IogconsultTxtRight            from "../blockTemplate/IogconsultTxtRight/IogconsultTxtRight.js";
import ConsultOverview               from "../blockTemplate/ConsultOverview/ConsultOverview.js";
import ImgBlock                      from "../blockTemplate/ImgBlock/ImgBlock.js";
import Maincomponent            	 from "../blockTemplate/Maincomponent/Maincomponent.js";
import Careerimpact            	 	 from "../blockTemplate/Careerimpact/Careerimpact.js";
import CircleMenuBars            	 from "../blockTemplate/CircleMenuBars/CircleMenuBars.js";
import 									 './Staticblocks.css';



class Staticblocks extends React.Component {

	constructor(props) {
		super(props);
	}

	selectComponent(event){
		var blockTitle 			= "";
		var blocksubTitle 		= "";
		var blockDescription 	= "";
		var blockType 			= "";
		var blockLink 			= "";
		var bgImage 			= "";
		var bgVideo 			= "";
		var fgImage 			= "";
		var rBlocksTitle 		= "";
		var rBlocksSubTitle 	= "";
		var rBlocksDescription 	= "";
		var rBlocksImage 		= "";
		var rBlocksVideo 		= "";
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
		if(event.target.getAttribute("data-bgVideo")){
			bgVideo = event.currentTarget.getAttribute("data-bgVideo");
			console.log("bgVideo  =>",bgVideo);
		}
		if(event.target.getAttribute("data-blockLink")){
			blockLink = event.currentTarget.getAttribute("data-blockLink");
			console.log("blockLink  =>",blockLink);
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
		if(event.target.getAttribute("data-rBlocksVideo")){
			rBlocksVideo = event.currentTarget.getAttribute("data-rBlocksVideo");
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
							+"&bgVideo="+bgVideo
							+"&blockLink="+blockLink
							+"&RepetedBlock="+RepetedBlock
							+"&rBlocksTitle="+rBlocksTitle
							+"&rBlocksSubTitle="+rBlocksSubTitle
							+"&rBlocksDescription="+rBlocksDescription
							+"&rBlocksImage="+rBlocksImage
							+"&rBlocksVideo="+rBlocksVideo
							+"&rBlocksLink="+rBlocksLink

							
		
		this.props.history.push('/cms/create-new-block?'+queryString);
	}

	render() {
		return (
			<div className="">

				<div className="boxItem1Statickblocks ">
				<div className=" txtCenter col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
					<div className="  col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                    	<h2 className="text-center">Select Required Design from Following list </h2>
            		</div>
            	</div>
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Typecomponent1" 
								data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription" 
								data-fgImage="fgImage" 
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<Typecomponent1 /> 
					</section>
					
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Typecomponent1Img" 
								data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription" 
								data-fgImage="fgImage" 
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<Typecomponent1Img /> 
					</section>
					
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Typecomponent2" 
			                	data-blockDescription="blockDescription" 
								data-fgImage="fgImage"  
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Typecomponent2 />
					</section>
					
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Typecomponent3" 
								data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription" 
								data-rBlocksTitle="rBlocksTitle" 
								data-rBlocksImage="rBlocksImage" 
								data-rBlocksLink="rBlocksLink" 
								data-RepetedBlock="RepetedBlock" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Typecomponent3 />
					</section>

	                <section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Aboutufounder" 
								data-blockTitle  ="blockTitle" 
			                	data-blockDescription="blockDescription" 
								data-blocksubTitle="blocksubTitle" 
								data-fgImage="fgImage"  
								data-RepetedBlock="RepetedBlock" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Aboutufounder  />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Aboutustextright" 
		                        data-fgImage="fgImage"  
			                	data-blockDescription="blockDescription" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Aboutustextright />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="IogconsultTxtRight" 
		                        data-fgImage="fgImage" 
		                        data-blockTitle="blockTitle"  
			                	data-blockDescription="blockDescription" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<IogconsultTxtRight />
					</section>
					
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="ConsultOverview" 
		                        data-blockTitle="blockTitle"  
			                	data-blockDescription="blockDescription" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<ConsultOverview />
					</section>
					
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="ImgBlock" 
		                        data-fgImage="fgImage"  
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<ImgBlock />
					</section>
					
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Aboutusvision" 
		                        data-fgImage="fgImage"  
			                	data-rBlocksTitle       ="rBlocksTitle" 
								data-rBlocksDescription ="rBlocksDescription"  
								data-RepetedBlock 		="RepetedBlock" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Aboutusvision />
					</section>

	                <section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Commoninfoblock"
			                    data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription" 
								data-fgImage="fgImage"  
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Commoninfoblock />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Commonservicesblock" 
			                	data-rBlocksTitle       ="rBlocksTitle" 
								data-rBlocksDescription ="rBlocksDescription" 
								data-rBlocksImage 		="rBlocksImage" 
								data-rBlocksLink  		="rBlocksLink" 
								data-RepetedBlock 		="RepetedBlock" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Commonservicesblock />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="CommonservicesblockTitle"
			                    data-blockTitle         ="blockTitle"  
			                	data-rBlocksTitle       ="rBlocksTitle" 
								data-rBlocksDescription ="rBlocksDescription" 
								data-rBlocksImage 		="rBlocksImage" 
								data-rBlocksLink  		="rBlocksLink" 
								data-RepetedBlock 		="RepetedBlock" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<CommonservicesblockTitle />
					</section>

	                <section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="News_Events"  
			                	data-rBlocksTitle       ="rBlocksTitle" 
			                	data-rBlocksSubTitle    ="rBlocksSubTitle" 
								data-rBlocksDescription ="rBlocksDescription" 
								data-rBlocksImage 		="rBlocksImage" 
								data-rBlocksLink  		="rBlocksLink" 
								data-RepetedBlock 		="RepetedBlock" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<News_Events />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="TitleDescription" 
		                        data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<TitleDescription />
					</section>

				   {/*	<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="TitleDesc" 
		                        data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<TitleDesc />
					</section>*/}

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="TemplateOverview" 
								data-blockTitle="blockTitle" 
								data-blockDescription="blockDescription"  
								data-fgImage   ="fgImage" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<TemplateOverview />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="ImgTitle" 
		                        data-blockTitle="blockTitle" 
			                	data-bgImage="bgImage" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<ImgTitle />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="TitleRrpeatedImgGrp" 
								data-blockTitle   		="blockTitle"
								data-fgImage      		="fgImage" 
								data-rBlocksTitle       ="rBlocksTitle" 
								data-rBlocksDescription ="rBlocksDescription" 
								data-rBlocksImage 		="rBlocksImage" 
								data-rBlocksLink  		="rBlocksLink" 
								data-RepetedBlock 		="RepetedBlock" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<TitleRrpeatedImgGrp />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="ExpertiseServicesOffered" 
								data-blockTitle   		="blockTitle"
								data-rBlocksTitle       ="rBlocksTitle" 
								data-rBlocksDescription ="rBlocksDescription" 
								data-rBlocksImage 		="rBlocksImage" 
								data-rBlocksLink  		="rBlocksLink" 
								data-RepetedBlock 		="RepetedBlock"
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<ExpertiseServicesOffered />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="ChallengesTemp" 
								data-blockTitle   		="blockTitle" 
								data-rBlocksDescription ="rBlocksDescription" 
								data-rBlocksImage 		="rBlocksImage" 
								data-rBlocksLink  		="rBlocksLink" 
								data-RepetedBlock 		="RepetedBlock"
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<ChallengesTemp />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="ConsultingServices" 
								data-blockTitle   		="blockTitle" 
								data-rBlocksTitle       ="rBlocksTitle" 
								data-rBlocksDescription ="rBlocksDescription" 
								data-rBlocksImage 		="rBlocksImage" 
								data-rBlocksLink  		="rBlocksLink" 
								data-RepetedBlock 		="RepetedBlock"
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<ConsultingServices />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="ConsultDownstream" 
								data-blockTitle   		="blockTitle" 
			                	data-blockDescription   ="blockDescription" 
								data-rBlocksTitle       ="rBlocksTitle" 
								data-rBlocksImage       ="rBlocksImage" 
								data-rBlocksDescription ="rBlocksDescription" 
								data-rBlocksLink  		="rBlocksLink" 
								data-RepetedBlock 		="RepetedBlock"
								data-fgImage      		="fgImage" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<ConsultDownstream />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Maincomponent" 
								data-blockTitle   		="blockTitle" 
			                	data-blockDescription   ="blockDescription" 
								data-fgImage   			="fgImage" 
								data-rBlocksTitle       ="rBlocksTitle" 
								data-rBlocksDescription ="rBlocksDescription"
								data-rBlocksImage 		="rBlocksImage"
								data-RepetedBlock 		="RepetedBlock" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Maincomponent />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Careerimpact" 
								data-blockTitle   		="blockTitle" 
			                	data-rBlocksDescription ="rBlocksDescription"
								data-fgImage   			="fgImage" 
								
								data-rBlocksTitle       ="rBlocksTitle" 
			                	data-rBlocksSubTitle    ="rBlocksSubTitle" 

								
								data-RepetedBlock 		="RepetedBlock" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Careerimpact />
					</section>
					
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="CircleMenuBars" 
								data-blockTitle   		="blockTitle"  
								data-rBlocksTitle       ="rBlocksTitle" 
			                	data-rBlocksLink  		="rBlocksLink" 				
								data-RepetedBlock 		="RepetedBlock" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<CircleMenuBars />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Typecomponent1_btn" 
								data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription" 
			                	data-blocksubTitle="blocksubTitle" 
								data-fgImage="fgImage" 
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} >  
			                	
			                	Select this Design
			            </button>
						<Typecomponent1_btn />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Typecomponent2_btn" 
			                    data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription"
			                	data-blocksubTitle="blocksubTitle"  
								data-fgImage="fgImage"  
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Typecomponent2_btn />
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Aboutustextright_btn" 
		                        data-fgImage="fgImage"
		                        data-blocksubTitle="blocksubTitle"    
			                	data-blockDescription="blockDescription" 
			                	className="btn zIndexmtop pull-right" onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>
						<Aboutustextright_btn />
					</section>
				

				</div>
			</div>
		);
	}
}

export default withRouter(Staticblocks);
