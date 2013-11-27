(function(){
    /**
     * event of InitializerSuccessEvent.
     *
     * @class InitializerSuccessEvent
     * @constructor
     * @param {String} $initializerName initializer name.
     * @namespace <%= nameSpace.toLowerCase() %>.events.initializers
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
	var InitializerSuccessEvent = function($initializerName) {
		this.initializerName = $initializerName;
		this.type = InitializerSuccessEvent.SUCCESS;
	};

    /**
     * Fired when a initializer is completed without errors.
     *
     * @event SUCCESS
     * @type {String}
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