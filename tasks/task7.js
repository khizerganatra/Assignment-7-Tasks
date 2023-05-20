var currentTime = new Date();
var currentWaqt = "Today is : "+currentTime.getDate() +" / "+ currentTime.getMonth() +" / "+ currentTime.getFullYear() ;

var currrentTarekh = " and current time is : "+ currentTime.getHours() +" : "+ currentTime.getMinutes() +" : "+ currentTime.getSeconds() 

function checkDate(){
    alert(currentWaqt + currrentTarekh )
}