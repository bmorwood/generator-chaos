(function(){
    /**
     * event of AppConfigEvent.
     *
     * @class AppConfigEvent
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.events.app
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
	var AppConfigEvent = function($type) {
		this.type = $type;
	};

    /**
     * Fired when an sample event occurs...
     *
     * @event CONFIG_READY
     **/
	AppConfigEvent.CONFIG_READY = '<%= nameSpace.toLowerCase() %>.appconfigevent::config.ready';
    /**
     * Fired when an sample event occurs...
     *
     * @event CONFIG_ERROR
     **/
	AppConfigEvent.CONFIG_ERROR = '<%= nameSpace.toLowerCase() %>.appconfigevent::config.error';
    /**
     * Fired when an sample event occurs...
     *
     * @event CONFIG_LOAD
     **/
	AppConfigEvent.CONFIG_LOAD = '<%= nameSpace.toLowerCase() %>.appconfigevent::config.load';

	var p = AppConfigEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = AppConfigEvent;

	p.toString = function (){
		return 'AppConfigEvent';
	};

    <%= nameSpace %>.AppConfigEvent = AppConfigEvent;
}());