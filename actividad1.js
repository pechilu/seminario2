var ev = require('events');
var emitter = new ev.EventEmitter;

var ev1 = "evento1";
var ev2 = "evento2";

var num1 = 0;

emitter.on(ev1,function(){
	console.log(ev1)});
emitter.on(ev2,function(){
	num1++;
	console.log(ev2 + " repeticion "+num1);
	if(num1==5) emitter.removeAllListeners([ev1]);
	});

setInterval(function(){
	emitter.emit(ev1);},1000);
setInterval(function(){
	emitter.emit(ev2);},2000);	
	
	
