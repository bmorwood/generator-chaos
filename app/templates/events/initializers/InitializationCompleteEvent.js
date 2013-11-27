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
     * Fired when initializer is completed without an errors.
     *
     * @event COMPLETE
     * @type {String}
     **/
	InitializationCompleteEvent.COMPLETE = "<%= nameSpace.toLowerCase() %>.initializationcompleteevent::complete";
	
	var p = InitializationCompleteEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = InitializationCompleteEvent;

	p.toString = function (){
		return "InitializationCompleteEvent";
	};
	
    <%= nameSpace %>.InitializationCompleteEvent = InitializationCompleteEvent;
}());