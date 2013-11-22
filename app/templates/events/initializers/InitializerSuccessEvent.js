(function(){
    /**
     * event of InitializerSuccessEvent.
     *
     * @class InitializerSuccessEvent
     * @extends <%= nameSpace %>.AbstractEvent
     * @constructor
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
	InitializerSuccessEvent.SUCCESS = ''<%= nameSpace.toLowerCase() %>.initializersuccessevent::success'';
	
	var p = InitializerSuccessEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = InitializerSuccessEvent;
	
	p.initializerName;

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'InitializerSuccessEvent';
	};
	
    <%= nameSpace %>.InitializerSuccessEvent = InitializerSuccessEvent;
}());