var topic = ["課程介紹","環境準備","國定假日","Lab2 & Lab3","Lab4"];
var startDate= new Date();
function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDay(3,7);
