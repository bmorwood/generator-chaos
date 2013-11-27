(function(){
    /**
     * event of InitializerFaultEvent.
     *
     * @class InitializerFaultEvent
     * @constructor
     * @param {String} $initializerName initializer name.
     * @namespace <%= nameSpace.toLowerCase() %>.events.initializers
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
	var InitializerFaultEvent = function($initializerName) {
		this.initializerName = $initializerName;
		this.type = InitializerFaultEvent.FAULT;
	};

    /**
     * Fired when a initializer has encountered an error.
     *
     * @event FAULT
     * @type {String}
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