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




/*app.post('/translate', (req, res) => {
    var q = req.body.q;
    console.log(q);
  var options = { method: 'POST',
  url: 'https://translation.googleapis.com/language/translate/v2',
  form: 
   { key: process.env.TRANSLATE,
     q: q,
     target: 'en' } };
    request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.send(body);
    });
})
*/

app.post('/send-email', (req, res)=> {
	console.log("inside app.js req:");
	let transporter = nodeMailer.createTransport({
		host: globalVariable.emailHost,
		port: globalVariable.emailPort,
		auth: {
			user: globalVariable.user,
			pass: globalVariable.pass
		}
	});
	console.log("transporter",transporter);
	console.log("globalVariable.user:",globalVariable.user);
	let mailOptions = {
		from   : globalVariable.project+'<'+globalVariable.user+'>', // sender address
		to     : req.body.email, // list of receivers
		subject: req.body.subject, // Subject line
		text   : req.body.text, // plain text body
		html   : req.body.mail // html body
	};	
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {			
			return "Failed";
		}
		if(info){
			res.status(200).json({ 
				message: "Success",
			});
		}else{
			res.status(401).json({ 
				message: "Failed",
			});
		}
		res.render('index');
	});
});

// handle all other request which not found 
app.use((req, res, next) => {
		const error = new Error("This Page Is Not Found");
		error.status = 404;
		next(error);
	});


	app.use((error, req, res, next) => {

		fs.readFile('./index.html', function (err, html) {
	    if (err) {
	        throw err; 
	    }      
			// res.writeHeader(200, {"Content-Type": "text/html"});  
	    // res.write(html);  

			res.status(error.status || 500);
			res.json({
					error: {
					message: error.message
					}
				});
	    res.end();  
	  });

	});

	module.exports = app;