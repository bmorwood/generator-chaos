(function(){
    /**
     * event of InitializerFaultEvent.
     *
     * @class InitializerFaultEvent
     * @extends <%= nameSpace %>.AbstractEvent
     * @constructor
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

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return "InitializerFaultEvent";
	};
	
    <%= nameSpace %>.InitializerFaultEvent = InitializerFaultEvent;
}());