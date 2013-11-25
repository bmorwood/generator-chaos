(function(){
    /**
     * event of InitializerSuccessEvent.
     *
     * @class InitializerSuccessEvent
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.events.initializers
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
	var InitializerSuccessEvent = function($initializerName) {
		this.initializerName = $initializerName;
		this.type = InitializerSuccessEvent.SUCCESS;
	};

    /**
     * Fired when an sample event occurs...
     *
     * @event SUCCESS
     **/
	InitializerSuccessEvent.SUCCESS = '<%= nameSpace.toLowerCase() %>.initializersuccessevent::success';
	
	var p = InitializerSuccessEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = InitializerSuccessEvent;
	
	p.initializerName;

	p.toString = function (){
		return 'InitializerSuccessEvent';
	};
	
    <%= nameSpace %>.InitializerSuccessEvent = InitializerSuccessEvent;
}());