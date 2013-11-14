(function(){
	
	var SystemDownEvent = function($instruction) {
		this.instruction = $instruction;
		this.type = SystemDownEvent.SYSTEM_DOWN;
	};
	
	SystemDownEvent.SYSTEM_DOWN = "system_down";

	var p = SystemDownEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = SystemDownEvent;
	
	p.instruction;

	p.toString = function (){
		return "[SystemDownEvent]";
	};
	
<%= nameSpace %>.SystemDownEvent = SystemDownEvent;
}());