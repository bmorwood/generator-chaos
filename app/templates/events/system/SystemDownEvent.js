(function(){
    /**
     * service of SystemDownEvent.
     *
     * @class SystemDownEvent
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.events.system
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
	var SystemDownEvent = function($instruction) {
		this.instruction = $instruction;
		this.type = SystemDownEvent.SYSTEM_DOWN;
	};
	
	SystemDownEvent.SYSTEM_DOWN = '<%= nameSpace.toLowerCase() %>.systemdownevent::systemdown';

	var p = SystemDownEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = SystemDownEvent;
	
	p.instruction;

	p.toString = function (){
		return 'SystemDownEvent';
	};
	
<%= nameSpace %>.SystemDownEvent = SystemDownEvent;
}());