(function(){
    /**
     * event of InitializationCompleteEvent.
     *
     * @class InitializationCompleteEvent
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.events.initializers
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
	var InitializationCompleteEvent = function() {
		this.type = InitializationCompleteEvent.COMPLETE;
	};

    /**
     * Fired when an sample event occurs...
     *
     * @event COMPLETE
     **/
	InitializationCompleteEvent.COMPLETE = "<%= nameSpace.toLowerCase() %>.initializationcompleteevent::complete";
	
	var p = InitializationCompleteEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = InitializationCompleteEvent;

	p.toString = function (){
		return "InitializationCompleteEvent";
	};
	
    <%= nameSpace %>.InitializationCompleteEvent = InitializationCompleteEvent;
}());