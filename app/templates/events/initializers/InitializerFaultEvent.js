(function(){
    /**
     * event of InitializerFaultEvent.
     *
     * @class InitializerFaultEvent
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.events.initializers
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
	var InitializerFaultEvent = function($initializerName) {
		this.initializerName = $initializerName;
		this.type = InitializerFaultEvent.FAULT;
	};

    /**
     * Fired when an sample event occurs...
     *
     * @event FAULT
     **/
	InitializerFaultEvent.FAULT = "<%= nameSpace.toLowerCase() %>.initializerfaultevent::fault";
	
	var p = InitializerFaultEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = InitializerFaultEvent;
	
	p.initializerName;

	p.toString = function (){
		return "InitializerFaultEvent";
	};
	
    <%= nameSpace %>.InitializerFaultEvent = InitializerFaultEvent;
}());