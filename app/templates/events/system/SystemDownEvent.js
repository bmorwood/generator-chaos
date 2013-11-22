(function(){
	
	var SystemDownEvent = function($instruction) {
		this.instruction = $instruction;
		this.type = SystemDownEvent.SYSTEM_DOWN;
	};
	
	SystemDownEvent.SYSTEM_DOWN = '<%= nameSpace.toLowerCase() %>.systemdownevent::systemdown';

	var p = SystemDownEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = SystemDownEvent;
	
	p.instruction;
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'SystemDownEvent';
	};
	
<%= nameSpace %>.SystemDownEvent = SystemDownEvent;
}());