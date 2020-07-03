const express = require('express');
const app = express();
const morgan = require('morgan');// morgan call next function if problem occure
const bodyParser = require('body-parser');// this package use to formate json data 
const mongoose = require ('mongoose');
var nodeMailer = require('nodemailer');
const globalVariable = require("./nodemon.js");

// Routes - Core Admin
// const userRoutes 					= require('./api/coreAdmin/routes/users.js');
// const rolesRoutes					= require('./api/coreAdmin/routes/roles.js');
/*const masternotificationRoutes      = require('./api/coreAdmin/notificationManagement/RoutesMasterNotification.js');
const notificationRoutes		    = require('./api/coreAdmin/notificationManagement/RoutesNotification.js');*/
// const companysettingsRoutes			= require('./api/coreAdmin/routes/companysettings.js');
// const projectSettingRoutes 			= require('./api/coreAdmin/routes/projectsettings.js');

const systemSecurityRoutes 				= require('./api/coreAdmin/systemSecurity/RoutesSystemSecurity.js');
const userRoutes 						= require('./api/coreAdmin/userManagement/RoutesUsers.js');
const rolesRoutes						= require('./api/coreAdmin/rolesManagement/RoutesRoles.js');
const rolesentitymasterRoutes			= require('./api/coreAdmin/RoleEntityMaster/Routes.js');
const masternotificationRoutes			= require('./api/coreAdmin/notificationManagement/RoutesMasterNotification.js');
const notificationRoutes				= require('./api/coreAdmin/notificationManagement/RoutesNotification.js');
const companySettingsRoutes				= require('./api/coreAdmin/companySettings/RoutesCompanySettings.js');
const projectSettingRoutes 				= require('./api/coreAdmin/projectSettings/RoutesProjectSettings.js');
const globalMasterRoutes 				= require('./api/coreAdmin/globalMaster/RoutesGlobalMaster.js');
const preferencesRoutes 				= require('./api/coreAdmin/preferences/RoutesPreferences.js');
const paymentgatewayRoutes 				= require('./api/coreAdmin/paymentgateway/Routes.js');

// Routes - CMS
const blockRoutes 					= require('./api/cms/blocks/routes.js');
const pageRoutes 					= require('./api/cms/pages/routes.js');
// Routers - IOG
const blogRoutes 					= require('./api/cms/blogs/routes.js');
const offeringsRoutes 				= require('./api/iog/routes/offerings.js');
const subscriptionorderRoutes 		= require('./api/iog/routes/subscriptionorders.js');
const blogcommentRoute              = require('./api/iog/routes/blogcomment.js');
const jobformRoute                  = require('./api/iog/routes/jobform.js');
const jobapplicationformRoute       = require('./api/iog/routes/jobapplicationform.js');

// global.JWT_KEY = "secret";

mongoose.connect('mongodb://localhost/'+globalVariable.dbname,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
mongoose.promise = global.Promise;

global.titleCase = function(Str){
    return new Promise(function(resolve,reject){
        resolve(Str.charAt(0).toUpperCase()+Str.slice(1));
    });
}

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}
	next();
});

//URL's collection wise
//coreAdmin

app.use("/api/roles", rolesRoutes);
app.use('/api/projectsettings',projectSettingRoutes);
app.use("/api/auth", systemSecurityRoutes);
app.use("/api/users", userRoutes);
app.use("/api/masternotifications",masternotificationRoutes);
app.use('/api/notifications',notificationRoutes);
app.use('/api/companysettings',companySettingsRoutes);
app.use('/api/globalmaster',globalMasterRoutes);
app.use('/api/preferences',preferencesRoutes);
// app.use("/api/entitymaster", entityRoutes);
/*
app.use("/api/packagetypemaster", packageTypeMasterRoutes);
app.use("/api/packagenamemaster", packageNameMasterRoutes);

app.use("/api/paymentgateway", paymentgatewayRoutes);

app.use("/api/packagemaster", packageMasterRoutes);

app.use("/api/packagemasterbulk", packageMasterBulkRoutes);
app.use("/api/categorymaster", categoryMasterRoutes);
app.use("/api/brandmaster", brandMasterRoutes);
app.use("/api/citytypemaster", cityTypeRoutes);
app.use("/api/documententitymaster", documententitymasterRoutes);*/
app.use("/api/rolesentitymaster", rolesentitymasterRoutes);

/*app.use("/api/documentlistmaster", documentListMasterRoutes);
app.use("/api/departmentmaster", departmentMasterRoutes);
app.use("/api/designationmaster", designationMasterRoutes);
app.use("/api/fueltypemaster", fuelTypeMasterRoutes);
app.use("/api/locationtypemaster", locationTypeMasterRoutes);
app.use("/api/taxnamemaster", taxNameMasterRoutes);
app.use("/api/modelmaster", modelMasterRoutes);
app.use("/api/citynamemaster", cityNameMasterRoutes);
app.use("/api/vehiclemaster", vehicleMasterRoutes);
app.use("/api/modulemaster", moduleRoutes);
app.use("/api/facilitymaster", facilityRoutes);

app.use("/api/personmaster", personMasterRoutes);
app.use("/api/contract", contractRoutes);
app.use("/api/entitymapping", entityMappingRoutes);
app.use("/api/vehicledrivermapping", vehicleDriverMappingRoutes);
app.use("/api/bookingmaster", bookingRoutes);
app.use("/api/accessmaster", accessRoutes);
app.use("/api/expensetypemaster", expenseTypeRoutes);
app.use("/api/VehicleEmployeeMapping", VehicleEmployeeMappingRoutes);
app.use("/api/expenseitemmaster", expenseItemRoutes);
app.use("/api/eventmapping", EventMappingRoutes);
app.use("/api/purposeoftravelmaster", PurposeOfTravelRoutes);
app.use("/api/nighttimingsmaster", NightTimingsRoutes);
app.use("/api/earlymorningtimingsmaster", EarlyMorningTimingsRoutes);
app.use("/api/timeformat", TimeFormatRoutes);
*/

// app.use("/api/users", userRoutes);
// app.use("/api/roles", rolesRoutes);
/*app.use("/api/masternotifications",masternotificationRoutes);
app.use('/api/notifications',notificationRoutes);*/
// app.use('/api/companysettings',companysettingsRoutes);
// app.use('/api/projectsettings',projectSettingRoutes);

//CMS
app.use("/api/blocks",blockRoutes);
app.use("/api/pages",pageRoutes);
//IOG
app.use('/api/blogs',blogRoutes);
app.use('/api/offerings',offeringsRoutes);
app.use('/api/subscriptionorders',subscriptionorderRoutes);
app.use('/api/blogcomment',blogcommentRoute);
app.use('/api/jobform',jobformRoute);
app.use('/api/jobapplicationform',jobapplicationformRoute);



app.post('/send-email', (req, res)=> {
	// console.log('req',req.body);
	let transporter = nodeMailer.createTransport({
			// service: 'Gmail',
			host: 'smtp.gmail.com',
			port: 587,
			// port: 465,
			auth: {
				/*user: 'kycwealthyvia@gmail.com',
				pass: 'Artha123$'*/
				 user : 'iassureitmail@gmail.com',
				 pass : 'iAssureIT@123'
			}
		});
		console.log('after transport');
		let mailOptions = {
			
			// from   : '"Wealthyvia" <kycwealthyvia@gmail.com>', // sender address
			from   : '"iAssureIT" <iassureitmail@gmail.com>', // sender address
			to     : req.body.email, // list of receivers
			subject: req.body.subject, // Subject line
			text   : req.body.text, // plain text body
			html   : req.body.mail, // html body
			attachments : [
								{
								filename: data.title + ".jpg",
								contentType:  'image/jpeg/file/pdf/docx',
								content: new Buffer.from(req.body.file.split("base64,")[1], "base64"),
								}
							]
		};
		console.log('after mailoption');
		//name email mobilenumber message
		// console.log("mailOptions",mailOptions);
		
		transporter.sendMail(mailOptions, (error, info) => {
			console.log('in mail');
			if (error) {
				
				console.log("send mail error",error);
				return "Failed";
			}
			if(info){
				console.log('in info');
				// return "Success";
				res.status(200).json({ 
					
					message: "Success",
					// return "Success",

				});
			}
	
			res.render('index');
		});
});
app.post('/send-email/portalreview', (req, res)=> {
	// console.log('req',req.body);
	let transporter = nodeMailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		auth: { 
			// user: 'review.wealthyvia@gmail.com',
			// pass: 'Artha123$'
			user : 'iassureitmail@gmail.com',
				pass : 'iAssureIT@123'
		}
	});
	let mailOptions = {
			// from   : '"Wealthyvia" <review.wealthyvia@gmail.com>', // sender address
			from   : '"Wealthyvia" <iassureitmail@gmail.com>', // sender address
			to     : req.body.email, // list of receivers
			subject: req.body.subject, // Subject line
			text   : req.body.text, // plain text body
			html   : req.body.mail // html body
		};
		// console.log("mailOptions",mailOptions);

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log("send mail error",error);
				return "Failed";
			}
			if(info){
			   return "Success";
			}
			// console.log('Message %s sent: %s', info.messageId, info.response);
			res.render('index');
		});
});


// handle all other request which not found 
app.use((req, res, next) => {
	const error = new Error('Not Found Manual ERROR');
	error.status = 404;
	next(error);
		// when we get 404 error it send to next 
});

// it will handel all error in the application
app.use((error, req, res, next) => {
	// 500 type error is used when we use database
	res.status(error.status || 500);
	res.json({
		error:{
			message:error.message
		}
	})
});

module.exports = app;
