const express= require("express");
const participantRouter= express();
participantRouter.set('view engine', 'ejs');
participantRouter.set('views','./views/participant')
const bodyParser = require("body-parser");
const participantcontroller = require("../controller/participantcontroller");
 const bodyparser= require('body-parser');
 participantRouter.use(bodyParser.json());
 participantRouter.use(bodyParser.urlencoded({extended:true}));

 participantRouter.get("/participantlogin",participantcontroller.participantlogin);
 participantRouter.post("/participantlogin",participantcontroller.loadaddparticpantsparty)
 participantRouter.get("/contribute",participantcontroller.loadcontributors)
 participantRouter.post("/contribute",participantcontroller.insertContributors)
module.exports=participantRouter;