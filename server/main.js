// the server of my profile

const express = require("express")
const app = express();


app.get("/", function(req, res){
    res.sendfile("/root/test/myprofile/source/index.html");
})


const server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listenning on "+host+":" + port);
    
})

