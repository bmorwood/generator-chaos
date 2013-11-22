(function(){
    /**
     * event of InitializationCompleteEvent.
     *
     * @class InitializationCompleteEvent
     * @extends <%= nameSpace %>.AbstractEvent
     * @constructor
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

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return "InitializationCompleteEvent";
	};
	
    <%= nameSpace %>.InitializationCompleteEvent = InitializationCompleteEvent;
}());