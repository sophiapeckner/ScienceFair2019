var url = "http://speedtest.dal01.softlayer.com/downloads/test100.zip";
var ts1 = Math.round((new Date()).getTime() / 1000);
var moment = require('moment-timezone');
const currentTime = moment().tz("America/Los_Angeles").format();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        var ts2 = Math.round((new Date()).getTime() / 1000);
        var finalTime = Math.round(800/(ts2-ts1));
        console.log(currentTime+','+ts1+','+ts2+','+finalTime)
    }else if (this.readyState == 0 && this.status != 200){
        console.log(currentTime +','+ "Error: "+this.readyState + ' ' + this.status)
    }
}